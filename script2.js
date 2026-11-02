// week 11 assignmnts

function calculateTip(bill, percent) {
  let tipAmount = bill * (percent / 100);

  return Number(tipAmount.toFixed(2));
}

function getDeliveryFee(total, city) {
  let fee = 0;

  let cleanCity = city.trim().toLowerCase();

  if (cleanCity === "kabul") {
    fee = 50;
  } else if (cleanCity === "herat" || cleanCity === "mazar") {
    fee = 100;
  } else {
    fee = 150;
  }

  if (total > 1000) {
    fee = 0;
  }

  return fee;
}

console.log(" TEST CALCULATE TIP ");
let tip1 = calculateTip(250, 10);
console.log("Bill: 250, Tip (10%): " + tip1);

let tip2 = calculateTip(500, 15);
console.log("Bill: 500, Tip (15%): " + tip2);

let tip3 = calculateTip(125.5, 12);
console.log("Bill: 125.50, Tip (12%): " + tip3);

console.log("\n TEST DELIVERY FEE ");
let delivery1 = getDeliveryFee(400, "Kabul");
console.log("Total: 400, City: Kabul -> Fee: " + delivery1);

let delivery2 = getDeliveryFee(800, "Herat");
console.log("Total: 800, City: Herat -> Fee: " + delivery2);

let delivery3 = getDeliveryFee(1500, "Mazar");
console.log("Total: 1500, City: Mazar -> Fee: " + delivery3);
