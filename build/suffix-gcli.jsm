///////////////////////////////////////////////////////////////////////////////

/*
 * require GCLI so it can be exported as declared in EXPORTED_SYMBOLS
 * The dependencies specified here should be the same as in Makefile.dryice.js
 */
var gcli = require("gcli/index");
gcli.createView = require("gcli/ui/start/firefox");
gcli._internal = { require: require, define: define, console: console };

