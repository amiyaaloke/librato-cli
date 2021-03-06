var proxyquire  =  require('proxyquire').noPreserveCache();

describe('when obtaining a list of metrics without a filter', function() {
  var output, calledEndPoint;

  beforeEach(function() {
    var testResponse = { metrics: [ ], query: { } };
    var mockClient = {
          get: function(endPoint, handler) {
            calledEndPoint = endPoint;
            handler(testResponse, { });
          }
        };
    var mockProgram = {
        parse: function() { return mockProgram; },
        usage: function() { return mockProgram; },
        option: function() { return mockProgram; },
        outputHelp: function() { return mockProgram; },
        args: [ ]
      };

    console.log = function(msg) { output = msg; };

    proxyquire('../librato-cli-metric-list',
            { './modules/librato-cli-client': mockClient, './modules/librato-cli-config': { baseUrl: '' },
              'commander': mockProgram });
  });

  it('should call /metrics resource on librato api', function() {
    expect(calledEndPoint).toEqual('v1/metrics?name=');
  });

  it('should print out the response from the /metrics resource', function() {
    expect(output).toEqual('[]');
  });
});

describe('when obtaining a list of metrics with a specified filter', function() {
  var output, calledEndPoint;

  beforeEach(function() {
    var testResponse = { metrics: [ ], query: { } };
    var mockClient = {
          get: function(endPoint, handler) {
            calledEndPoint = endPoint;
            handler(testResponse, { });
          }
        };
    var mockProgram = {
        parse: function() { return mockProgram; },
        usage: function() { return mockProgram; },
        option: function() { return mockProgram; },
        outputHelp: function() { return mockProgram; },
        args: [ 'filter' ]
      };

    console.log = function(msg) { output = msg; };

    proxyquire('../librato-cli-metric-list',
            { './modules/librato-cli-client': mockClient, './modules/librato-cli-config': { baseUrl: '' },
              'commander': mockProgram });
  });

  it('should call /metrics resource on librato api with the specified filter', function() {
    expect(calledEndPoint).toEqual('v1/metrics?name=filter');
  });

  it('should print out the response from the /metrics resource', function() {
    expect(output).toEqual('[]');
  });
});
