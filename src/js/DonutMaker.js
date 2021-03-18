class DonutMaker{
    constructor(){
        this._donutCount = 0;
        this._autoClickerCount = 0;
        this._autoClickerCost = 100;

    }

    getDonutCount(){
        return this._donutCount;
    }

    addDonut(){
        this._donutCount++;
    }

    getAutoClickerCount(){
        return this._autoClickerCount;
    }
    
    addAutoClicker(){
        this._autoClickerCount++;
        this._donutCount -= this._autoClickerCost;
        this._autoClickerCost * (1 + (this._autoClickerCost * .10));
    }

    
}