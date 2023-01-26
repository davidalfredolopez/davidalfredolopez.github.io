//Funcion que te calcula la edad
function edad() {
    var today = new Date();
    var birthdate = new Date("06/24/1998");
    var age = today.getFullYear() - birthdate.getFullYear();
    var m = today.getMonth() - birthdate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }
    document.getElementById("edad").innerHTML = age;
}

// Ejecutando la funcion
edad();