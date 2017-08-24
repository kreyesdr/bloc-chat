(function() {
  function RoomCtrl($scope, Room) {
    this.rooms = [1,2,3];
  }

  angular
   .module('blocChat')
   .controller('RoomCtrl', ['$scope', 'Room', RoomCtrl]);
})();
