var welcome = document.getElementById("perfil");
var perfilTab = document.getElementById("tab-1");
var ownedElectionsTab = document.getElementById("tab-2");
var electionsParticipatedTab = document.getElementById("tab-3");
var followedTab = document.getElementById("tab-4");

fetch("perfil/perfilData", {
                   
    method:"GET",
    headers: {

        token: window.sessionStorage.getItem("token"),
        email: window.sessionStorage.getItem("email")
    }

}).then((response) => response.json())
  .then(function(data) {

        document.getElementById("profile_nome").innerHTML = data.name;
        document.getElementById("profile_email").innerHTML = data.email;
        welcome.innerHTML = "Bem-vindo(a), " + data.name;
  });


fetch("criar_eleicao/perfilData", {
                   
    method:"GET",
    headers: {

        token: window.sessionStorage.getItem("token"),
        email: window.sessionStorage.getItem("email")
    }

}).then((response) => response.json())
  .then(function(data) {

        // document.getElementById("profile_nome").innerHTML = data.name;
        // document.getElementById("profile_email").innerHTML = data.email;
        welcome.innerHTML = "Bem-vindo(a), " + data.name;
  });


fetch("resultados/perfilData", {
                   
    method:"GET",
    headers: {

        token: window.sessionStorage.getItem("token"),
        email: window.sessionStorage.getItem("email")
    }

}).then((response) => response.json())
  .then(function(data) {

        // document.getElementById("profile_nome").innerHTML = data.name;
        // document.getElementById("profile_email").innerHTML = data.email;
        welcome.innerHTML = "Bem-vindo(a), " + data.name;
  });

fetch("eleicao/perfilData", {
                   
    method:"GET",
    headers: {

        token: window.sessionStorage.getItem("token"),
        email: window.sessionStorage.getItem("email")
    }

}).then((response) => response.json())
  .then(function(data) {

        // document.getElementById("profile_nome").innerHTML = data.name;
        // document.getElementById("profile_email").innerHTML = data.email;
        welcome.innerHTML = "Bem-vindo(a), " + data.name;
  });
