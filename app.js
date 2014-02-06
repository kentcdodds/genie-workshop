(function() {
  // Ignore all this angular stuff. This is just for demo purposes
  var app = angular.module('gw', ['uxGenie']);

  app.constant('genie', genie);

  app.controller('MainCtrl', function($scope, genie) {

    var autodoc = 'http://kent.doddsfamily.us/genie/autodoc/';
    $scope.demo = {
      repo: 'https://github.com/kentcdodds/genie-workshop/tree/',
      docs: autodoc,
      branch: 'master',
      concept: 'Initial Setup',
      nextBranch: 'register',
      nextConcept: 'Wish Registration',
      links: [
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
          href: autodoc
        }
      ]
    };

    // Insert genie JavaScript here!


    // End genie JavaScript here!
  });
})();