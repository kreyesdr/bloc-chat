(function(){
    function ModalInstanceCtrl($uibModalInstance){
        this.ok = function (newRoom) {
            $uibModalInstance.close({$value: newRoom});
        };

        this.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    };

    angular
        .module('blocChat')
        .controller('ModalInstanceCtrl', ['$uibModalInstance', ModalInstanceCtrl]);
})();
