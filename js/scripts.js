function Pie(toppings, size){
  this.toppings = toppings;
  this.size = size;
}

Pie.prototype.findPrice = function(pie){
  var price;
  console.log(pie.size);
  console.log(pie.toppings);
  if (pie.size === "small"){
    price = 7;
  } else if (pie.size === "medium"){
    price = 12;
  } else if (pie.size === "large"){
    price = 15;
  } else price = 20;
  price = (pie.toppings * 2) + price;
  return price;
}

$(document).ready(function(){
  $("#submit").click(function(event){
    event.preventDefault();
    var inputToppings = $("input:checkbox[name=toppings]:checked").length;
    var inputSize = $("input:radio[name=size]:checked").val();
    var newPie = new Pie(inputToppings, inputSize);
    newPie.findPrice(newPie);
    $("#price").text(" $" + newPie.findPrice(newPie));
  })
})