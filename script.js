var numero1 = 5
var numero2 = 5
var Cerna = angular.module('Cerna', []);
Cerna.controller('Operacion', function($scope) {
  $scope.suma = numero1 + numero2;
  $scope.multiplicacion = numero1 * numero2;
}); 


