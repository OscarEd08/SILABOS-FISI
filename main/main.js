//Reading JSON
function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

//Using JSON
readTextFile("../silabos.json", function(text){
    dataCursos = JSON.parse(text);  
    console.log(dataCursos);
    //Se crea la lista de las carreras a partir del JSON
    for(i=0; i<7; i++){
        $('<a id="boton" class="list-group-item list-group-item-action pb-4 pt-4">' + dataCursos.carreras[1].ciclos[0].cursos[i].nombre + '</a>').appendTo('#cursos-sist3');
        $('<a id="boton" class="list-group-item list-group-item-action pb-4 pt-4">' + dataCursos.carreras[1].ciclos[1].cursos[i].nombre + '</a>').appendTo('#cursos-sist4');
        $('<a id="boton" class="list-group-item list-group-item-action pb-4 pt-4">' + dataCursos.carreras[0].ciclos[0].cursos[i].nombre + '</a>').appendTo('#cursos-soft3');
        $('<a id="boton" class="list-group-item list-group-item-action pb-4 pt-4">' + dataCursos.carreras[0].ciclos[1].cursos[i].nombre + '</a>').appendTo('#cursos-soft4');
    }

    //Se linkea las carreras a partir del JSON
    var pdfSist3 = document.getElementById("sist3");
    var pdfSist4 = document.getElementById("sist4");
    var pdfSoft3 = document.getElementById("soft3");
    var pdfSoft4 = document.getElementById("sotf4");

    var cursos = document.querySelectorAll("#boton")
    console.log(cursos)
    cursos.forEach((curso,index) => curso.onclick = function(){
        pdfSist3.src = dataCursos.carreras[1].ciclos[0].cursos[index].enlace;
        pdfSist4.src = dataCursos.carreras[1].ciclos[1].cursos[index].enlace;
        pdfSoft3.src = dataCursos.carreras[0].ciclos[0].cursos[index].enlace;
        pdfSoft4.src = dataCursos.carreras[0].ciclos[1].cursos[index].enlace;

    })
});
  