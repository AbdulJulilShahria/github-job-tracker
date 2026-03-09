function signIn(event) {
  event.preventDefault();
  const inputUsername = document.getElementById("inputUsername");
  const userName = inputUsername.value;
  console.log(userName);
  const inputPassword = document.getElementById("inputPassword");
  const password = inputPassword.value;
  console.log(password);
  if (userName == "admin" && password == "admin123") {
    alert("Login success");
    window.location.assign("./home.html");
  } else {
    alert("login failed");
    return;
  }
}

const issueContainer = document.getElementById("issuesContainer");
const loadingSpinner = document.getElementById("loadingSpinner");
const modalDetails = document.getElementById("my_modal_1");
const modalTitle = document.getElementById("modalTitle");
const openByWho = document.getElementById("openByWho");
const updateDate = document.getElementById("updateDate");
const modalDescription = document.getElementById("modalDescription");
const assignee = document.getElementById("assignee");
const priority = document.getElementById("priority");
const modalStatus = document.getElementById("modalStatus");
const btnContainer = document.getElementById("btnContainer");

// async function loadCategories() {
//   const res = await fetch(
//     "https://phi-lab-server.vercel.app/api/v1/lab/issues",
//   );
//   const data = await res.json();
//   console.log(data);
//   data.data.forEach((element) => {
//     const ele = element.status;
//     const btn = document.createElement("button");
//     btn.className = "bg-white p-4 rounded-xl shadow mb-6 ";
//     btn.textContent = ele;
//     btnContainer.appendChild(btn);
//     // console.log(ele)
//   });
// }

function showLoading() {
  loadingSpinner.classList.remove("hidden");
  loadingSpinner.classList.add("flex");
  issueContainer.innerHTML = "";
}
function hideLoading() {
  loadingSpinner.classList.add("hidden");
}
async function loadIssues() {
  showLoading();
  const res = await fetch(
    "https://phi-lab-server.vercel.app/api/v1/lab/issues",
  );
  const data = await res.json();
  hideLoading();
  displayIssues(data.data);
}
function displayIssues(issues) {
  // console.log(issues);
  issues.forEach((issue) => {
    console.log(issue);
    const label = issue.labels;
    // console.log(label[0], label[1]);

    const card = document.createElement("div");
    card.className = `bg-white rounded-xl shadow p-4 border-t-4 ${issue.priority == "low" ? "border-indigo-600" : "border-green-500"}`;
    card.innerHTML = `  <div class="flex justify-between mb-2"  >
                <img src="./assets/Open-Status.png" alt="">
                <h3 class="badge badge-soft font-medium badge-secondary">
                    ${issue.priority.toUpperCase()}
                </h3>
            </div>
            <h3 class="font-semibold text-sm mb-2 cursor-pointer hover:text-indigo-600" onclick="openIssueModal(${issue.id})">
                ${issue.title}
            </h3>

            <p class="text-gray-500 text-xs mb-3 line-clamp-2 cursor-pointer hover:text-indigo-600" onclick="openIssueModal(${issue.id})">
                ${issue.description}
            </p>

            <div class="flex gap-2 mb-3">

                <span class="badge badge-soft font-medium badge-secondary">
                    ${label[0].toUpperCase()}
                </span>

                <span class="badge badge-soft badge-warning">
                     ${label[1]}
                </span>

            </div>
            <hr class="opacity-20 my-3">


            <div onclick="openIssueModal(${issue.id})" class="cursor-pointer hover:text-indigo-600 text-xs text-gray-400">
                ${issue.author} <br>
                ${issue.createdAt}
            </div>
        `;

    issueContainer.appendChild(card);
  });
}
async function openIssueModal(issueId) {
  console.log(issueId);
  const res = await fetch(
    `https://phi-lab-server.vercel.app/api/v1/lab/issue/${issueId}`,
  );
  const data = await res.json();
  const issueDetails = data.data;
  console.log(issueDetails);
  modalDetails.showModal();
  modalTitle.textContent = issueDetails.title;
  modalDescription.textContent = issueDetails.description;
  openByWho.textContent = issueDetails.author;
  updateDate.textContent = issueDetails.updatedAt;
  assignee.textContent = issueDetails.assignee;
  priority.textContent = issueDetails.priority;
  modalStatus.textContent = issueDetails.status;
}
// loadCategories();
loadIssues();
async function btnSearch() {
  const inputSearch = document.getElementById("inputSearch");
  const searchValue = inputSearch.value.trim().toLowerCase();
  // console.log(searchValue);
  const res = await fetch(
    `https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${searchValue}`,
  );
  const data = await res.json();
  const allIssue = data.data;
  console.log(allIssue);
  const filterIssue = allIssue.filter((issue) =>
    issue.title.toLowerCase().includes(searchValue),
  );
  displayIssues(filterIssue);
}
const tabAll = document.getElementById("tab-all");
const tabClosed = document.getElementById("tab-closed");
const tabOpen = document.getElementById("tab-open");


async function switchTab(id) {
  tabAll.classList.remove("bg-indigo-600", "text-white");
  tabClosed.classList.remove("bg-indigo-600", "text-white");
  tabOpen.classList.remove("bg-indigo-600", "text-white");

  const selected = document.getElementById(id);
  selected.classList.add("bg-indigo-600", "text-white");

  const res=await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`)
  const data= await res.json()
  console.log(data)
  displayIssues(data.data)
}
