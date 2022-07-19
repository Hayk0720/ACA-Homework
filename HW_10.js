class Author{
    constructor(name,email,gender){
        this.name = name
        this.email = email
        this.gender = gender
    }
    get name() {
        return this._name;
    } 
    set name(v){
        this._name = v
    }
     get email() {
        return this._email;
    } 
    set email(v){
        this._email = v
    }
     get gender() {
        return this._gender;
    } 
    set gender(v){
        this._gender = v
    }

    toString(){
        return `Author name is ${this.name}, email is ${this.email}, gender is ${this.gender}`;
        
    }
}
class Book{
    constructor(title,price,quantity){
        this.title = title;
        this.author = author;
        this.price = price;
        this.quantity = quantity;
    }

    get title() {
        return this._title;
    } 
    set title(v){
        this._title = v
    }
     get price() {
        return this._price;
    } 
    set price(v){
        this._price = v
    }
     get quantity() {
        return this._quantity;
    } 
    set quantity(v){
        this._quantity = v
    }
    getProfit(){
                return `Your profit is ${this.quantity * this.price}`
    }
    
    toString(){
        return `Title is ${this.title},Author name is ${author.name}, price is ${this.price}, quantity - ${this.quantity}`;
        
    }
}
class Account{
    
    constructor(name,balance,amount = 0){
        this._id =Math.round( Math.random()*100);
        this.name = name
        this.balance = balance
        this.amount = amount
        
    }
        
    get id (){
        return this._id;
    }
   
    
    get name() {
        return this._name;
    } 
    set name(v){
        this._name = v
    }
     get balance() {
        return this._balance;
    } 
    set balance(v){
        this._balance = v
    }
    
    credit(amount){
        this.balance = this.amount+this.balance
        return this.balance;
    }
    debit(amount){
        if(this.amount<this.balance){
                    this.balance =this.balance - this.amount

            return this.balance
        } else{
            return "Amount exceeded balance";
        }
    }
    transferTo(acc1,amount){
        if(this.amount <= this.balance){
            acc1.balance += this.amount;
            this.balance = this.balance-this.amount
        }else{
            return "Amount exceeded balance"
        }
    }
     

    toString(){
        return `ID - ${this._id} / Author name is ${this.name}, balance is ${this.balance} /`;
        
    }
}
3.
class Person{
    constructor(firstName,lastName,gender,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
    }
    get firstName(){
        return this._firstName;
    }
    set firstName(v){
        this._firstName = v;
    } 
     get lastName(){
        return this._lastName;
    }
    set lastName(v){
        this._lastName = v;
    } 
     get gender(){
        return this._gender;
    }
    set gender(v){
        this._gender = v;
    } 
     get age(){
        return this._age;
    }
    set age(v){
        this._age = v;
    }

    toString(){
        return `Person name is ${this.firstName} ${this.lastName}, gender  ${this.gender}, age is ${this.age}`;
        
    }
}

3.

class Person{
    constructor({firstName,lastName,gender,age}){
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
    }
    get firstName(){
        return this._firstName;
    }
    set firstName(v){
        this._firstName = v;
    } 
     get lastName(){
        return this._lastName;
    }
    set lastName(v){
        this._lastName = v;
    } 
     get gender(){
        return this._gender;
    }
    set gender(v){
        this._gender = v;
    } 
     get age(){
        return this._age;
    }
    set age(v){
        this._age = v;
    }

    toString(){
        return `Person name is ${this.firstName} ${this.lastName}, gender  ${this.gender}, age is ${this.age}`;
        
    }
}
class Student extends Person{
    constructor(studentData){
        const {programs,year,fee, ...rest} = studentData
        super(rest);
        this.programs = programs;
        this.year = year;
        this.fee = fee;
    }
    get year(){
        return this._year;
    }
    set year(v){
        this._year = v;
    } 
     get fee(){
        return this._fee;
    }
    set fee(v){
        this._fee = v;
    }
  
    
    data = {
    hayeren:0,
    ruseren:0,
    angleren:0,
    }

    passExam(program,grade){
        if(this.programs.program){
            this.data.program = grade;
        }
    }
     toString(){
        return `Student year is ${this.year} , fee is  ${this.fee}`;
        
    }
    
}
class Teacher extends Person{
    constructor(teacherData){
        const {program,pay, ...rest} = teacherData
        super(rest);
        this.program = program;
        this.pay = pay;
    }
    get program(){
        return this._program;
    }
    set program(v){
        this._program = v;
    } 
     get pay(){
        return this._pay;
    }
    set pay(v){
        this._pay = v;
    }
     toString(){
        return `Teacher program is ${this.program} , pay is  ${this.pay}`;
        
    }
}


