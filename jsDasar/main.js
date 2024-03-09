// alert('test') // jika 1 statement dalam satu baris maka ; tidak wajib
// alert('test2'); alert('test3');  // 2 step dalam satu baris maka ; wajib

// var fullName = "ridho"
// document.write(fullName)

var fullName = "ridho"
document.writeln(fullName)
fullName = "ganteng"
document.write(fullName)

document.write(fullName)
// let fullName = "ridho"

var x = 10;
if (true) {
    var x = 20;
    document.writeln(x);
}
document.writeln(x);

let z = 10;
if (true) {
    let z = 20;
    document.writeln(z);
}
document.writeln(z);

let round = 10;
let desimal = 10.5;

let final = round + desimal;
document.writeln(final);

let bulat = 10;
let string = 'a';

document.write(bulat / 0);
document.write(string / 5);

let a = 123123123123123123123123123123123123123123123123123123n;
document.write(a);

let admin;
document.write(admin);
let addmin = null;
document.write(addmin);

// let employe = Symbol("employe");
// console.log(employe);
// console.log(employe.description);

let employee = {
    name: "ridho",
    age: 20,
    "position": "programmer"
};
document.write(employee.name);
document.write(employee["age"]);
document.write(employee.position);
document.write('<br>');
document.write(`nama saya ${employee.name} umur saya ${employee.age} posisi saya ${employee.position}`);

document.write('<br>');

let str = "123";
let nbr = Number("123");
console.log(typeof str);
alert(typeof nbr);

console.log(Boolean(0))
console.log(Boolean(1))

let e = 3;
let f = 5;

console.log(e + f);
console.log(e - f);
console.log(e * f);
console.log(e ** f);
console.log(e / f);
console.log(e % f);

console.log(e == f);
console.log(e > f);
console.log(e < f);
console.log(e != f);

console.log(e && f);
console.log(e || f);
console.log(!f);

console.log(e & f);
console.log(e | f);
console.log(~f);

console.log(e << f);
console.log(e >> f);

console.log(e === f);

console.log(e == f ? "benar" : "salah");

alert("hello world");

let tanya = prompt("apakah kamu mau makan baso ?");
alert('jawaban anda ' + tanya);

let tanya1 = confirm("apakah kamu mau makan baso ?");
tanya1 ? alert('iya') : alert('tidak');

let setan = confirm("apa kamu setan ?");
if (setan) {
    alert('iya');
}

let setan2 = confirm("apa kamu setan ?");
if (setan2) {
    alert('iya');
} else {
    alert('tidak');
}

let tesElseIf = prompt("1 + 1 ?")

if (tesElseIf == 2) {
    alert('jawaban benar');
} else if (tesElseIf > 2) {
    alert('jawaban anda kelebihan');
} else if (tesElseIf < 2) {
    alert('jawaban anda kurang');
} else {
    alert('jawaban anda salah');
}


let day = prompt("Enter a day of the week:");

switch (day) {
    case "Monday":
        alert("It's Monday!");
        break;
    case "Tuesday":
        alert("It's Tuesday!");
        break;
    case "Wednesday":
        alert("It's Wednesday!");
        break;
    case "Thursday":
        alert("It's Thursday!");
        break;
    case "Friday":
        alert("It's Friday!");
        break;
    case "Saturday":
        alert("It's Saturday!");
        break;
    case "Sunday":
        alert("It's Sunday!");
        break;
    default:
        alert("Invalid day!");
        break;
}

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    document.writeln(i);
}
