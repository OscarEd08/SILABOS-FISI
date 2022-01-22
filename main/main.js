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
        $('<a id="boton" class="list-group-item list-group-item-action pb-4 pt-4">' + dataCursos.carreras[1].ciclos[0].cursos[i].nombre + '</a>').appendTo('#lista-cursos');
    }

    //Se linkea las carreras a partir del JSON
    var pdfID = document.getElementById("pdf");
    var cursos = document.querySelectorAll("#boton")
    console.log(cursos)
    cursos.forEach((curso,index) => curso.onclick = function(){
        pdfID.src = dataCursos.carreras[1].ciclos[0].cursos[index].enlace;
    })
});

