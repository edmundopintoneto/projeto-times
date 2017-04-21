angular
    .module('timesApp')
    .controller('TimesController', function(Times, $scope, $ionicLoading) {
        var _this = this;

        $scope.$on('$ionicView.enter', function(){
            $ionicLoading.show();

            Times.getTimes().then(function(response){
              	_this.times = response.data;
            }).catch(function(response){
                //request was not successful
                //handle the error
            }).finally(function(){
                $ionicLoading.hide();
            });
        });
    })
