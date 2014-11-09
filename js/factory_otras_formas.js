var myApp = angular.module('myApp.factory', []);

	var url_ = 'include/ajax/crudPersona.php' ;
	var method_ = 'GET' ;
	var params_ = {op: 'list'} ;

myApp.factory('factoryCrud', function($http){
    var dataFactory = {};

    dataFactory.get = function () {
        return $http({url: url_, method: method_, params: params_}) ;
    };

    return dataFactory ;
}) ;

myApp.factory("mainData", function($http, $q) {
   var def =   $q.defer()

   $http.get(url_ + '?op=list').then(function(data){
       def.resolve(data)
   });

   return def.promise;
});

myApp.factory('misContactos', function($http){
    var dataFactory = {};

    dataFactory.get = function () {
        return $http({url: url_, method: method_, params: params_}) ;
    };

    return dataFactory ;
});

myApp.factory('myContact', function($http) {
	return {
		get: function(callback) {
			$http({url: url_, method: method_, params: params_}).success(callback);
		}
	};
});