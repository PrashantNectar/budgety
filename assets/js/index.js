var budgetController = (function(){
  var x = 20;

  var add = function(a)
  {
    return a + x;
  }

  return{
    publicTest: function(b)
    {
      var c = add(b);
      return c;
    }
  }
})();

var UIController = (function(){

})();

var Controller = (function(budgetCtrl,UICtrl){
  var z = budgetCtrl.publicTest(5);

  return{
    anotherPublic: function()
    {
      console.log(z);
    }
  }
})(budgetController,UIController);