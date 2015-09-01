app.controller("pinsNsearch", ["$scope","$firebaseArray", "getPics", "getStorage", "getUid", function($scope, $firebaseArray, getPics, getStorage, getUid){
	var ref = new Firebase("https://group-pinterest.firebaseio.com/pins/");
	$scope.pins = $firebaseArray(ref);

	(function() {
		$scope.photos = [];
		var url = getStorage.getTerm();
		getPics.getPics(url).then(
			function(data) {
				var photos = data.photos.photo;
				photos = photos.filter(function(obj) {
				    return (obj.url_o !== undefined);
				});
				for (var key in photos) {
					$scope.photos.push(photos[key]);
				}
			}
		);
	}());


	$scope.pinIt = function(photo) {
		var uid = getUid.getUid();
	  console.log(uid);
		console.log("photo:", photo);
		var pinItem = {
			imgUrl: photo.url_o,
			cat: '', 
			searchUrl: "https://www.google.com/searchbyimage?&image_url=" + photo.url_o,
			caption: "",
			uid: uid
		};
		console.log("photo :", photo);
		$scope.pins.$add(pinItem);
		console.log("$scope.pins :", $scope.pins);
	};

	$scope.click = function () {
		$scope.photos = [];
		var url = $scope.input;
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