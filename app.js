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
        // console.log('hello '+ manyName + ' nice to meet you')
    }
};
Name.gg('Eom');
Name.gg('good')

function kk(a,b){
    // console.log(a+b)
}
kk(5,5)

//-----------------------------------------Function

// ----------------------------------------복습

const a = 5;
let taehyeon = true;
// taehyeon = false;
// let을 사용했을 때에는 값 업데이트를 할 경우 밑에 let을 붙일 필요가 없음
// console.log(a)
// console.log(taehyeon)

//날짜 만들기
const days = ["potato", "tomato", 'pizza'];
days[2] = "cola";
days.push('meat'); // 마지막에 추가 
// console.log(days)


//----------------------------------obj, Function

const FF = {
    name : "Hoho",
    age : 88,
};
// console.log(FF);
FF.name = 'nicolas';
// console.log(FF);
FF.sexy= 'soon';
// console.log(FF);

// function onePlus(obj,key){
//     console.log(obj + key)
// }
// onePlus(5,10)
// onePlus(1.33453,98988)
// onePlus(98988,1.33453)

// function minusFive(obj,key){
//     console.log(obj - 5);
// };
// minusFive(10, 10, 35, 32, 50)


// ----------------------------------계산기 기능
const calculator = {
    add: function (a, b) {
        return(a+ b)
    },
    minus: function(a,b){
        return(a-b)
    },
    times: function(a,b){
        return(a/b)
    },
    power:function(a,b){
        return(a*b)
    }
};

calculator.add(2,3);
calculator.minus(2,3);
calculator.times(2,3);
calculator.power(2,3);
const result = calculator.times(2,3)
// console.log(result)
const powerResult = calculator.power(result,20)
// console.log(powerResult)

const age = 99;
function calculateKrAge(ageForeigner){
    return ageForeigner+2;
    //return은 밖에 있는 값들을 함수 안으로 가져와서 계산 후 출력
    //console.log는 그림의 떡. 꺼내먹으려면 return필요
}

const krAge = calculateKrAge(age);
// console.log(krAge)


//----------------------------나이계산기 만들기(조건문)

const calAge = parseInt(prompt('how old are you?'));
// parseInt => string에서 number로 변환해주는 함수
let i =isNaN(calAge);
let pp = calAge;
if(i || pp<0){
    alert('올바른 나이를 입력하세요');
} else if(pp<18 ){
    alert('어리다');
} else if(pp>=18 && pp<=50 ){
    alert('먹을 수 있다');
} else if(pp>50 && pp<=80){
    alert('운동하세요')
} else if(pp>80){
    alert ('은퇴')
} 
console.log(pp);

// &&은 둘 다 true여야하고 ||은 둘 중 하나만 true면 true
//       ***정리
// true || true === true
// false || true === true
// true || false === true
// false || false === false

// true && true === true
// false && true === false
// true && false === false
// false && false === false