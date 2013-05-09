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

describe('positional string format', function () {
  it('should format string when one descriptor', function () {
    sfmt('%s', 'abc').should.equal('abc');
  });

  it('should format multiple descriptors', function () {
    var data = { json: 'data' };
    sfmt('Heres a %s and a %d and some %j', 'string', 37, data)
      .should.equal('Heres a string and a 37 and some ' + JSON.stringify(data));
  });

  it('should escape double percents', function () {
    sfmt('it is 100%%').should.equal('it is 100%');
  });

  it('should ignore unknown formats', function () {
    sfmt('this is %x').should.equal('this is %x');
  });
});
