function alert(e) {
    if (confirm("Está seguro de que desea eliminar el registor?")) {
        return true;
    } else {
        e.preventDefault();
    }
}
let linkDelete = document.querySelectorAll(".button--absolute");
for (let i = 0; i < linkDelete.length; i++) {
    
    linkDelete[i].addEventListener("click", alert);
}