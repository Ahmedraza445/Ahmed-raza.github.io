//Q1) Suppose You have an array of object
// var itemsArray = [
// {name:”juice”,price:”50”, quantity:”3”},
// {name:”cookie”,price:”30”, quantity:”9”},
// {name:”shirt”,price:”880”, quantity:”1”},
// {name:”pen”,price:”100”, quantity:”2”}];
// Calculate total price of each item and all items;

//1
var itemsArray =[
    {name:'juice',price:50, quantity:3},
    {name:'cook',price:30, quantity:9},
    {name:'shirt',price:88, quantity:1},
    {name:'pens',price:10, quantity:2}
];
var allTotal=0;
for(var key in itemsArray[0]){
   document.write(key+" ");
}
document.write("total"+"<br>")

for (let i = 0; i < itemsArray.length; i++) {
    var totalAmount=itemsArray[i].price*itemsArray[i].quantity
    document.write(itemsArray[i].name +"&nbsp&nbsp&nbsp&nbsp"+itemsArray[i].price +"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+itemsArray[i].quantity+ "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" +totalAmount+"<br>");
    
    allTotal += totalAmount;
}
document.write("<br><br>"+"Total of all items: ",allTotal)

//Q2)Create an object with properties name, email, password, age,gender, city, country.
//Check if age and country properties exist in object or not.
//Also check firstName and lastName properties in object.

//2
var obj = {
    name:"Ahmed Raza",
    email:"ahmedrazay.123@gmail.com",
    password:"Forgot Password",
    age:"20",
    gender:"Male",
    city:"Karachi",
    country:"Pakistan"
}
document.write("Obj.age is esisting: " + (Boolean(obj.age)) + "<br>" + "Obj.country is existing: " + (Boolean(obj.country))+ "<br>" + "Obj.firstname is existing: " +(Boolean(obj.firstName)) + "<br>" + "Obj.lastName is existing: "+ (Boolean(obj.lastName)));

//Q3)Create a constructor function with some properties. Now create multiple records using the constructor.

//3
function Student(firstName,lastName,rollno,standard,section){
    this.name=firstName+" "+lastName;
    this.rollno=rollno;
    this.standard=standard;
    this.section=section

}
var stud1 = new Student("Ahmed","Raza",23485,"VII","A"); 
var stud2 = new Student("Hamza","Khan",20450,"VI","B"); 
var stud3 = new Student("Ali","Ansari",20305,"IX","C"); 
console.log(stud1,stud2,stud3)