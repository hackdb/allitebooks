hackDB.controller( "hackDB_controller", function($scope, hackDB_service){
    $scope.title = "Hello";
    $scope.hackDB = hackDB_service;
} );