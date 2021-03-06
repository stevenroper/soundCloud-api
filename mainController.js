var app = angular.module('sounder');

app.controller('MainController', function($scope, soundService, $sce) {

	$scope.getUser = function() {
		soundService.getUser($scope.searchText).then(function(data) {
			$scope.userData = data.data;
			$scope.resultsText = $scope.searchText;
			$('.results').show();
			$scope.searchText = '';
		});
	};

	$scope.play = function(track_url) {
		SC.oEmbed(track_url, { auto_play: true }, function(oEmbed) {
      $scope.$apply($scope.player_html = $sce.trustAsHtml(oEmbed.html));
    });
	};
});