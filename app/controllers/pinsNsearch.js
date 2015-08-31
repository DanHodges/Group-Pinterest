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
				photos = photos.filter(function(obj) {
				    return (obj.url_o !== undefined);
				});
				for (var key in photos) {
					$scope.photos.push(photos[key]);
				}
			}
		);
	};
}]);