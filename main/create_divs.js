var courses = ['curso1','curso2','curso3','curso4','curso5','curso6', 'curso7'];

for(i=0; i<courses.length; i++){
    $('<div id="' + courses[i] + '" class="list-group-item list-group-item-action pb-4 pt-4">' + courses[i] + '</div>').appendTo('#lista-cursos');
}