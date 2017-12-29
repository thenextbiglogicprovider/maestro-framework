/**
 * Test Setup File
 */
//Can't use import , because ES5 is used. The file doesn't transpile.
require('babel-register')();

// ignore unsupported extensions

require.extensions['.css']=function(){};
