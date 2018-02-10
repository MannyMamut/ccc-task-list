$(document).ready(function(){
  var $formulario_de_lista = $('#formulario-de-lista');
  var $lista_principal = $('#lista-principal');
  var $tarea = $('input#tarea');

  var template = '<li class="list-group-item list-group-item-action"></li>';

  $formulario_de_lista.on('submit', function( event ){
    event.preventDefault();
    var texto_de_tarea = $tarea.val().trim();

    if( texto_de_tarea ){

      var $new_row = $(
        '<li class="list-group-item list-group-item-action">' +
      texto_de_tarea +
      '</li>'
    );
      $lista_principal.append( $new_row );

      $new_row.hide().fadeIn();
    }

    $tarea.val('');

    // alert(texto_de_tarea )
  })
});
