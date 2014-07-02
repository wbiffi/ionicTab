angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'Scruff McGruff', age: 24 },
    { id: 1, name: 'G.I. Joe', age: 28 },
    { id: 2, name: 'Miss Frizzle', age: 34 },
    { id: 3, name: 'Ash Ketchum', age: 14 },
    { id: 4, name: 'Sime Biffi', age: 2 },
    { id: 5, name: 'Dolores Barra', age: 42 },
    { id: 6, name: 'Fernanda Vidoroni', age: 43 }
  ];

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
});
