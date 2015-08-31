app.controller("pinsNsearch", ["$scope", "getPics", function($scope, getPics){
	var ref = new Firebase("https://group-pinterest.firebaseio.com/pins/");
	$scope.pins = $firebaseArray(ref);

	$scope.input = {
		url: ''
	};

	$scope.photos = [];

	$scope.pinIn = function() {
		var pinItem = {
			imgUrl: $scope.photo.img_o,
			cat: '', 
			caption: ""
		};
		$scope.songs.$add(pinItem);
	};

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
		)
	}
}]);