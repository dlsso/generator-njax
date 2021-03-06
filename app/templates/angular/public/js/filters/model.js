'use strict';

/* Filters */

angular.module('<%= config.app_name %>.filters', []).
    filter('interpolate', ['version', function(version) {
        return function(text) {
            return String(text).replace(/\%VERSION\%/mg, version);
        };
    }]);