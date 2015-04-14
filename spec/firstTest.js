describe('',function(){

var scope = {};


//injection access to angular controller in tests
beforeEach(inject(function($controller){
  //initializing controller with a test scope as $scope
  $controller('TodoController',{$scope:scope});
}));

  it('should define a list of object',function(){
    expect(scope.list).toBeDefined();
  });

  it('should define a list of objects',function(){
    expect(scope.list[0]).toBeEqual('test');
  });

  it('should define a list of objects',function(){
    expect(scope.list[1]).toBeEqual('execute');
  });

  it('should define a list of objects',function(){
    expect(scope.list[2]).toBeEqual('refactor');
  });  

});