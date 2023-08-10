export function ShuffleCardsFooter (Except_Card){
    const Random = (min,max,same)=>{
        let Array = []
        for(let i=0 ; i<3 ; i++){
            let id =  Math.floor(Math.random() * (max - min)+min);
            if(id!==same && id!==Array.find((i)=>i===id)){
                Array.push(id)
            }
            else{
                id =  Math.floor(Math.random() * (max - min)+min);
                Array.push(id)
            }
        }
        return Array
    }

    if(Except_Card <= 20){
       return Random(1,21,Except_Card)
    }
    else if(Except_Card > 20 && Except_Card <=40){
       return Random(21,41,Except_Card)
    }
    else if(Except_Card >40 && Except_Card <=60){
       return Random(41,61,Except_Card)
    }
    else if(Except_Card >60 && Except_Card <=80){
       return Random(61,81,Except_Card)
    }
    else if(Except_Card >80 && Except_Card <=100){
       return Random(81,101,Except_Card)
    }
}

export function Random_Number(count , min , max) {
    const RandomArray = [];
    for (let i = 0; i < count; i++) {
      const RandomNumber = Math.floor(Math.random() * (max - min)) + min;
      RandomArray.push(RandomNumber);
    }
    return RandomArray;
}

export const ScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};