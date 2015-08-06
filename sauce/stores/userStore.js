'use strict';

module.exports = store;
store.$inject = ['fluxtore', '_', 'userModel'];

function store(fluxtore, _, userModel) {
    var cache,
        idSeed = 0,
        proxy;

    return proxy = fluxtore.createStore({
        events: ['change', 'error'],

        getUsers: getUsers,
        actions: {
            addUser: addUser,
            removeUser: removeUser
        }
    });

    function addUser(user) {
        userModel.addUser(user).then(function(user){
          cache.push(user);
          proxy.emitChange();
        }, function(err){
          proxy.emitError();
        });
    }

    function removeUser(id) {
        var index = _.findIndex(cache, idPredicate(id));

        if (index >= 0) {
            cache.splice(index, 1);
            proxy.emitChange();
        }
    }

    function idPredicate(id) {
        return function(todo) {
            return id === todo.id;
        }
    }

    function getUsers() {
      console.log('hi')
      if (!cache) {
          return userModel.getUsers().then(function(users){
            cache = users;
            return users;
          });
      }
      console.log(cache);
      return cache;
    }
}
