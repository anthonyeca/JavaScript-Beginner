$(document).ready(function(){

    //Mover elemento por la pagina
    $('.elemento').draggable();

    //Redimensionarlo
    $('.elemento').resizable();

    // Listar y ordenar elementos -> SOlO se puede usar 1 de los 2 

    //$('.Lista-seleccionable').selectable();

    $('.Lista-seleccionable').sortable({
        update: function(event, ui){
            console.log("Ha cambiado la lista");
        }
    });

    //Drop

    $('#elemento-movido').draggable();
    $('#area').droppable({
        drop: function(){
            console.log("Has soltado algo dentro del area");
        }
    });

    // Efectos

    $("#mostrar").click(function(){
        $(".caja-efectos").toggle("explode");
    });

    // Tooltip

    $(document).tooltip();

    //Dialog

    $("#lanzar-popup").click(function(){
        $("#popup").dialog();
    })
    
    //Datepicker
    $('#calendario').datepicker();

    // Tabs

    $('#pestanas').tabs();

});