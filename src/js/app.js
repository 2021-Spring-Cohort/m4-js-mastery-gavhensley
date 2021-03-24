var myShop = new DonutMaker();

//counters and buttons
let donutCounter = document.getElementById('DonutCounter');
donutCounter.innerText = "Donut count: " + myShop._donutCount;

let autoBakerCost = document.getElementById('ClickerCost');
autoBakerCost.innerText = "Current AutoBaker\u2122 cost: " + myShop._autoClickerCost + " donuts." ;

let autoBakerCounter = document.getElementById('ClickerCount');
autoBakerCounter.innerText = "AutoBakers\u2122 owned: " + myShop._autoClickerCount;



