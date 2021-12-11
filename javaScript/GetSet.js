const Car = function (make, speed) {
    this.make = make
    this.speed = speed
}

Car.prototype.accel = function () {
    return this.speed += 50
}
Car.prototype.brake = function () {
    return this.speed -= 50

}

let Jag = new Car('Belgium', 60)
console.log(Jag.accel())
console.log(Jag.brake())



// getter and setters ---->

const account = {
    name: 'Prathamesh',
    Number: [56, 66, 85, 4, 12, 14],

    get addition() {
        return this.Number.reduce(function (acc, el) {
            return acc + el
        }, 0)
    },

    set Transaction(amount) {
        return this.Number.push(amount)
    },

    transaction(amnt) {
        return this.Number.push(amnt)
    }
}
account.Transaction = 65
console.log(account.Number)
account.transaction(33)
console.log(account.Number)




const obj = {
    all: [689, 21, 63],
    get select() {
        if (this.all.length == 3) {
            return undefined;
        }
        return this.all.length - 1;
    }
}
console.log(obj.select)


const PersonProto = {
    cal() {
        console.log(2021-this.by)
    },
    init(First,by){
        this.First=First
        this.by=by
    }
}

let l=Object.create(PersonProto)
console.log(l)
l.init('psa',2002)
l.cal()
