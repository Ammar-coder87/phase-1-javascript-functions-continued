// code your solution here

function saturdayFun(string = "roller-skate") {
return `This Saturday, I want to ${string}!`
}
console.log(saturdayFun());

console.log(saturdayFun("bathe my dog"));

/*---------------------------------------------------------------------------------------------------------------------*/

function mondayWork(string = "go to the office"){
    return `This Monday, I will ${string}.`
}
console.log(mondayWork());
console.log(mondayWork("work from home"));

/*---------------------------------------------------------------------------------------------------------------------*/


function wrapAdjective( visualFlair = "*" ) {
    return function ( nameOfAdj = "a hard worker" ) {
        return `You are ${visualFlair}${nameOfAdj}${visualFlair}!`;
    }
    
}
console.log(wrapAdjective()());
console.log(wrapAdjective("||")("a dedicated programmer"));