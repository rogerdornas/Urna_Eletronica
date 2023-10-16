var overlayElem = document.getElementById("overlay");
var logCardElem = overlayElem.firstElementChild;
var regCardElem = overlayElem.children[1];            
var changetoRegCard = document.getElementsByClassName("cadastre-se")[0];
var changetoLogCard = document.getElementsByClassName("login")[0];
var logButton = document.getElementsByClassName("btn btn-primary btn-lg d-block btn-signin")[0];
var regButton = document.getElementsByClassName("btn btn-primary btn-lg d-block btn-signin")[1];

overlayElem.addEventListener("click", function(event) {

    if (event.target.getAttribute("id") == "overlay") {

        if (overlayElem.classList.contains("d-none")) {

            return;

        } else {

            if (logCardElem.classList.contains("d-none")) {

                regCardElem.classList.add("d-none");
                overlayElem.classList.add("d-none");

                if (regButton.innerHTML != "Cadastrar")
                    regButton.innerHTML = "Cadastrar";

            } else if (regCardElem.classList.contains("d-none")) {

                logCardElem.classList.add("d-none");
                overlayElem.classList.add("d-none");

                if (logButton.innerHTML != "Log in")
                    logButton.innerHTML = "Log in";
            }
        }
    }
});

changetoRegCard.addEventListener("click", function(event) {

    logCardElem.classList.add("d-none");
    regCardElem.classList.remove("d-none");
});

changetoLogCard.addEventListener("click", function(event) {

    regCardElem.classList.add("d-none");
    logCardElem.classList.remove("d-none");
});
