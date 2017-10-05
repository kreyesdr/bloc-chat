(function(){
    function Message($firebaseArray){
        /**
        * @desc Message empty object
        * @type {Object}
        */
        var Message = {};
        /**
        * @desc Reference to the list of databases in the messages database
        * @type {Object}
        */
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);

        Message.getByRoomId = function(roomId){
            var roomMessages = $firebaseArray(ref.orderByChild("roomid").equalTo(roomId));
            var result = [];
            roomMessages.$loaded().then(function(){
                angular.forEach(roomMessages, function(messages){
                    result.push(messages);
                })
            });

            debugger;

            return result;
        }

        return Message;
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();
