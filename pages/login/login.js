const invalidaCredentialMessage = document.getElementById("invalid_credential_message")

document.getElementById("form_login").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const documentNumber = document.getElementById("document_number").value;
    const password = document.getElementById("password").value;

    request = {
        "username": documentNumber,
        "password": password
    }

    loginUser(request)
   

});

async function loginUser(request) {
    try {
        
        const response = await fetch('http://localhost:8080/api/auth/login', {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(request)
        });

        

        if (!response.ok) { 
            if (response.status === 401) {
                invalidaCredentialMessage.innerText = "Invalid credentials";
            }
            console.log({ response }, "error");
            throw new Error(`Response status: ${response.status}`);
        }

        console.log({response});

    
        //window.location.href = "http://127.0.0.1:5500/pages/home/home.html";

    } catch (error) {
        console.error("Error en la petición:", error.message);
    }
}

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


