// class Person{
//     constructor(name, age){
//         this.name = name
//         this.age = age
//     }
//     speak(){
//         console.log('hi')
//     }
// }

// const person1 = new Person('Tom', 23)
// const person2 = new Person('Maria', 53)


class Fish{
    constructor(filling){
        this.filling = filling
    }
    cooking(){
        console.log(`${this.filling} 붕어빵`)
    }
}

const fish1 = new Fish('팥')
fish1.cooking()

const fish2 = new Fish('크림')
fish2.cooking()

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    static job = 'programmer'
    static printJob(){
        console.log(Person.job)
    }
    speak(){
        console.log(this.name, this.age, Person.job)
    }
}

const person = new Person('b',44)
person.speak()

class Shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw(){
        console.log(`drawing ${this.color} color`)
    }
    getArea(){
        console.log(this.width * this.height)
    }
}

class Rectangle extends Shape {
}

const rec1 = new Rectangle(30,30,'magenta')
rec1.draw()

class Triangle extends Shape{
    getArea(){
        console.log((this.width * this.height)/2)
    }
    draw(){
        super.draw() // 부모의 메소드 기능을 그대로 가져온다
        console.log('►')
    }
}

const tri1 = new Triangle(10,10,'gray')
tri1.draw()
tri1.getArea()

// const shape1 = new Shape(40,50,'black')
// shape1.draw()
// shape1.getArea()