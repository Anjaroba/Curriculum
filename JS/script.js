

/*Menu modo responsive*/
function smartphon() {

    document.getElementById("telefono").classList.toggle("menumobil");
  }
  
  
  
  
  
  /*oculta los display de los distintos bloques */
  document.getElementById("contacto").onclick = function () {
    document.getElementById("principal").style.display = "none";
    document.getElementById("contenedor1").style.display = "block";
    document.getElementById("contenedor2").style.display = "none"
    document.getElementById("contenedor3").style.display = "none";
    document.getElementById("contenedor4").style.display = "none";
  }
  document.getElementById("experiencia").onclick = function () {
    document.getElementById("principal").style.display = "none";
    document.getElementById("contenedor1").style.display = "none";
    document.getElementById("contenedor2").style.display = "block";
    document.getElementById("contenedor3").style.display = "none";
    document.getElementById("contenedor4").style.display = "none";
  }
  document.getElementById("formacion").onclick = function () {
    document.getElementById("principal").style.display = "none";
    document.getElementById("contenedor1").style.display = "none";
    document.getElementById("contenedor2").style.display = "none";
    document.getElementById("contenedor3").style.display = "block";
    document.getElementById("contenedor4").style.display = "none";
  }
  document.getElementById("habilidades").onclick = function () {
    document.getElementById("principal").style.display = "none";
    document.getElementById("contenedor1").style.display = "none";
    document.getElementById("contenedor2").style.display = "none";
    document.getElementById("contenedor3").style.display = "none";
    document.getElementById("contenedor4").style.display = "block";
  }
  document.getElementById("home").onclick = function () {
    document.getElementById("principal").style.display = "block";
    document.getElementById("contenedor1").style.display = "none";
    document.getElementById("contenedor2").style.display = "none";
    document.getElementById("contenedor3").style.display = "none";
    document.getElementById("contenedor4").style.display = "none";
  }
  
  
  
  
  