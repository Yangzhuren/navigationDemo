class BaseActions{
    constructor(parant){
        if(!parant) return;
        if(this){
            const prototype = Object.getPrototypeOf(this);
            Object.getOwnPropertyNames(prototype).map((name)=>{
                if(typeof this[name] === 'function'){
                    parant[name] = this[name].bind(parant);
                }
            });
        }
    }
}

module.exports = BaseActions;