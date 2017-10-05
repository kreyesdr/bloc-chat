(function() {
  function ModalCtrl($scope, $uibModalInstance, Room) {
    var $modal = this;

    $modal.cancel = function() {
      $uibModalInstance.dismiss();
    };

    $modal.save = function() {
      Room.add($modal.newroom);
      $uibModalInstance.close();
    };
  }

  angular
    .module('blocChat')
    .controller('ModalCtrl', ['$scope', '$uibModalInstance', 'Room', ModalCtrl])
})();
