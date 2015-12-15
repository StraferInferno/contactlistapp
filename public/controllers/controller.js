var myApp = angular.module('myApp', []);


myApp.controller('Appctrl', ['$scope', '$http', function($scope, $http) {

    var refresh = function ()  {
        $http.get('/contactlist').success(function(response) {
            console.log("I got the req data");
            $scope.contactlist=response;
            $scope.person= "";

        });

    };

    refresh();

    $scope.addContact= function (){
        console.log($scope.person);

        $http.post('/contactlist',$scope.person).success( function(response){
            console.log(response);
            refresh();
        });

    };

    $scope.remove= function (id) {
        console.log(id);
        $http.delete('/contactlist/' + id).success(function(response){

            refresh();
        });
    };

    $scope.edit= function (id) {
        console.log(id);
        $http.get('/contactlist/' + id).success(function (response) {
        $scope.person = response;

        });

    };

    $scope.update= function (id) {
        console.log($scope.person._id);
        $http.put('/contactlist/' + $scope.person._id , $scope.person).success(function (response) {
            refresh();
        });

    };

    $scope.clear = function(){
        $scope.person= '';
    };


}]);

