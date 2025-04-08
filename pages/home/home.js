const agendar_btn = document.getElementById("btn_agendar")
const gestionar_btn = document.getElementById("btn_gestionar")
const filtroEspecialidad = document.getElementById("filtro_especialidad");

agendar_btn.addEventListener("click", function(event){
    agendar_btn.classList.replace("btn-secondary", "btn-primary")
    gestionar_btn.classList.replace("btn-primary", "btn-secondary")
})

gestionar_btn.addEventListener("click", function(event){
    gestionar_btn.classList.replace("btn-secondary", "btn-primary")
    agendar_btn.classList.replace("btn-primary", "btn-secondary")
})


document.addEventListener("DOMContentLoaded", async function() {

    const response = await fetch("http://localhost:8080/api/appointments/specialties",{
        method: "GET",
        headers: {
           "Authorization": "Bearer " + localStorage.getItem("colmedica_token") 
        }
    })

    const data = await response.json();

    console.log(data.forEach(element => {
        const option = document.createElement("option");
        option.value = element.id;
        option.textContent = element.name;
        filtroEspecialidad.appendChild(option)
    }))



    


    


});


