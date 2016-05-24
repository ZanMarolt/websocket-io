angular.module('chatApp').controller('MainCtrl',function(
    $scope,
    socketService
){

    $scope.message = {};
    $scope.onKeyUp = function(event){

        if(event.keyCode === 13) {

            console.log('Test');
            socketService.sendMessage($scope.message);

        }
    };

    socketService.socket.on('message', function(data){

    });

});
