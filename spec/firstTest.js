describe('given i am using todo app',function(){

  var scope = {};


//injection access to angular controller in tests
  beforeEach(function(){
    module('todo');
    inject(function($controller){
      $controller('TodoController',{$scope:scope});
    });
  });

  it('should define a list of object',function(){
    expect(scope.list).toBeDefined();
  });

  it('should define a list of objects',function(){
    expect(scope.list[0]).toEqual('test');
  });

  it('should define a list of objects',function(){
    expect(scope.list[1]).toEqual('execute');
  });

  it('should define a list of objects',function(){
    expect(scope.list[2]).toEqual('refactor');
  }); 

  describe('when using a to-do list ',function(){

    beforeEach(function(){
      scope.add('repeat');
    });

    it('should add item to the last item in list',function(){
      var lastIndexOfList = scope.list.length - 1;
      expect(scope.list[lastIndexOfList]).toEqual('repeat');


    });

  }); 

});

  