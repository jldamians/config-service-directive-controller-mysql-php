var myApp = angular.module('myApp.controller',['myApp.service', 'myApp.directive']);

myApp.controller('CtrlCrudList', function($scope, serviceCrud, $location) {
    $scope.contacts = [];
    $scope.isLoading = true ;

    get() ;

    function get(){
	    serviceCrud.get().success(
            function(data, status){
    	    	$scope.contacts = data;
                $scope.isLoading = false ;
    	    }
        );
    };

    $scope.get = get ;

    $scope.delete = function (id) {
        $scope.isLoading = true ;

        serviceCrud.del_by_id(id).success(
            function(data, status){
                get() ;
            }
        );
    };

    $scope.edit = function(id){
        $location.url('/editar/' + id) ;
    };
});

myApp.controller('CtrlCrudFind',function($scope, serviceCrud, $routeParams, $location){
    $scope.newContact = [] ;
    $scope.isLoading = true ;

    edit() ;

    function edit(){
        var id = $routeParams.id ;

        serviceCrud.get_by_id(id).then(
            function(response) {
                $scope.newContact = response.data[0] ;
                $scope.isLoading = false ;

                console.log(response) ;

                console.log(response.config) ;
                console.log(response.data) ;
                console.log(response.headers) ;
                console.log(response.status) ;
                console.log(response.statusText) ;
            },
            function(response) {
                console.log(response) ;
            }
        );
    }

    $scope.update = function () {
        $scope.isLoading = true ;

	    serviceCrud.upd($scope.newContact).success(
            function(data, status){
    	    	$location.url('/');
	       }
        );
    };

    $scope.cancel = function(){
        $location.path('/lista');
    };
});

myApp.controller('CtrlCrudNew',function($scope, serviceCrud, $location){
    $scope.isLoading = false ;

    $scope.save = function () {
        $scope.isLoading = true ;

	    serviceCrud.set($scope.newContact).success(
            function(data, status){
                $location.url('/');
            }
        );
    };
    $scope.cancel = function(){
        $location.url('/');
    };
});