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
	
	.controller('TimeDetalheController', function(Times, $stateParams, $scope, $ionicLoading) {
        var _this = this;
        
        $scope.$on('$ionicView.enter', function(){
            $ionicLoading.show();

            Times.getTimes().then(function(response){
				
           	for (var i = 0; i < response.data['results']['bindings'].length; i++) {
				if (response.data['results']['bindings'][i]['nome']['value'] == $stateParams.timeNome) {
					_this.nome = response.data['results']['bindings'][i]['nome']['value']; 
					_this.escudo = response.data['results']['bindings'][i]['escudo']['value']; 				  
					break;
			   }   
			}
			
			}).catch(function(response){
                //request was not successful
                //handle the error
            }).finally(function(){
                $ionicLoading.hide();
            });
        });
    });