class DonutMaker{
    constructor(){
        this._donutCount = 0;
        this._autoClickerCount = 0;
        this._autoClickerCost = 100;

    }

    GetDonutCount(){
        return this._donutCount;
    }

    AddDonut(){
        this._donutCount++;
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
    };
    
    let autoMakeDonut = SetInterval(ActivateAutoClickers(), 1000);//I know this needs to be somewhere, but I'm not sure where
    
};

ActivateAutoClickers(){
    let i = 0
    for(i = 0; i < this._autoClickerCount; i++){
        this.AddDonut();
    };    
        //for loop call on add donut for every auto clicker
    };






    
}