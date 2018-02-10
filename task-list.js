var categorias = [
  {'value':'success','label':'Verduras'},
  {'value':'warning','label':'Comida Chatarra'},
  {'value':'info','label':'Frutas'},
  {'value':'secondary','label':'Alcohol'}
];

$(document).ready(function(){
  var $formulario_de_lista = $('#formulario-de-lista');
  var $lista_principal = $('#lista-principal');
  var $producto = $('input#producto');
  var $categoria = $('select#categoria');

  var template = '<li class="list-group-item list-group-item-action"></li>';

  $formulario_de_lista.on('submit', function( event ){
    event.preventDefault();
    var texto_de_producto = $producto.val().trim();
    var categoria = $categoria.find('option:selected').index();


    if( texto_de_producto ){
      var clase = categorias[ categoria ];
      var $new_row = $(
        '<li class="list-group-item bg-'+clase.value+' list-group-item-action">' +
      texto_de_producto +
      '</li>'
    );
      $lista_principal.append( $new_row );

      $new_row.hide().fadeIn();
    }

    $producto.val('');

    // alert(texto_de_tarea )
  })
});
