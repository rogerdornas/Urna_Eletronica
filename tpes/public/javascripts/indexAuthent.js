var logFormElem = document.getElementsByClassName("form-signin")[0];
var regFormElem = document.getElementsByClassName("form-signin")[1];
var overlayElem = document.getElementById("overlay");
var logCardElem = overlayElem.firstElementChild;
var regCardElem = overlayElem.children[1];    
var perfilButtonElem = document.getElementById("perfil");

// for messaging passwords mismatch in registry (called in some input element, in the index.html file, inside the register card element)
function passMatch() { 
  
    var inputPass = regFormElem.children[4];
    var inputPassConf = regFormElem.children[5];

    if (inputPass.value != inputPassConf.value)
        inputPassConf.setCustomValidity('Passwords must match');
    else
        inputPassConf.setCustomValidity(''); 

    return true; 
}

// for messaging result after log trial fails
// the message is removed in the popout.js file
// (when the popout fades)
function loginErrorMessage(message) {

    var logButton = logFormElem.children[4];

    logButton.innerHTML = message;
}

// for messaging result after register trial fails
// the message is removed in the popout.js file
// (when the popout fades)
function regErrorMessage(message) {

    var regButton = regFormElem.children[7];

    regButton.innerHTML = message;
}

// send login data to backend and try to log in
logFormElem.addEventListener("submit", function(event) {

    event.preventDefault();

    var inputEmail = logFormElem.children[1].value;
    var inputPassword = logFormElem.children[2].value;

    var obj={email:inputEmail, pass:inputPassword};

    fetch("/loginData", {

        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(obj)

    }).then((response) => response.json())
      .then(function(data) {

        if (data.message == "wrong email or password" || data.message == "login error (system)") {

            loginErrorMessage(data.message);

        } else {

            logCardElem.classList.add("d-none");
            overlayElem.classList.add("d-none");

            window.sessionStorage.setItem("token", data.t);
            window.sessionStorage.setItem("email", inputEmail);

            fetch("/perfil", {
                
                method:"GET",
                headers:{

                    token: data.t,
                    email: data.email
                }

            }).then((response) => response.text())
              .then((data) => {document.write(data)});
        }
    });
});

// send register data to backend and try to register
regFormElem.addEventListener("submit", function(event) {

    event.preventDefault();

    var inputName = regFormElem.children[1].value;
    var inputEmail = regFormElem.children[2].value;
    var inputPassword = regFormElem.children[4].value;

    var obj={name:inputName, email:inputEmail, pass:inputPassword};

    fetch("/regData", {

        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(obj)

    }).then((r) => r.json())
      .then(function(r) {

        if (r.message == "email already exists" || r.message == "error on registering (system)") {

            regErrorMessage(r.message);
        
        } else {

            regCardElem.classList.add("d-none");
            overlayElem.classList.add("d-none");
        }
      });
});
