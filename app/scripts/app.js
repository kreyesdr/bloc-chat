(function(){
  function config($locationProvider, $stateProvider) {
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });

    $stateProvider
      .state('main', {
        url: '/',
        controller: 'RoomCtrl as room'
      });
    }
      angular
       .module('blocChat', ['ui.router', 'firebase'])
       .config(config);
})();
