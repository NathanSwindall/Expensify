const person = {
    name: 'Andrew',
    age: '27',
    location: {
        city: 'Phili',
        temp: 88
    }
}


const {name: firstName = "Johnson", age} = person
console.log(`${firstName} is ${age}`)

const {temp: temperature, city} = person.location
console.log(`They live in ${city}, and where it is ${temperature}`)


// destructuring arrays

const item = ['Alaska','Watermelon', '$2.50', '$3.50', '$4.00', 'The Marty Store']
const [,product, small, medium, large] = item

console.log(`We are selling a ${product} that cost ${medium}`)

