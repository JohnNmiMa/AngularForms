angular.module('myApp', [])
.controller('FormCtrl', ['$scope', function($scope) {
    $scope.countries = ['Antigua', 'Aruba', 'Burundi', 'Brunei'];
    $scope.submit = function() {
        if($scope.myForm.$valid) {
            console.log('Valid Form Submitted: ', $scope.data);
        } else {
            console.log('The Form "myForm" is invalid');
        }
    }
}]);
