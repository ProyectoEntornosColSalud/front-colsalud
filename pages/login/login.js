const invalidaCredentialMessage = document.getElementById("invalid_credential_message")

document.getElementById("form_login").addEventListener("submit", async function(event) {
    event.preventDefault();
    
    const documentNumber = document.getElementById("document_number").value;
    const password = document.getElementById("password").value;

    request = {
        "username": documentNumber,
        "password": password
    }

    console.log(request)


    const response = await fetch('http://localhost:8080/api/auth/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(request),
        credentials: "include"
    });

    if (!response.ok) {

        if(response.status == 401) {
            invalidaCredentialMessage.innerText = "invalid credentials"
        }
        throw new Error(`Response status: ${response.status}`);
      }

    if (response.ok) {
        console.log(response.headers)
    
        localStorage.setItem("colmedica_token", response.headers.get("Authorization"))
        window.location.href = "http://127.0.0.1:5500/pages/home/home.html";
       
    }

    
});

document.getElementById("toggle_password").addEventListener("click", function() {
    const passwordInput = document.getElementById("password");


    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        this.textContent = "🔒";
    } else {
        passwordInput.type = "password";
        this.textContent = "👀"; 
    }
});


