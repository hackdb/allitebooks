hackDB.service( "hackDB_service", function( $http, $timeout ){
    hackDB_service = this;
    hackDB_service.busy = false;
    hackDB_service.books = [];
    hackDB_service.data = {
        busy : false,
        books : [],
        filter : {
            limitTo : 20,
            book_title : ""
        }
    }
    hackDB_service.filter = function(){
        return function( item ){
            var book_title = hackDB_service.data.filter.book_title;
            return book_title ? item.book_title.toLowerCase().indexOf( book_title.toLowerCase() )>=0 : true;
        }
    }
    hackDB_service.init = function(){
        hackDB_service.data.busy = true;
        $timeout( function(){
            $http.get( "data/books.json" ).then( function( res ){
                hackDB_service.data.busy = false;
                hackDB_service.data.books = res.data;
            } );
        }, 2000 );
    }
} );