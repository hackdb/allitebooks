$(document).ready(function(){
    $('[data-toggle="popover"]').popover(); 
});

$(document).on( "keyup", "[dn-filter]", function(){
    var row = $(this).attr("dn-filter");
    var txt = $(this).val() || false;
    if( !txt ) return $(row).css("display", "");
    $(row).css("display", "none");
    $(row + ':contains("'+ txt +'")').css("display", "");
} );