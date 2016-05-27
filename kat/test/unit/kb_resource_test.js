var angular = require('angular');
require('angular-mocks');

describe('kbResource service', function() {
  var $httpBackend;
  var kbResource;

  beforeEach(angular.mock.module('practiceApp'));
  beforeEach(angular.mock.inject(function(_$httpBackend_) {
    $httpBackend = _$httpBackend_;
  }));
  it('should return a function', angular.mock.inject(function(kbResource) {
    expect(typeof kbResource).toBe('function');
  }));

  it('should getAll of the resources', angular.mock.inject(function(kbResource) {
    $httpBackend.expectGET('http://localhost:8000/api/pet').respond(200, [{ name: 'Test' }]);
    var testArray = [];
    var errorTest = [];
    var testUrl = 'http://localhost:8000/api/pet';
    var testRemote = new kbResource(testArray, errorTest, testUrl);
    testRemote.getAll();
    $httpBackend.flush();
    expect(testArray.length).toBe(1);
    expect(testArray[0].name).toBe('Test');
  }));

  it('should add to the test array', angular.mock.inject(function(kbResource) {
    $httpBackend.expectPOST('http://localhost:8000/api/pet', { name: 'test resource' })
      .respond(200, { name: 'test pet' });
    var baseUrl = 'http://localhost:8000/api/pet';
    var testArray = [];
    var errorTest = [];
    var testRemote = new kbResource(testArray, errorTest, baseUrl);
    testRemote.create({ name: 'test resource' });
    $httpBackend.flush();
    expect(testArray.length).toBe(1);
    expect(errorTest.length).toBe(0);
    expect(testArray[0].name).toBe('test pet');
  }));

  it('should delete an item from the test array', angular.mock.inject(function(kbResource) {
    $httpBackend.expectDELETE('http://localhost:8000/api/pet/1')
      .respond(200);
    var baseUrl = 'http://localhost:8000/api/pet';
    var testArray = [{ name: 'test resource', _id: 1 }];
    var errorTest = [];
    var testRemote = new kbResource(testArray, errorTest, baseUrl);
    testRemote.removeResource(testArray[0]);
    $httpBackend.flush();
    expect(testArray.length).toBe(0);
    expect(errorTest.length).toBe(0);
  }));
});
