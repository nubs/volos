/****************************************************************************
 The MIT License (MIT)

 Copyright (c) 2013 Apigee Corporation

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/
"use strict";

function SpikeArrest(options) {
  // options.timeUnit ("seconds", "hours", "minutes", or "days") default = seconds
  // options.interval (Number) default = 1
  // options.allow (Number) default = 1
}

SpikeArrest.prototype.apply = function(options, cb) {
  // options.identifier (Non-object) required
  // options.weight (Number) default = 1
  // options.allow (Number) default = whatever was set in policy setup
  // cb is invoked with first parameter error, second whether it was allowed, third stats on the quota
  // stats.allowed = setting of "allow"
  // stats.used = current value
};

function Valve(options) {
  // options.allow (Number) required
  // options.timeout (Number in seconds) default = 300
}

Valve.prototype.acquire = function(options, cb) {
  // options.identifer (Non-object) required
  // options.weight (Number) default = 1
  // returns an ID
};

Valve.prototype.release = function(id) {
  // Releases the valve and allows more traffic
};

// TODO
// Middleware for these things
// Should specify in configuration where "identifier," etc come from based on some function that you pass in.