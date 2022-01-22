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

//usage:
readTextFile("../silabos.json", function(text){
    var data = JSON.parse(text);
    console.log(data);
});

var pdfID = document.getElementById("pdf");
var pdfSist3 = ["https://drive.google.com/file/d/1sPIJWkn2fYdv2mZ0_eCWxCpLdWQzUTj7/preview",
                "https://drive.google.com/file/d/1qYmPNCAzmQpxkzT0BUznSQlaeG7gpzfx/preview",
                "https://drive.google.com/file/d/1I9mLFT2oosKEdEmLajAkln75B3IedyeH/preview",
                "https://drive.google.com/file/d/1nz0E6BJ4OFkS_isIqHRPtxS30CabkQ8u/preview",
                "https://drive.google.com/file/d/1NvxU4n6OTezyIfmpQBp1gU4ki7RZeaLx/preview",
                "https://drive.google.com/file/d/1G3q0Rw0P80YXDplxEqiVJgocJeOhN7Kh/preview",
                "https://drive.google.com/file/d/1oJ1HHS0sfahoI45tmQ9Fa0YmPqLIbDtc/preview"]

var pdfSist4 = ["https://drive.google.com/file/d/1FGGbjOMdqJtXHr68Z7pca_0xlcyqxfjk/preview",
                "https://drive.google.com/file/d/17T9itoUYQSr_wjmEbu5VDq27gf2Ubxyi/preview",
                "https://drive.google.com/file/d/1x7kvSsFC_buSWUGNHYn1qcE9fENF-3Er/preview",
                "https://drive.google.com/file/d/1f55qwYvPpmRBVrTm_KFQkwAP4LlJ4mVU/preview",
                "https://drive.google.com/file/d/1hWGGh0KAIMgbGsa0LHK4sxpmD9DgI_8u/preview",
                "https://drive.google.com/file/d/1L4rvBVmNmTHRQiz4L06kYYJAHEDX_BHP/preview",
                "https://drive.google.com/file/d/1JKduWh6NRZRj7w9BrLT0olGSA8JsCJ6z/preview"]

var pdfSoft3 = ["https://drive.google.com/file/d/12i2f-3EmejtRmgGxeKFFt_HLOqVNwkcA/preview",
                "https://drive.google.com/file/d/127H2LvO4fzeYAoafdAdDGquZNpyqoLJm/preview",
                "https://drive.google.com/file/d/12HRECd4vX0oeXjGDOvdZOsQW6lOHsFtO/preview",
                "https://drive.google.com/file/d/12KyWcmr82g1Mu_dRuEZGuRIVZCsfhMzn/preview",
                "https://drive.google.com/file/d/12NcgLOzQBdahntrGl7ZE1BB5sFCAqZwn/preview",
                "https://drive.google.com/file/d/12Y7Tm1RPa7H9YQgk8hoP9MsMPBRXMlLj/preview",
                "https://drive.google.com/file/d/12hqcVxXBgcuDFNoKlGC9Ho8mBbMpUJLh/preview"]

var pdfSoft4 = ["https://drive.google.com/file/d/1228G87vu36I69ImxgCb9upEgvAvbkTC1/preview",
                "https://drive.google.com/file/d/12jbekjf_bQkp8TCxdpzJ9yzF9JN0S9fF/preview",
                "https://drive.google.com/file/d/11mRl_O72Xs7LKsGK58xKJfaMKomoBb_U/preview",
                "https://drive.google.com/file/d/17ckeYGC0lhJbSiMaXKm8cwGWLJv0exay/preview",
                "https://drive.google.com/file/d/11m4oSNmTXLoHMnMpyu-Hng4sjr_JGCCm/preview",
                "https://drive.google.com/file/d/11pd2lbtPaCk2Vtfm5H9hMiqluW3e_VAc/preview",
                "https://drive.google.com/file/d/11zXonnqnv1TAVf2yxoCgaBomzaECsSGt/preview"]



var soft3 = ["Algorítmica I", "Estadística", "Física Electrónica", 
              "Ingeniería Económica", "Introducción al Desarrollo de Software", 
              "Matemática Básica", "Organización y Administración"]
var soft4 = ["Algorítmica II", "Contabilidad para la Gestión", 
             "Innovación, Tecnología y Emprendimiento", "Probabilidades",
            "Procesos de Software", "Sistemas Digitales", "Matemática Discreta"]

var sist3 = ["Programación y Fundamentos de Algorítmica", "Teoría General de Sistemas",
             "Organización y Administración", "Ingeniería Económica", "Estadística", 
             "Series y Ecuaciones Diferenciales", "Matemática Discreta",]

var sist4 = ["Algoritmica y Programación Orientada a Objetos", "Marketing", 
             "Contabilidad General", "Procesos de Negocios", "Métodos Numéricos", 
             "Probabilidades y muestreo", "Fisica Electrónica y Sistemas Digitales"]

// SISTEMAS
//TERCER CICLO
//Se crean las listas de los cursos
for(i=0; i<7; i++){
    $('<a id="boton" class="list-group-item list-group-item-action pb-4 pt-4">' + sist3[i] + '</a>').appendTo('#lista-cursos');
}
// Se asignan los links a cada boton
var cursos = document.querySelectorAll("#boton")
console.log(cursos)
cursos.forEach((curso,index) => curso.onclick = function(){
    pdfID.src = pdfSist3[index];
})

//CUARTO CICLO
for(i=0; i<7; i++){
    //modificar
    $('<a id="boton" class="list-group-item list-group-item-action pb-4 pt-4">' + sist4[i] + '</a>').appendTo('#lista-cursos');
}
// Se asignan los links a cada boton
var cursos = document.querySelectorAll("#boton")
console.log(cursos)
cursos.forEach((curso,index) => curso.onclick = function(){
    pdfID.src = pdfSist4[index];
})

// SOFTWARE
//TERCER CICLO
//Se crean las listas de los cursos
for(i=0; i<7; i++){
    $('<a id="boton" class="list-group-item list-group-item-action pb-4 pt-4">' + soft3[i] + '</a>').appendTo('#lista-cursos');
}
// Se asignan los links a cada boton
var cursos = document.querySelectorAll("#boton")
console.log(cursos)
cursos.forEach((curso,index) => curso.onclick = function(){
    pdfID.src = pdfSoft3[index];
})

//CUARTO CICLO
for(i=0; i<7; i++){
    //modificar
    $('<a id="boton" class="list-group-item list-group-item-action pb-4 pt-4">' + soft4[i] + '</a>').appendTo('#lista-cursos');
}
// Se asignan los links a cada boton
var cursos = document.querySelectorAll("#boton")
console.log(cursos)
cursos.forEach((curso,index) => curso.onclick = function(){
    pdfID.src = pdfSoft4[index];
})