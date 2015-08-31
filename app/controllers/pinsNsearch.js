app.controller("pinsNsearch", ["$scope", "getPics", function($scope, getPics){

	$scope.input = {
		url: ''
	};

	$scope.photos = [];

	$scope.click = function () {
		var url = $scope.input.url;
		getPics.getPics(url).then(
			function(data) {
				console.log("data :", data);
				var photos = data.photos.photo;
				photos = photos.filter(function(n){ return n != undefined });
				for (var key in photos) {
					$scope.photos.push(photos[key]);
				}
				console.log("$scope.photos :", $scope.photos);
			}
		)
	}
}]);