
'use strict';

/**
 * @ngdoc function
 * @name angularAppPlaylistApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularAppPlaylistApp
 */

var app = angular.module('angularAppPlaylistApp', ['LocalStorageModule']);

app.config(['localStorageServiceProvider', function(localStorageServiceProvider) {
  localStorageServiceProvider.setPrefix('ls');
}]);

app.controller('MainCtrl', function ($scope, $window, localStorageService) {

	/* Default Filter */

	$scope.sortType = 'name'; // set the default sort type
	$scope.sortReverse = false; // set the default sort order
	$scope.searchFish = ''; // set the default search - filter term

	/* Initialized Data On Page Load */

	var rockList = localStorageService.get('rockList');

	$scope.rockList = rockList || [];

	$scope.$watch('rockList', function () {
  		localStorageService.set('rockList', $scope.rockList);
	}, true);

	$scope.hiphopList = [
		{name: 'Enter Name Here', artist: 'Enter Artist Here', bpm: 100}
	];

	$scope.countryList = [
		{name: 'Enter Name Here', artist: 'Enter Artist Here', label: 'Enter Label Here'}
	];

	$scope.edmList = [
		{name: 'Enter Name Here', artist: 'Enter Artist Here', bpm: 128}
	];	

	$scope.randbList = [
		{name: 'Enter Name Here', artist: 'Enter Artist Here', label: 'Enter Label Here'}
	];

	/* Append Track Based On Genre */

	$scope.addTrack = function(newTrack) {
		var genreType = $('#genreList').val();
		console.log(genreType);

		console.log($scope.trackName);
		console.log($scope.trackArtist);

		switch(genreType) {
			case 'rock':
				$scope.rockList.push({name: $scope.trackName, artist: $scope.trackArtist, bpm: $scope.trackBpm});
				break;
			case 'hiphop':
				$scope.hiphopList.push({name: $scope.trackName, artist: $scope.trackArtist, bpm: $scope.trackBpm});
				break;	
			case 'country':
				$scope.countryList.push({name: $scope.trackName, artist: $scope.trackArtist, bpm: $scope.trackBpm});
				break;
			case 'edm':
				$scope.edmList.push({name: $scope.trackName, artist: $scope.trackArtist, bpm: $scope.trackBpm});
				break;	
			case 'randb':
				$scope.randbList.push({name: $scope.trackName, artist: $scope.trackArtist, bpm: $scope.trackBpm});
				break;						
		}

		/* Reset Inputs On Click */
		$scope.trackName = '';	
		$scope.trackArtist = '';	
  	}

  	/* Remove Track From List Based on Index*/

	$scope.removeTrack = function(index) {

    	var genreType = $('#genreList').val();

		switch(genreType) {
		case 'rock':
			$scope.rockList.splice(index, 1);
			// $window.localStorage.removeItem(key);
			break;
		case 'hiphop':
			$scope.hiphopList.splice(index, 1);
			break;	
		case 'country':
			$scope.countryList.splice(index, 1);
			break;
		case 'edm':
			$scope.edmList.splice(index, 1);
			break;	
		case 'randb':
			$scope.randbList.splice(index, 1);	
			break;						
		}
    }

    $scope.clearAll = localStorageService.clearAll;
});



