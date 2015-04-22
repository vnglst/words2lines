'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('HomeCtrl', ['$scope', function($scope) {

  	$scope.wordsChange = function ( ) {
  		$scope.lines = Math.round($scope.words / $scope.wordsPerLine);
  		$scope.chars = $scope.lines * 55;
  	};

  	$scope.linesChange = function() {
  		$scope.words = Math.round($scope.lines * $scope.wordsPerLine);
  		$scope.chars = Math.round($scope.lines * 55);
  	};

    $scope.charsChange = function() {
      $scope.lines = Math.round($scope.chars / 55);
      $scope.words = Math.round($scope.lines * $scope.wordsPerLine);
    };

    $scope.wordsPerLineChange = function() {
      $scope.charsPerWord = Math.round(55 / $scope.wordsPerLine * 100) / 100;
      $scope.wordsChange();
    };

    $scope.charsPerWordChange = function() {
      $scope.wordsPerLine = Math.round(55 / $scope.charsPerWord * 100) / 100;
      $scope.wordsChange();
    };

    // Values currently from Wolfram
    // http://www.wolframalpha.com/input/?i=1000+words+in+Italian
    $scope.wordsPerLanguage = [
      {abrev:'nl', name:'Dutch', wordsPerLine: 8.45},
      {abrev:'en', name:'English', wordsPerLine: 9.02},
      {abrev:'fr', name:'French', wordsPerLine: 8.97},
      {abrev:'sp', name:'Spanish', wordsPerLine: 8.84},
      {abrev:'it', name:'Italian', wordsPerLine: 8.3},
      {abrev:'de', name:'German', wordsPerLine: 7.58}
    ]

    $scope.selectLanguage = function (words) {
        $scope.wordsPerLine = words;
        $scope.wordsPerLineChange();
    }

  	var init = function() {
      $scope.language = $scope.wordsPerLanguage[1]; // English
      $scope.wordsPerLine = $scope.wordsPerLanguage[1].wordsPerLine; // value for English
  		$scope.words = 2000;

      $scope.wordsChange();
      $scope.wordsPerLineChange();
  	};

  	init();

  }])
  .controller('AboutCtrl', [function() {

  }]);
