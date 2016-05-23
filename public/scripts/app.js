'use strict';

/**
 * @ngdoc function
 * @name angularAppPlaylistApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularAppPlaylistApp
 */

var app = angular.module('angularAppPlaylistApp', []);

app.controller('MainCtrl', function ($scope) {

	/* Default Filter */

	$scope.sortType = 'name'; // set the default sort type
	$scope.sortReverse = false; // set the default sort order
	$scope.searchFish = ''; // set the default search - filter term

	/* Initialized Data On Page Load */

	$scope.rockList = [
		{name: 'Enter Name Here', artist: 'Enter Artist Here', bpm: 100}
	];

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
	};	

	/* Remove Track From List Based on Index*/

	$scope.removeTrack = function(index) {
    	$scope.items.splice(index, 1);
    }	
  }
});





