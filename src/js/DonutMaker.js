class DonutMaker{
    constructor(){
        this._donutCount = 0;
        this._autoClickerCount = 0;
        this._autoClickerCost = 100;
        this._donutMultiplierCount = 0;
        this._donutMultiplierCost = 10;
        let autoMakeDonut = undefined;//I know this needs to be somewhere, but I'm not sure where

    }

    GetDonutCount(){
        return this._donutCount;
    }

    AddDonut(){
        if (this._donutMultiplierCount = 0){
            this._donutCount++;
        }
        else{
            this._donutCount+=Math.pow(1.2, this._donutMultiplierCount);
        }
    }

    GetAutoClickerCount(){
        return this._autoClickerCount;
    }
    
    GetAutoClickerCost(){
        return this._autoClickerCost;
    }

    AddAutoClicker(){
        if (this._donutCount >= this._autoClickerCost){
        this._autoClickerCount++;
        this._donutCount -= this._autoClickerCost;
        this._autoClickerCost+=(this._autoClickerCost*.10);
        if (this.autoMakeDonut == undefined){
            this.autoMakeDonut = setInterval(this.ActivateAutoClickers, 1000);}
        }
    }

    ActivateAutoClickers(){
        let i = 0
        for(i = 0; i < this._autoClickerCount; i++){
            this.AddDonut();}
        }
    
    AddDonutMultiplier(){
        if (this._donutCount >= this._donutMultiplierCost){
            this._donutMultiplierCount++;
            this._donutCount -= this._donutMultiplierCost;
            this._donutMultiplierCost+=(this._donutMultiplierCost*.10);
        }
    }
    
    
    
    
        
}

