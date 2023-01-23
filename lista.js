const fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImgP");
var Director = document.getElementById("Director");
var año = document.getElementById("año");
var gen = document.getElementById("gen");
var act = document.getElementById("act");

var botonBorrarBruja = document.getElementById("borrarBruja");
var bruja = document.getElementById("bruja");
var botonBorrarDonnie = document.getElementById("borrarDonnie");
var donnie = document.getElementById("donnie");
var botonBorrarHarry = document.getElementById("borrarHarry");
var harry = document.getElementById("harry");
var botonBorrarInter = document.getElementById("borrarInter");
var inter = document.getElementById("inter");
var botonBorrarNacho = document.getElementById("borrarNacho");
var nacho = document.getElementById("nacho");
var botonBorrarFaro = document.getElementById("borrarFaro");
var faro = document.getElementById("faro");
var botonBorrarJohn= document.getElementById("borrarJohn");
var john = document.getElementById("john");
var botonBorrarRata = document.getElementById("borrarRata");
var rata = document.getElementById("rata");


function openFullImgW(){
    fullImgBox.style.display = "flex";
    fullImg.innerHTML = "Nueva Inglaterra, 1630. Una familia compuesta por un matrimonio de colonos cristianos, padres de cinco hijos, vive cerca de un bosque al que la leyenda popular atribuye un carácter demoníaco. La convivencia estalla y la familia se desgarra al sospechar que su hija mayor practica la brujería, debido a que las cosechas no crecen y su bebé ha desaparecido."
    Director.innerHTML = "Direccion: Robert Eggers"
    año.innerHTML = "Año : 2015"
    gen.innerHTML = "Género: Terror"
    act.innerHTML = "Protagonistas: 	Anya Taylor-Joy, Ralph Ineson, Kate Dickie, Harvey Scrimshaw"   
}

function openFullImgDonnie(){
    fullImgBox.style.display = "flex";
    fullImg.innerHTML = "Un joven extraño a menudo es visitado por un conejo profético, que como él, aguarda el inminente fin del mundo."
    Director.innerHTML = "Direccion: Richard Kelly"
    año.innerHTML = "Año : 2000"
    gen.innerHTML = "Género: Thriller psicológico/Fantasía"
    act.innerHTML = "Protagonistas: Jake Gyllenhaal, Jena Malone, Drew Barrymore, Maggie Gyllenhaal"
}

function openFullImgHarry(){
    fullImgBox.style.display = "flex";
    fullImg.innerHTML = "Harry, Ron y Hermione se marchan de Hogwarts para iniciar su misión más importante: tienen que destruir los horrocruxes, el secreto del poder y la inmortalidad de Voldemort, en los que el temido mago oscuro guarda los fragmentos de su alma."
    Director.innerHTML = "Direccion: David Yates"
    año.innerHTML = "Año : 2010"
    gen.innerHTML = "Género: 	Fantasía/ Acción/ Aventuras"
    act.innerHTML = "Protagonistas: 	Daniel Radcliffe, Rupert Grint, Emma Watson"
}

function openFullImgInt(){
    fullImgBox.style.display = "flex";
    fullImg.innerHTML = "Gracias a un descubrimiento, un grupo de científicos y exploradores, encabezados por Cooper, se embarcan en un viaje espacial para encontrar un lugar con las condiciones necesarias para reemplazar a la Tierra y comenzar una nueva vida allí."
    Director.innerHTML = "Direccion: Christopher Nolan"
    año.innerHTML = "Año : 2014"
    gen.innerHTML = "Género: Ciencia ficción"
    act.innerHTML = "Protagonistas: 	Matthew McConaughey, Anne Hathaway, Jessica Chastain"
}

function openFullImgNacho(){
    fullImgBox.style.display = "flex";
    fullImg.innerHTML = "Un cocinero mexicano llamado Ignacio trabaja de noche como luchador profesional para recaudar dinero para un orfanato."
    Director.innerHTML = "Direccion: Jared Hess"
    año.innerHTML = "Año : 2006"
    gen.innerHTML = "Género: Comedia"
    act.innerHTML = "Protagonistas: Jack Black, Ana de la Reguera, Héctor Jiménez"
}

function openFullImgFaro(){
    fullImgBox.style.display = "flex";
    fullImg.innerHTML = "En la década de 1890, dos fareros que afrontan un turno de cuatro semanas juntos combaten la constante tentación de dejarse arrastrar por la locura en una isla remota y misteriosa de Nueva Inglaterra."
    Director.innerHTML = "Direccion: Robert Eggers"
    año.innerHTML = "Año : 2019"
    gen.innerHTML = "Género: 	Terror psicológico"
    act.innerHTML = "Protagonistas: Willem Dafoe, Robert Pattinson"
}

function openFullImgJohn(){
    fullImgBox.style.display = "flex";
    fullImg.innerHTML = "El legendario sicario John Wick es perseguido por las calles de Nueva York. Lo buscan unos mercenarios por una recompensa de 14 millones de dólares por su cabeza y por romper con una regla."
    Director.innerHTML = "Dirección: Chad Stahelski"
    año.innerHTML = "Año : 2019"
    gen.innerHTML = "Género: Acción"
    act.innerHTML = "Protagonistas: 	Keanu Reeves, Halle Berry"
}


function openFullImgRata(){
    fullImgBox.style.display = "flex";
    fullImg.innerHTML = "Remy es un residente de París que aprecia la buena comida y tiene un paladar bastante sofisticado. Él desea convertirse en un chef para crear y disfrutar de diversas obras de arte culinarias. El único problema es que Remy es una rata. Y cuando termina en las alcantarillas debajo de uno de los restaurantes más finos de París, el roedor se siente en el lugar perfecto para convertir su sueño en una realidad."
    Director.innerHTML = "Dirección: Brad Bird"
    año.innerHTML = "Año : 2007"
    gen.innerHTML = "Género: Animación"
    act.innerHTML = "Protagonistas: Patton Oswalt, Brian Dennehy"
}

function closeImg(){
    fullImgBox.style.display = "none";   
}

botonBorrarBruja.addEventListener("click", function(){
    bruja.remove();
});

botonBorrarDonnie.addEventListener("click", function(){
    donnie.remove();
});

botonBorrarHarry.addEventListener("click", function(){
    harry.remove();
});

botonBorrarInter.addEventListener("click", function(){
    inter.remove();
});

botonBorrarNacho.addEventListener("click", function(){
    nacho.remove();
});

botonBorrarFaro.addEventListener("click", function(){
    faro.remove();
});

botonBorrarJohn.addEventListener("click", function(){
    john.remove();
});

botonBorrarRata.addEventListener("click", function(){
    rata.remove();
});