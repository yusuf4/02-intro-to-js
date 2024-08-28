// #
//
// ### Создать свой *Ресторан*
let restaurant = {
    name: "Some name",
    address: "Tajikistan Dushanbe",
    phone: 902653131,
    location: "Some where"
};

console.log(restaurant);
restaurant.email = "test@example.com";
console.log(restaurant.email);

restaurant.openHour="from 08:00 to 23:30"

console.log(restaurant.openHour)

restaurant.openHour= "from 07:00 to 23:30"
console.log(restaurant.location);
delete restaurant.location;

console.log(restaurant);

// #
//
// ### Работа с объектами

let vehicle = {};

vehicle.brandName = "Toyota";
vehicle.model= "Landcruiser 200";

vehicle.model= "Landcruiser  Prado 150"

delete vehicle.model;

// Работа с перебором свойств в объектах

let salaries = {
    Aroo: 100,
    Dalida: 160,
    Samat: 130
}
let sum=0;
for (key in salaries){
     sum+=salaries[key];
    console.log(salaries[key])
    //console.log(sum)
}

console.log(sum);