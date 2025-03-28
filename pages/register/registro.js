const errorRegisterMessage = document.getElementById("error_register_message")

document.getElementById("form_register").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Obtener los datos del formulario
    const documentType = document.getElementById("document_type").value;
    const documentNumber = document.getElementById("document_number").value;
    const name = document.getElementById("name").value;
    const lastName = document.getElementById("last_name").value;
    const genre = document.getElementById("genre").value;
    const birthDate = document.getElementById("birth_date").value;
    const email = document.getElementById("email").value;
    const tel = document.getElementById("tel").value;
    const password = document.getElementById("password").value;
    const passwordConfirm = document.getElementById("password_confirm").value;
    


    request = {
        "doc_type": documentType,
        "doc_number": documentNumber,
        "name": name,
        "last_name": lastName,
        "birth_date": birthDate,
        "gender": genre,
        "email": email,
        "phone": tel,
        "password": password
    }

    

    // Simular una acción con los datos (ejemplo: enviarlos por AJAX)
    console.log(request);
    if (password !== passwordConfirm) {
        errorRegisterMessage.textContent = "las contraseñas no coinciden"
        return
    }

    fetch('http://localhost:8080/api/auth/register', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(request)
    });

    //window.location.href = "http://127.0.0.1:5500/colsalud/pages/home/home.html";
});


document.getElementById("toggle_password").addEventListener("click", function() {
    const passwordInput = document.getElementById("password");


    // Alternar entre 'password' y 'text'
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        this.textContent = "🔒"; // Icono de ocultar
    } else {
        passwordInput.type = "password";
        this.textContent = "👀"; // Icono de mostrar
    }
});

document.getElementById("toggle_password_confirm").addEventListener("click", function() {
    const passwordInput = document.getElementById("password_confirm");

    // Alternar entre 'password' y 'text'
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        this.textContent = "🔒"; // Icono de ocultar
    } else {
        passwordInput.type = "password";
        this.textContent = "👀"; // Icono de mostrar
    }
});


let today = new Date();
let maxDate = today.toISOString().split('T')[0]; // Fecha máxima (hoy)
let minDate = new Date(today.getFullYear() - 127, today.getMonth(), today.getDate())
                    .toISOString().split('T')[0]; // Fecha mínima (18 años atrás)

let birthdateInput = document.getElementById("birth_date");
birthdateInput.setAttribute("max", maxDate); // Restringe fecha futura
birthdateInput.setAttribute("min", minDate); // Restringe menores de 18