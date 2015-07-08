angular.module('userService', [])
.factory('User', function($http){
  var factory = {};

  factory.all = function(){
    return $http.get('/api/users');
  };

  factory.get = function(username){
    return $http.get('/api/users/' + username);
  };

  factory.create = function(user){
    return $http.post('/api/users/', user);
  };

  factory.update = function(originalUsername, updatedUser) {
    return $http.post('/api/users/' + originalUsername, updatedUser);
  };

  factory.updatepass = function(originalUsername, passinfo) {
    return $http.post('/api/users/' + originalUsername, passinfo);
  };

  factory.delete = function(username) {
    return $http.delete('/api/users/' + username);
  };

  return factory;
});
