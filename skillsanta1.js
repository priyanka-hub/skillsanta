= new 'October 15, 1996 05:35:32:77 GMT+11:00');
Q1.How to fetch the millisecond according to universal time from a given Date o
var dateToday = new Date('October 15, 1996 05:35:32:77 GMT+11:00');
A)dateToday. getTime();
console.log(dateToday);
Q2.
Write a JavaScript program to display the reading status (i.e. display book name, author
name and reading status) of the following books.
var library = [
{
author: 'Bill Gates',
title: 'The Road Ahead',
readingStatus: true
},
{
author: 'Steve Jobs',
title: 'Walter Isaacson',
readingStatus: true
},
{
author: 'Suzanne Collins',
title: 'Mockingjay: The Final Book of The Hunger Games',
readingStatus: false
}];
A)for (var i = 0; i < library.length; i++) 
   { var book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
if (library[i].readingStatus) {
console.log("Already read " + book);} else
    {console.log("You still need to read " + book);
    }
}   
Q3. What will be the output of the following code?
var Employee =
{
company: 'Rohit'
}
var Emp1 = Object.create(employee);
delete Emp1.company Console.log(emp1.company)
A) Uncaught SyntaxError: Unexpected identifier 
 at https://cdpn.io/cp/internal/boomboom/pen.js?key=pen.js-bf25a0c2-8886-3bea-0d71-d44b522302e6:6


Q4. Consider the two functions below. Will they both return the same thing? Why or why
not?
} ()function foo1()
{
return {
bar: "hello"
};
}
function foo2()
{
return
  {
bar: "hello"
};}
console.log(foo1());

console.log(foo2());

A)foo1 returns:
Object {bar: "hello"}
foo2 returns:
undefined 
	
Q5.var arr = [2, 56, 78, 34, 65];
var new_arr = arr.map(function(num) {
return num / 2;
});
print(new_arr);
what will be the output for the above code?

[1, 28, 39, 17, 32.5]
Q6. How to delete 'Beethoven' from set
       const set = new Set(['Beethoven', 'Mozart', 'Chopin', 'Chopin'])

A)	set.delete(“Beethoven”);

Q7. Create a nested array object called operatingSystem and add below key and values
Name - Ubuntu , version - 18.4 , license - open source

A) var operatingSystem = new Array ( );
operatingSystem[0] = new Array ( "Name",  "Ubuntu" );
operatingSystem[1] = new Array ( "version",  "18.4" );
operatingSystem[2] = new Array ( "license",  "open source" );

alert (operatingSystem[0][0] + " of operatingsystem is "+operatingSystem[0][1] );
alert(operatingSystem[1][0] + " of operatingsystem is " +operatingSystem[1][1]);
alert(operatingSystem[2][0] + " of operatingsystem is " +operatingSystem[2][1]);

Q8.How to copy values from one object to another in above mentioned example , merge and
print them? 

const name = { firstName: 'Philip',
lastName: 'Fry' };
const details = {
job: 'Delivery Boy',
employer: 'Planet Express'
};

A)let employee={... name,...details};
console.log(employee);

Q9. const gimli =
{ name: "Gimli",
race: "dwarf",
weapon: "axe",
greet: function() { return `Hi, my name is ${this.name}!`; }, };on() { return `Hi, my name is ${t 
How to access and print greet function from the above object code?
A)const gimli =
{ name: "Gimli",
race: "dwarf",
weapon: "axe",
greet: function() { return `Hi, my name is ${this.name}!`; }}
console.log (gimli.greet());
Q10.Consider below as an example of constructor function where we want name and level to be
referred to a function itself, is below example correct or not? Please explain?

function Hero(name, level)
{
name = name;
level = level;}

A)The example given above is not the correct way to refer a function.
We have to use the this keyword as below
function Hero(name, level)
{
this.name = name;
this.level = level;}
console.log(Hero.level);
