var myApp = angular.module('myApp.directive',[]);

myApp.directive('loading', function(){
    var directiva = {} ;

    directiva.restrict = 'E' ;
    directiva.templateUrl = 'view/loading.html' ;

    return directiva ;
});