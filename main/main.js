var pdfID = document.getElementById("pdf");
var courses = ['curso1','curso2','curso3','curso4','curso5','curso6', 'curso7'];
var pdf = ["http://www.est.uc3m.es/esp/nueva_docencia/comp_col_leg/ing_tec_inf_gestion/estadistica/Documentacion/Tablas/tablas2caras.pdf",
            "http://www.etsii.upm.es/ingor/estadistica/Grado/dTablas.pdf",
            "http://www.est.uc3m.es/esp/nueva_docencia/comp_col_leg/ing_tec_inf_gestion/estadistica/Documentacion/Tablas/tablas2caras.pdf",
            "http://www.etsii.upm.es/ingor/estadistica/Grado/dTablas.pdf",
            "http://www.est.uc3m.es/esp/nueva_docencia/comp_col_leg/ing_tec_inf_gestion/estadistica/Documentacion/Tablas/tablas2caras.pdf",
            "http://www.etsii.upm.es/ingor/estadistica/Grado/dTablas.pdf",
            "http://www.est.uc3m.es/esp/nueva_docencia/comp_col_leg/ing_tec_inf_gestion/estadistica/Documentacion/Tablas/tablas2caras.pdf"]


//Se crean las listas de los cursos
for(i=0; i<courses.length; i++){
    $('<div id="' + courses[i] + '" class="list-group-item list-group-item-action pb-4 pt-4">' + courses[i] + '</div>').appendTo('#lista-cursos');
    document.getElementById(courses[i])
    .onclick = function(){
        pdfID.src = pdf[i];
    }
}



//var pdf = document.getElementById("pdf");

/*
curso1.onclick = function(){
    pdf.src = "http://www.est.uc3m.es/esp/nueva_docencia/comp_col_leg/ing_tec_inf_gestion/estadistica/Documentacion/Tablas/tablas2caras.pdf";
}

curso2.onclick = function(){
    pdf.src = "http://www.etsii.upm.es/ingor/estadistica/Grado/dTablas.pdf";
}

curso3.onclick = function(){
    pdf.src = "http://www.etsii.upm.es/ingor/estadistica/Grado/dTablas.pdf";
}*/