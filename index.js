var cart = [];
var itemName,itemPrice;

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
var det = {itemName,itemPrice};
itemName =itemName ;
itemPrice = Math.random();
cart.push(det)
if(cart.push(det)) {
  return item +" has been added to your cart.";
}
}

function viewCart() {
  var name;
  var price;
 if(!cart) {
   return "Your shopping cart is empty.";
 }
  for(cart=0;cart.length;cart++) {
    if(cart === cart.length - 1) {
    return `In your cart, you have ${cart[itemName]} at ${cart[itemPrice]}` }
  else
  name = cart[itemName];
  price = cart[price]
      return `In your cart, you have ${name} at $cart[itemPrice]` + cart.join(",");
  }
}

function total() {
  var con = getCart();
 var total = 0;
for(var i = 0;i<con.length ; i++) {
  console.log(con[i].itemPrice)
  total =con[i].itemPrice;
  
}  
return total;
}

function removeFromCart(itemName) {

  var info = getCart();
  for(var i = 0;i<info.length;i++) {
    if(item === info[i].itemName) {
      info.pop(item)
    }
    else {
    return "That item is not in your cart."
    }
          return info;

  }
  
}

function placeOrder(cardNumber) {

  if(!cardNumber) {
        console.log("Sorry, we don't have a credit card on file for you.");

    return "Sorry, we don't have a credit card on file for you."
  }
  else
  {
    var sum = total();
    setCart([]);
    return `Your total cost is $${sum}, which will be charged to the card ${cardNumber}.`
  }
}
