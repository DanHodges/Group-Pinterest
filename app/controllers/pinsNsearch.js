app.controller("pinsNsearch", ["$scope","$firebaseArray", "getPics", "getStorage", "getUid", function($scope, $firebaseArray, getPics, getStorage, getUid){
	var ref = new Firebase("https://group-pinterest.firebaseio.com/pins/");
	$scope.pins = $firebaseArray(ref);
	$scope.catValue = false;
	$scope.catInput = "";
	$scope.captionInput = "";

	(function() {
		$scope.photos = [];
		var url = getStorage.getTerm();
		console.log("url", url);
		if (url === "" || url === undefined) {
			console.log(url);
		} else {
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
		}
	}());

  $scope.showInput = function(context) {
  	console.log(context);
  	context.catValue = true;
  };

	$scope.pinIt = function(photo) {
		var uid = getUid.getUid();
		console.log("photo:", photo);
		var pinItem = {
			imgUrl: photo.url_o,
			cat: photo.catInput, 
			searchUrl: "https://www.google.com/searchbyimage?&image_url=" + photo.url_o,
			caption: photo.captionInput,
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