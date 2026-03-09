function signIn (event){
    event.preventDefault();
    const inputUsername = document.getElementById("inputUsername");
    const userName= inputUsername.value;
    console.log(userName)
    const inputPassword = document.getElementById("inputPassword");
    const password = inputPassword.value;
    console.log(password)
    if(userName == "admin" && password == 'admin123'){
        alert('Login success')
        window.location.assign('./home.html')
    }else{
        alert('login failed')
        return;
    }
}

const issueContainer = document.getElementById('issuesContainer');

async function loadIssues(){
    const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    const data = await res.json();
    displayIssues(data.data);
}
function displayIssues(issues){
    console.log(issues)
    issues.forEach(issue => {
        console.log(issue)
        const card = document.createElement('div');
        card.className = "bg-white rounded-xl shadow p-4 border-t-4 border-green-500";
        card.innerHTML = `  <div class="flex justify-between mb-2">
                <img src="./assets/Open-Status.png" alt="">
                <h3 class="badge badge-soft font-medium badge-secondary">
                    ${issue.priority}
                </h3>
            </div>
            <h3 class="font-semibold text-sm mb-2">
                ${issue.title}
            </h3>

            <p class="text-gray-500 text-xs mb-3 line-clamp-2">
                ${issue.description}
            </p>

            <div class="flex gap-2 mb-3">

                <span class="badge badge-soft font-medium badge-secondary">
                    BUG
                </span>

                <span class="badge badge-soft badge-warning">
                    HELP WANTED
                </span>

            </div>
            <hr class="opacity-20 my-3">


            <div class="text-xs text-gray-400">
                ${issue.author} <br>
                ${issue.createdAt}
            </div>
        `

        issueContainer.appendChild(card);
           

         
    });
}
loadIssues();
