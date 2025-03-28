const invalidaCredentialMessage = document.getElementById("invalid_credential_message")

document.getElementById("form_login").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const documentNumber = document.getElementById("document_number").value;
    const password = document.getElementById("password").value;

    request = {
        "doc_numer": documentNumber,
        "password": password
    }


    const response = fetch('http://localhost:8080/api/auth/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(request)
    });

    if (!response.ok) {

        if(response.status == 401) {
            invalidaCredentialMessage.innerText = "invalid credentials"
        }
        throw new Error(`Response status: ${response.status}`);
      }

    window.location.href = "http://127.0.0.1:5500/colsalud/pages/home/home.html";
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


