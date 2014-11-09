var myApp = angular.module('myApp.controller',['myApp.factory']);

myApp.controller('CtrlCrudList',function($scope, factoryCrud){
    $scope.newContact = {} ; // $scope.newContact ;
    $scope.contacts = [] ;

    factoryCrud.get().
    success(function (data, status) {
        $scope.contacts = data ;
    });

});

myApp.controller("HomeCtrl", function($scope, mainData) {
    $scope.newContact = {} ; // $scope.newContact ;
    $scope.contacts = [] ;

    mainData.then(function(data) {
        $scope.contacts = data;
    });
});

myApp.controller("CtrlList", function($scope, misContactos) {
    $scope.contacts = [];

    var get = function(data, status) {
        $scope.contacts = data;
        console.log($scope.contacts);
    };

    misContactos.get().success(get);
});

myApp.controller('CtrlListContact', function($scope, myContact) {
    $scope.contacts = [];

    myContact.get(function(results) {
        console.log('valor recuperado');
        $scope.contacts = results;
    });
});