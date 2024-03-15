const myName: string = "Natalia";
let myMilkAmount: number = 50;
let myCoffeeType: string = 'Cappuccino';

console.log(`Hello, ${myName}. Your coffee is ${myCoffeeType} with ${myMilkAmount} ml of milk`)

if (myMilkAmount > 50){
    console.log('A lot of milk, daaamn!');
}
console.log('Preparing your coffee');





if(isTooMuchMilk()) {
    console.log(muchMilk() + muchMilkResult(false));

} else if(myMilkAmount > 100)  {
    console.log(muchMilk() + muchMilkResult(true));
} else if (myCoffeeType === 'Cappuccino') {
    console.log('Good choice')
} else {
    console.log('Blab la')
}

function muchMilkResult(isNotRealCoffee: boolean): string {
return isNotRealCoffee ? 'not a real coffee' : 'for other coffee types'
}

function isTooMuchMilk(): boolean {
    return myMilkAmount > 50 && myCoffeeType !== 'Cappuccino';
}

function muchMilk(): string {
    return 'Too much milk';
}