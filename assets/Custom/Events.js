//:containsi()
(function (factory) {'use strict';if (typeof exports === 'object') {factory(require('jquery'));} else if (typeof define === 'function' && define.amd) {define(['jquery'], factory);} else {factory(jQuery || window.jQuery);}})(function ($) {'use strict';$.expr[":"].containsi = function(element, index, match) {var textContents = element.textContent || element.innerText || '';return textContents.toLowerCase().indexOf((match[3] || '').toLowerCase()) > -1;};});




//Events
$(document).on( "click", "[dn-toggle]", function(){
    var toggle = $(this).attr( "dn-toggle" );
    var id = $(this).attr( "dn-target" );
    switch( toggle ){
        case "sidebar":
            var side = $(id).attr("data-side");
            if( side=="R" ){
                var width = $(id).css( "margin-right" );
                if( width=="0px" ){
                    $(id).animate({ marginRight : "-300px", opacity : 0 }, 200, "swing");
                }else{
                    $(id).animate({ marginRight : "0px", opacity : 1 }, 200, "swing");
                }
            }else{
                var width = $(id).css( "margin-left" );
                if( width=="0px" ){
                    $(id).animate({ marginLeft : "-300px", opacity : 0 }, 200, "swing");
                }else{
                    $(id).animate({ marginLeft : "0px", opacity : 1 }, 200, "swing");
                }
            }
        break;
        case "modal":
            var id = $(this).attr( "data-target" );
            $(id).fadeIn();
        break;
        case "collapse":
            $(id).slideToggle( 200 );
        break;
    }
} );
$(document).on( "click", "[dn-dismiss='modal']", function(){
    $(this).closest(".w3-modal").fadeOut(100);
} );

$(document).on( "keyup", "[dn-filter]", function(){
    var id = $(this).attr( "dn-filter" );
    var txt = $(this).val();
    if( !txt )
        return $(id).css( "display", "" );
    $(id).css( "display", "none" );
    $(id + ":containsi('"+ txt +"')" ).css( "display", "" );
} );
$(document).on( "change", "*[dn-filter]", function(){
    var id = $(this).attr( "dn-filter" );
    var txt = $(this).val();
    if( !txt )
        return $(id).css( "display", "" );
    $(id).css( "display", "none" );
    $(id + ":containsi('"+ txt +"')" ).css( "display", "" );
} );



