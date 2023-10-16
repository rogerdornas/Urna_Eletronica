var welcome = document.getElementById("perfil");

fetch("perfil/perfilData", {
                   
    method:"GET",
    headers: {

        token: window.sessionStorage.getItem("token"),
        email: window.sessionStorage.getItem("email")
    }

}).then((response) => response.json())
  .then(function(data) {

        document.getElementById("profile_nome").innerHTML = "Nome:  " + data.name;
        document.getElementById("profile_email").innerHTML = "Email:  " + data.email;
        welcome.innerHTML = "Bem-vindo(a), " + data.name;
  });
