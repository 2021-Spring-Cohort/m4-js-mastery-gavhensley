const myShop = new DonutMaker();
//text elements 
var donutCounter = document.getElementById('DonutCounter');
let autoBakerCounter = document.getElementById('ClickerCount');
let autoBakerCost = document.getElementById('ClickerCost');
let multiplierCounter = document.getElementById('MultiplierCount');
let multiplierCost = document.getElementById('MultiplierCost');

//buttons
var donutBtn = document.getElementById('DonutButton');
var autoBakeButton = document.getElementById('autoBtn');
var multButton = document.getElementById('multBtn');
var resetButton = document.getElementById('resetBtn');

//update
const updateDonutCounter = function(donutCounter, myShop){
    donutCounter.innerText = "Donut count: " + Math.round(myShop.GetDonutCount());
}
const updateAutoBakerCounter = function(autoBakerCounter, myShop){
    autoBakerCounter.innerText = "AutoBakers\u2122 owned: " + myShop.GetAutoClickerCount();
}
const updateAutoBakerCost = function(autoBakerCost, myShop){
    autoBakerCost.innerText = "Current AutoBaker\u2122 cost: " + (myShop.GetAutoClickerCost()).toFixed(1) + " donuts." ;
    
}
const updateMultiplierCounter = function(multiplierCounter, myShop){
    multiplierCounter.innerText = "Current Multiplier: " + (Math.pow(1.2, myShop.GetMultiplierCount()).toFixed(2));
}
const updateMultiplierCost = function(multiplierCost, myShop){
    multiplierCost.innerText = "Current Multiplier cost: " + (myShop.GetMultiplierCost()).toFixed(1) + " donuts.";
}
function ToggleAutoClick() {
    if(myShop.GetDonutCount() < myShop.GetAutoClickerCost()){
        autoBakeButton.disabled = true;
    }
    else{
        autoBakeButton.disabled = false;
    }
}

function ToggleMultClick() {
    if(myShop.GetDonutCount() < myShop.GetMultiplierCost()){
        multButton.disabled = true;
    }
    else{
        multButton.disabled = false;
    }
}

//create
const makeDonutBtn = (donutBtn, donutCounter, myShop) => {
    donutBtn.addEventListener('click', ()=>{
        myShop.AddDonut();
        ToggleAutoClick();
        ToggleMultClick();
        updateDonutCounter(donutCounter, myShop);
    })
}

const makeAutoBtn = (autoBakeButton, donutCounter, myShop) => {
    autoBakeButton.addEventListener('click', ()=>{
        myShop.AddAutoClicker();
        updateDonutCounter(donutCounter, myShop);
        updateAutoBakerCounter(autoBakerCounter, myShop);
        updateAutoBakerCost(autoBakerCost, myShop);
        ToggleAutoClick();
        ToggleMultClick();
    })
}

var myVar = setInterval(TimedAuto, 1000);
function TimedAuto(){
  myShop.ActivateAutoClickers();
  updateDonutCounter(donutCounter, myShop);
  ToggleMultClick()
  ToggleAutoClick();
}


const makeMultBtn = (multButton, donutCounter, myShop) => {
    multButton.addEventListener('click', ()=>{
        myShop.AddDonutMultiplier();
        updateDonutCounter(donutCounter, myShop);
        updateMultiplierCounter(multiplierCounter, myShop);
        updateMultiplierCost(multiplierCost, myShop);
        ToggleMultClick();
        ToggleAutoClick();
    })
}

const makeResetBtn = (resetButton, donutCounter, autoBakerCounter, autoBakerCost, multiplierCounter, multiplierCost, myShop) => {
    resetButton.addEventListener('click', ()=>{
        myShop.Reset();
        updateDonutCounter(donutCounter, myShop);
        updateAutoBakerCounter(autoBakerCounter, myShop);
        updateAutoBakerCost(autoBakerCost, myShop);
        updateMultiplierCounter(multiplierCounter, myShop);
        updateMultiplierCost(multiplierCost, myShop);
        ToggleAutoClick();
        ToggleMultClick();
    })
}


//function calls
ToggleAutoClick();
ToggleMultClick();
updateDonutCounter(donutCounter, myShop);
updateAutoBakerCost(autoBakerCost, myShop);
updateMultiplierCost(multiplierCost, myShop);
makeDonutBtn(donutBtn, donutCounter, myShop);
makeAutoBtn(autoBakeButton, donutCounter, myShop);
makeMultBtn(multButton, donutCounter, myShop);
makeResetBtn(resetButton, donutCounter, autoBakerCounter, autoBakerCost, multiplierCounter, multiplierCost, myShop);






