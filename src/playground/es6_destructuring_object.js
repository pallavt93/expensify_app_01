const person = {
    name: 'Pallav',
    age: 26,
    location:{
        city:'Chennai',
        temp:'abhi thik h vaise bhot jada.'
    }
};

const {name : firstname = 'Annonymous',age }  = person;
const {city,temp:temperature} = person.location;

if (city && temperature){
    console.log(`${firstname} is in ${city} has ${temperature}`);
}