/**
* Copyright (c) Microsoft.  All rights reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

var joe = require('joe');
var should = require('chai').should();
var sfmt = require('..');

joe.describe('named string format', function (describe, it) {
  it('should get values from object by name', function () {
    sfmt('a: %{name} b: %{value}', { name: 'chris', value: 'dev'})
      .should.equal('a: chris b: dev');
  });

  it('should return undefined in string for missing values', function () {
    sfmt('a: %{something} b: %{nothing}', { something: 5})
      .should.equal('a: 5 b: undefined');
  });
});
