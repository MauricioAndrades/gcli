/*
 * Copyright 2012, Mozilla Foundation and contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

define(function(require, exports, module) {

var assert = require('test/assert');
var History = require('gcli/history').History;

exports.setup = function() {
};

exports.shutdown = function() {
};

exports.testSimpleHistory = function () {
  var history = new History({});
  history.add('foo');
  history.add('bar');
  assert.is('bar', history.backward());
  assert.is('foo', history.backward());

  // Adding to the history again moves us back to the start of the history.
  history.add('quux');
  assert.is('quux', history.backward());
  assert.is('bar', history.backward());
  assert.is('foo', history.backward());
};

exports.testBackwardsPastIndex = function () {
  var history = new History({});
  history.add('foo');
  history.add('bar');
  assert.is('bar', history.backward());
  assert.is('foo', history.backward());

  // Moving backwards past recorded history just keeps giving you the last
  // item.
  assert.is('foo', history.backward());
};

exports.testForwardsPastIndex = function () {
  var history = new History({});
  history.add('foo');
  history.add('bar');
  assert.is('bar', history.backward());
  assert.is('foo', history.backward());

  // Going forward through the history again.
  assert.is('bar', history.forward());

  // 'Present' time.
  assert.is('', history.forward());

  // Going to the 'future' just keeps giving us the empty string.
  assert.is('', history.forward());
};

});