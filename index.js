const prompt = require("prompt-sync")();

console.log(`Welcome to the Mini Store! Register with your details.`);

let fullName = prompt(`Full name: `);
let mail = prompt(`Enter your email: `);

let itemsOnSale = [
  {
    brand: "Apple",
    model: "iPhone_14",
    price: 749, //in dollars
    color: "green",
  },
  
  {
    brand: "Samsung",
    model: "S20 Ultra",
    price: 940, //in dollars
    color: "green",
  },

  {
    brand: "Sony",
    model: "Xperia GT",
    price: 599, //in dollars
    color: "green",
  }
];

console.log(`Checkout out items for sale.\n`)

for (let i = 0; i < itemsOnSale.length; i++){
  console.log(itemsOnSale[i]);
}
console.log(`\n`);

let purchase = prompt(`Do you want to purchase an item? (Use "Y" for yes and "N" for no.)`);

const cart = [];

if (purchase === `Y` || purchase === `y`){
  while (purchase === `Y` || purchase === `y`) {
    console.log(`Select items by entering their brand name as displayed \n`);
    for (let i = 0; i < itemsOnSale.length; i++) {
      console.log(itemsOnSale[i]);
    }

    var items = prompt(``);
    cart.push(items);
    // console.log(cart);

    let purchase = prompt(`Do you want to purchase another item? `);
    if (purchase === `N` || purchase === `n`) {
      break;
    }
  }

  const checkoutArr = [];

  for (let i = 0; i < itemsOnSale.length; i++) {
    for (let j = 0; j < cart.length; j++) {
      if (cart[j] === itemsOnSale[i].brand) {
        checkoutArr.push(itemsOnSale[i].price);
      }
    }
  }

  // console.log(checkoutArr);

  let sum = 0;

  for (const value of checkoutArr) {
    sum += value;
  }

  // console.log(sum);

  console.log(`You have ${cart.length} items in your cart, and a grand total of $${sum} `);

  let shippingAddress = prompt(`Enter your preferred shipping address: `);

  const reciept = {
    Full_Name: fullName,
    Email: mail,
    Address: shippingAddress,
    Item: cart,
    TotalCost: sum
  }

  console.log(`Verify Order details`)
  console.log(reciept)
  
  const verifyDetails = prompt(`Are your shipping details correct? (Use Y for yes and N for no) `);

  if (verifyDetails === `Y` || verifyDetails === `y`) {
    console.log(`Choose Payment method: \n`)
    console.log(`Bear with us, our card payments are currently offline, but you can pay on delivery \n`)

    const paymentMethod = {
      Verve: "Verve Card",
      Master: "Master Card",
      POD: "Pay on Delivery"
    };

    console.log(paymentMethod);
    const selectPaymentMethod = prompt(`Slect with property name, eg: POD: `);
    // let checker = POD;
    if (selectPaymentMethod === "POD" || selectPaymentMethod === "pod"){
      var newReciept = Object.assign({}, reciept, {Payment_Method: "Pay on Delivery"});
    }

    console.log(`Re-verify reciept details \n`);
    console.log(newReciept);
    const verifyDetails2 = prompt(`Are your shipping details correct one last time? (Use Y for yes and N for no): `);

    if (verifyDetails2 === `y` || verifyDetails2 === `Y`) {
      console.log(`A copy of your reciept will be sent to you via mail. Thank you for shopping with the Mini Store! `);
    } else if (verifyDetails2 === `n` || verifyDetails2 === `N`) {
      console.log(`We do not have the functionality to change details while program is midway, please restart, Thank you! `);
    } else {
      console.log(`Invalid response `);
    }

  }else if (verifyDetails === `n` || verifyDetails === `N`) {
    console.log(`We do not have the functionality to change details while program is midway, please restart, Thank you! `);
  }
  else{
    console.log(`Invalid response\n`);
  }

} else if (purchase === `N` || purchase === `n`){
  console.log(`Please checkback next time, thank you!`);
}
else{
  console.log(`You have supplied an invalid response`);
}