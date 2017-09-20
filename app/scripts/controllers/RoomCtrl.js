(function() {
  function RoomCtrl(Room, $uibModal) {
    this.rooms = Room.all;

    this.addNew = function() {
      var modalUp = $uibModal.open({
        templateUrl:    '/templates/room-modal.html',
        controller:     'ModalCtrl',
        controllerAs:   '$modal'
      });
    }

  }

  angular
  .module('blocChat')
  .controller('RoomCtrl', ['Room', '$uibModal', RoomCtrl]);
})();
