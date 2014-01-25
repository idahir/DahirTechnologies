function newMessageController($scope, $http, $window) {
    $scope.newMsg = {};
    
    $scope.save = function () {
        alert($scope.newMsg.name);

    }
}