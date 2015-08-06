'use strict';

module.exports = store;
store.$inject = ['fluxtore', '_'];

function store(fluxtore, _) {
    var cache = [],
        idSeed = 0,
        proxy;

    return proxy = fluxtore.createStore({
        events: ['change'],

        getUsers: getUsers,

        actions: {
            addUser: addUser,

            removeUser: removeUser
        }
    });

    function addUser(text) {
        cache.push({ id: ++idSeed, text: text});
        proxy.emitChange();
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

    function getUser() {
        if (cache === null) {
            //loadTodos();
        }

        return cache;
    }
}
