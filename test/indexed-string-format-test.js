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

var should = require('should');
var sfmt = require('../lib/sfmt');

describe('indexed string format', function () {
  it('should default to strings when no format is specified', function () {
    sfmt('a %{2} b %{0} c%{1} d%{3}', 'a', 'b', 'c', 'd').should.equal('a c b a cb dd');
  });

  it('should use formats when specified', function () {
    sfmt('a %{2:s} b %{0} c%{1:d} d%{3:j}', 'a', 12, 'c', 'd').should.equal('a c b a c12 d"d"');
  });

  it('should ignore unknown type format', function () {
    sfmt('a %{0:q}', 'hello').should.equal('a hello');
  });

  it('should be escaped with double percents', function () {
  	sfmt('%%{0} bc', 'one').should.equal('%{0} bc');
  })
});
