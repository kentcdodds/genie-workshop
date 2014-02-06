(function() {
  // Ignore all this angular stuff. This is just for demo purposes
  var app = angular.module('gw', ['uxGenie']);

  app.constant('GW', GW);
  app.constant('CodeMirror', CodeMirror);
  var genieCodeMirror = null;

  app.controller('MainCtrl', function($scope, GW, $window, $http, $location) {
    $scope.lessons = [
      {
        concept: 'Initial Setup'
      },
      {
        concept: 'Wish Registration'
      },
      {
        concept: 'Making a Wish'
      },
      {
        concept: 'Get Matching Wishes'
      }
    ];

    $scope.repo = 'https://github.com/kentcdodds/genie-workshop/tree/';
    $scope.docs = 'http://kent.doddsfamily.us/genie/autodoc/';
    $scope.links = [
      {
        text: 'Genie-Workshop Slides',
        href: 'http://slid.es/kentdodds/genie'
      },
      {
        text: 'Genie-Workshop Repo',
        href: 'http://github.com/kentcdodds/genie-workshop'
      },
      {
        text: 'Genie Repo',
        href: 'http://github.com/kentcdodds/genie'
      },
      {
        text: 'UX-Genie Repo',
        href: 'http://github.com/kentcdodds/ux-genie'
      },
      {
        text: 'Genie Documentation',
        href: $scope.docs
      }
    ];

    function initScope() {
      if (console.clear) {
        console.clear();
      }
      $scope.lessonNum = parseInt($location.path().substring(1));
      $scope.lessonDir = 'lesson' + $scope.lessonNum + '/';
      $scope.lesson = $scope.lessons[$scope.lessonNum];
      if ($scope.lessons.length > $scope.lessonNum + 1) {
        $scope.nextLesson = $scope.lessons[$scope.lessonNum + 1];
      } else {
        $scope.nextLesson = null;
      }
      if ($scope.lessonNum > 0) {
        $scope.previousLesson = $scope.lessons[$scope.lessonNum - 1];
      } else {
        $scope.previousLesson = null;
      }

      $http.get($scope.lessonDir + 'genie-code.js').success(function(js) {
        genieCodeMirror.setValue(js);
      });

      genie.reset();
      if ($scope.lesson.setupGenie) {
        GW.loadScript($scope.lessonDir + 'setup-genie.js');
      }
      GW.loadScript($scope.lessonDir + 'genie-code.js');
    }

    initScope();

    $scope.rerunGenieCode = function() {
      genie.reset();
      if ($scope.lesson.setupGenie) {
        GW.loadScript($scope.lessonDir + 'setup-genie.js', function() {
          runCodeMirrorCode();
        });
      } else {
        runCodeMirrorCode();
      }
    };

    function runCodeMirrorCode() {
      // AAAAAAAHHHHHHHHHH!!!!!!
      $window.eval(genieCodeMirror.getValue());
    }

    $scope.changeLesson = function(lesson) {
      $location.path('' + lesson);
      initScope();
    };

  });

  app.directive('codeMirror', function(CodeMirror) {
    return {
      link: function(scope, el) {
        genieCodeMirror = CodeMirror(el[0], {
          value: '',
          mode:  'javascript',
          lineNumbers: true,
          matchBrackets: true
        });
      }
    }
  });
})();