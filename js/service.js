var myApp = angular.module('myApp.service', []);

myApp.service('serviceCrud', function($http) {
    this.set = function(persona){
        var url_    = 'include/ajax/setPersona.php' ;
        var params_ = {'name': persona.name, 'dni': persona.dni} ;

        return $http.post(url_, params_) ;
    };
    this.get = function(){
        var url = 'include/ajax/getPersona.php?callback=JSON_CALLBACK' ;

        return $http.jsonp(url) ;
    };
    this.get_by_id = function(id){
        var url_    = 'include/ajax/getPersonaById.php' ;
        var params_ = {'id': id} ;

        return $http.get(url_, {'params': params_}) ;
    };
    this.del_by_id = function(id){
        var url_    = 'include/ajax/delPersonaById.php' ;
        var params_ = {'id': id} ;

        return $http.delete(url_, {'params': params_}) ;
    };
    this.upd = function(persona){
        var url_    = 'include/ajax/updPersona.php' ;
        var params_ = {'id': persona.id, 'name': persona.name, 'dni': persona.dni} ;

        return $http.put(url_, params_) ;
    };
});