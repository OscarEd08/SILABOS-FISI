var pdfID = document.getElementById("pdf");
var pdf = ["http://www.est.uc3m.es/esp/nueva_docencia/comp_col_leg/ing_tec_inf_gestion/estadistica/Documentacion/Tablas/tablas2caras.pdf",
            "http://www.etsii.upm.es/ingor/estadistica/Grado/dTablas.pdf",
            "http://www.est.uc3m.es/esp/nueva_docencia/comp_col_leg/ing_tec_inf_gestion/estadistica/Documentacion/Tablas/tablas2caras.pdf",
            "http://www.etsii.upm.es/ingor/estadistica/Grado/dTablas.pdf",
            "http://www.est.uc3m.es/esp/nueva_docencia/comp_col_leg/ing_tec_inf_gestion/estadistica/Documentacion/Tablas/tablas2caras.pdf",
            "http://www.etsii.upm.es/ingor/estadistica/Grado/dTablas.pdf",
            "http://www.est.uc3m.es/esp/nueva_docencia/comp_col_leg/ing_tec_inf_gestion/estadistica/Documentacion/Tablas/tablas2caras.pdf"]

//Se crean las listas de los cursos
for(i=0; i<7; i++){
    $('<a id="boton" class="list-group-item list-group-item-action pb-4 pt-4">' + (i+1) + '</a>').appendTo('#lista-cursos');
}

var cursos = document.querySelectorAll("#boton")
console.log(cursos)
cursos.forEach((curso,index) => curso.onclick = function(){
    pdfID.src = pdf[index];
})