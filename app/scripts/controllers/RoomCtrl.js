(function() {
  function RoomCtrl($scope, Room) {
    this.rooms = Room.all;
  }

  angular
   .module('blocChat')
   .controller('RoomCtrl', ['$scope', 'Room', RoomCtrl]);
})();
