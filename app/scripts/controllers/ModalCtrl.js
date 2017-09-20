(function() {
  function ModalCtrl($scope, $uibModalInstance, Room) {
    var $modal = this;

    /* Close modal */
    $modal.cancel = function() {
      $uibModalInstance.dismiss();
    };

    /* Save new room */
    $modal.save = function() {
      Room.add($modal.newroom);
      $uibModalInstance.close();
    };
  }

  angular
    .module('blocChat')
    .controller('ModalCtrl', ['$scope', '$uibModalInstance', 'Room', ModalCtrl])
})();
