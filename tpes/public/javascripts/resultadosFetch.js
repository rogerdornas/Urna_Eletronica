var welcome = document.getElementById("perfil");

fetch("resultados/perfilData", {
                   
    method:"GET",
    headers: {

        token: window.sessionStorage.getItem("token"),
        email: window.sessionStorage.getItem("email")
    }

}).then((response) => response.json())
  .then(function(data) {

        welcome.innerHTML = "Bem-vindo(a), " + data.name;
  });
