function groomTheDog(weight){
    let price = 40; 
    if(weight < 15){
        price /= 2;
        return price; 
    }
    else if(weight >= 15 && weight < 40){
        return price;

    }
    else{
        price = ((weight - 40)*.1) + 40;
        return price;


    }
}

function bigDogCalc(weight){
    let price = ((weight-40)*.2) + 40;
    return price;

}
let JeanLuc = groomTheDog(30);
console.log('Price ${JeanLuc}')

let Beowulf = groomTheDog(247);
console.log('Price ${Beowulf}');

