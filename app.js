const math = 6
const bb = 2;

let myName = 'eom';

// console.log(math + b)
// console.log(math * b)
// console.log(math / b)
// console.log('hello '+myName)

// myName="taehyeon";
// console.log('your new name is ' + myName)

const week = [1,2,3,4,5,6,7,8,9]
// console.log(week[4])
//마지막에 숫자 추가할 때 push사용
week.push(13)
// console.log(week)

//------------------------------Object

const playerName = 'Eom'
const playerPoint = '12'
const playerGood = false;
const playerArray = 'little'

const player = {
    name: 'Eom',
    point: '12',
    good : false,
    array: 'little'
};
player.lastName = 'potato'
// console.log(player)
player.point = '15'
// console.log(player) //이 때는 point값이 15로 변경됨
player.point = player.point -5;
// console.log(player.point)

//--------------------------------Object

//------------Function

let key=0;
function hello(obj,key){
    // console.log('hello my name is '+ obj + "and i'm "+ key)
}
hello('nico',10);
hello('Eom',1);
hello('Tae',2);

function plus (hoho,b){
    // console.log(hoho+b)
}
function divide(a,b){
    // console.log(a/b);
}
plus(8,60);
divide(20,40);

const Name = {
    name:'taehyeon',
    gg:function(manyName){
        console.log('hello '+ manyName + ' nice to meet you')
    }
};
Name.gg('Eom');
Name.gg('good')

function kk(a,b){
    console.log(a+b)
}
kk(5,5)

//-----------------------------------------Function