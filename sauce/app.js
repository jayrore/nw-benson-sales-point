'use strict';

var ngdi = require('ng-di');
var config = require('../config.js').config;

ngdi.module('benson-sales-point', [])
  .constant('fluxtore', require('fluxtore'))
  .constant('_',        require('underscore'))
  .constant('mongoose', require('mongoose'))
  //registering stores
  .factory('userStore', require('./stores/userStore'))
  //registering models
  .factory('UserModel', require('./models/Users'))
  //registering ui components
  .factory('Store', require('./ui/store'))
  .factory('User', require('./ui/user'))
  //global dependencies
  .constant('document', window.document)
  .constant('React', require('react/addons'))
	.run(['React', 'Store', 'document', function(React, Store, document) {
    React.render(<Store options={config.toolBarItems}/>,document.getElementById('main'))
	}]);

//show the awesome to the world.
ngdi.injector(['benson-sales-point']);
