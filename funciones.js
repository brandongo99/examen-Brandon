var numero1 = 3
var numero2 = 3
var mensajee = "Hola"
var BacoB = angular.module('BacoB', []);
BacoB.controller('Operaciones', function($scope) {
  $scope.mensaje = numero1 + numero2;
}); 
BacoB.controller('Mensaje', function($scope) {
});

