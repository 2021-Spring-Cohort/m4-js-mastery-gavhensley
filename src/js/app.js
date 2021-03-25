//methods
const updateDonutCounter = function(donutCounter, myShop){
    donutCounter.innerText = "Donut count: " + myShop.GetDonutCount();
}
var donutCounter = document.getElementById('DonutCounter');
const myShop = new DonutMaker();
var donutBtn = document.getElementById('DonutButton');

const makeDonutBtn = (donutBtn, donutCounter, myShop) => {
    donutBtn.addEventListener('click', ()=>{
        myShop.AddDonut();
        updateDonutCounter(donutCounter, myShop);
    })
}

//counters and buttons
updateDonutCounter(donutCounter, myShop);
makeDonutBtn(donutBtn, donutCounter, myShop);

let autoBakerCost = document.getElementById('ClickerCost');
autoBakerCost.innerText = "Current AutoBaker\u2122 cost: " + myShop._autoClickerCost + " donuts." ;

let autoBakerCounter = document.getElementById('ClickerCount');
autoBakerCounter.innerText = "AutoBakers\u2122 owned: " + myShop._autoClickerCount;

let multiplierCost = document.getElementById('MultiplierCost');
multiplierCost.innerText = "Current Multiplier cost: " + myShop._donutMultiplierCost;

let multiplierCounter = document.getElementById('MultiplierCount');
multiplierCounter.innerText = "Multipliers owned: " + myShop._donutMultiplierCount;


