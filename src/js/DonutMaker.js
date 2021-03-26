class DonutMaker{
    constructor(){
        this._donutCount = 0;
        this._autoClickerCount = 0;
        this._autoClickerCost = 100;
        this._donutMultiplierCount = 0;
        this._donutMultiplierCost = 10;
        this._autoMakeDonut = undefined;

    }

    GetDonutCount(){
        return this._donutCount;
    }

    AddDonut(){
            this._donutCount+=Math.pow(1.2, this._donutMultiplierCount);
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
        if (this._autoMakeDonut == undefined){
            this._autoMakeDonut = setInterval(this.ActivateAutoClickers, 1000);
        console.log(this._autoMakeDonut);}
        } 
    }

    ActivateAutoClickers(){
        this._donutCount+=(this._autoClickerCount*Math.pow(1.2, this._donutMultiplierCount));
        }
    
    GetMultiplierCount(){
        return this._donutMultiplierCount;
    }

    GetMultiplierCost(){
        return this._donutMultiplierCost;
    }

    AddDonutMultiplier(){
        if (this._donutCount >= this._donutMultiplierCost){
            this._donutMultiplierCount++;
            this._donutCount-=this._donutMultiplierCost;
            this._donutMultiplierCost+=(this._donutMultiplierCost*.10);
        }
    }
    
    
    Reset(){
        this._donutCount = 0;
        this._autoClickerCount = 0;
        this._autoClickerCost = 100;
        this._donutMultiplierCount = 0;
        this._donutMultiplierCost = 10;
    }
    
        
}

