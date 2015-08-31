app.controller("mainBoard", ["$scope", "getPics", function($scope, getPics){

	$scope.input = {
		url: ''
	};

	$scope.click = function () {
		var url = $scope.input.url;
		getPics.getPics(url).then(
			function(data){
				console.log("data", data);
			})
	}
}]);