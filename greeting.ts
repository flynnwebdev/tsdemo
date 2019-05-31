interface Person {
    name: string
    age: number
}

const greeting = (person: Person) => {
    console.log(`Good day ${person.name}, you are ${person.age} years old.`)
}

let foo: number = 2

greeting({ name: 'Matt', age: 46 })

let isAwesome: boolean = true


let decimalNumber: number = 42
let binaryNumber: number = 0b1010101
let octalNumber: number = 0o755
let hexNumber: number = 0x2a

console.log(hexNumber)

let myPetFamily: string[] = ['rocket', 'fluffy', 'harry']

// tuple
let tuple: [string, number, boolean]
tuple = ['chair', 20, true]
// tuple = [5, 20, true]

enum Sizes {
    Small,
    Medium,
    Large
}

console.log(Sizes.Medium)

let stocklevel = []
stocklevel[Sizes.Medium]  = 20

const myfunc = (x): number | undefined => {
    console.log('foo')
    if (x) {
        return 123
    }
}

let x = myfunc(false)
console.log(x)
