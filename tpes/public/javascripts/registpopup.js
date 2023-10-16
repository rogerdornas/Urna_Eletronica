function registerPopup(activate) {

    var overlayelement = document.getElementById("overlay");
    let children = overlayelement.children;

    if (activate) {
    
        overlayelement.classList.remove("d-none");
        children[1].classList.remove("d-none");

    } else {

        overlayelement.classList.add("d-none");
        children[1].classList.add("d-none");
    }
}