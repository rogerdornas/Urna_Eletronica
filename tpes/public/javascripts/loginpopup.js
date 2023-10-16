function loginPopup(activate) {

    var overlayelement = document.getElementById("overlay");

    if (activate) {
    
        overlayelement.classList.remove("d-none");
        overlayelement.firstElementChild.classList.remove("d-none");
    
    } else {

        overlayelement.classList.add("d-none");
        overlayelement.firstElementChild.classList.add("d-none");
    }
}