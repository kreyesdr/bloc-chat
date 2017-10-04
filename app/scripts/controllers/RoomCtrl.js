(function() {
  function RoomCtrl(Room, Message, $uibModal) {
    this.rooms = Room.all;
    this.messages = Message;
    this.currentRoom = null;

    this.setActiveRoom = function(room){
        this.currentRoom = room;
        this.currentRoom.currentMessages = this.messages.getByRoomId(room.$id);
  		}

    this.addNew = function() {
      Room.newroomname = this.chatroomname;
      var modalUp = $uibModal.open({
        templateUrl:    '/templates/room-modal.html',
        controller:     'ModalCtrl',
        controllerAs:   '$modal'
      });
    }
  }

  angular
  .module('blocChat')
  .controller('RoomCtrl', ['Room', 'Message', '$uibModal', RoomCtrl]);
})();
