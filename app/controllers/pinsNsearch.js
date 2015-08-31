app.controller("pinsNsearch", ["$scope","$firebaseArray", "getPics", function($scope, $firebaseArray, getPics){
	var ref = new Firebase("https://group-pinterest.firebaseio.com/pins/");
	$scope.pins = $firebaseArray(ref);

	$scope.input = {
		url: ''
	};

	$scope.photos = [];

	$scope.pinIt = function(photo) {
		var pinItem = {
			imgUrl: photo.url_o,
			cat: '', 
			caption: ""
		};
		// console.log("photo :", photo);
		$scope.pins.$add(pinItem);
		console.log("$scope.pins :", $scope.pins);
	};

	$scope.click = function () {
		var url = $scope.input.url;
		getPics.getPics(url).then(
			function(data) {
				var photos = data.photos.photo;
				photos = photos.filter(function(obj) {
				    return (obj.url_o !== undefined);
				});
				for (var key in photos) {
					$scope.photos.push(photos[key]);
				}
				console.log("photos :", photos);
			}
		);
	};
}]);