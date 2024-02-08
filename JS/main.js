/* Todo 1: Add price and multiply quantity
Todo 2: Add vat 
Todo 3: Give discount and show final price */

function addPrice(intiPrice, quantity) {
  totalPrice = intiPrice * quantity;
  console.log("Total price of the product before vat :", totalPrice);
  return totalPrice;
}

function addVat(returntotalPrice, vat) {
  let priceWithVat = returntotalPrice + (returntotalPrice * 30) / 130;
  console.log("Total price with vat:", Math.ceil(priceWithVat));
  //here I use Math.cei or math.floor to take round figure
  return priceWithVat;
}

function makeDisscount(returnPriceWithVat, disscount) {
  let finalPriceWithDisscount =
    returnPriceWithVat - (returnPriceWithVat * 40) / 100;
  console.log(
    "Final price after disscount:",
    Math.floor(finalPriceWithDisscount)
  );
  return finalPriceWithDisscount;
}

/* Now invoked add price and quantity function */

let price = prompt("Enter unit price:");
let product = prompt("Enter the number of quantity:");

//convert of string to number otherwise we cant calculate

let intiPrice = Number(price);
let quantity = parseInt(product);

// Now invoked add price and call them

let returntotalPrice = addPrice(intiPrice, quantity);
console.log(returntotalPrice);

// Now invoked add Vat with total price

let vat = 30;

let returnpriceWithVat = addVat(returntotalPrice, vat);
console.log(returnpriceWithVat);

// Now invoked add Disscount and give total price

let disscount = 40;

let returnfinalPriceWithDisscount = makeDisscount(
  returnpriceWithVat,
  disscount
);
console.log(returnfinalPriceWithDisscount);
