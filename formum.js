const SECONDS_IN_21_YEARS =60*60*24*365*21

var list = [
    {
        id: 1,
        firstname: 'Luke',
        lastname: 'B',
        dob: '1984-05-13',
        bags: 4,
        departing: 'Phoenix, AZ',
        arriving: 'San Diego, CA',
        leaving: '2022-01-11',
        returning: '2022-01-20',
        meal: 'chicken',
    },
    {
        id: 2,
        firstname: 'Dylan',
        lastname: 'D',
        dob: '2005-04-17',
        bags: 5,
        departing: 'Phoenix, AZ',
        arriving: 'San Diego, CA',
        leaving: '2022-01-11',
        returning: '2022-01-20',
        meal: 'fish',
    }
];
    
var firstname, lastname, dob, bags, departing, arriving, leaving, returning, mealtype1, mealtype2, mealtype3;
    
var meal


function submitInfo() {
    console.log("submitInfo")
    
    // get all data from the fields
    
    
    firstname = document.getElementById("firstname").value
    lastname = document.getElementById("lastname").value
    dob = document.getElementById("dob").value
    bags = document.getElementById("bags").value ?? 0
    departing = document.getElementById("departing").value
    arriving = document.getElementById("arriving").value
    leaving = document.getElementById("leaving").value
    returning = document.getElementById("returning").value
    mealtype1 = document.getElementById("mealtype1").checked
    mealtype2 = document.getElementById("mealtype2").checked
    mealtype3 = document.getElementById("mealtype3").checked

    if(mealtype1 == true){
        meal = 'chiken'
    }
    else if(mealtype2 == true){
        meal = 'fish'
    }
    else if(
        mealtype3 == true
    ){
        meal = 'vegetarian'
    }
    else{
        meal = 'Nothing'
    }
    printInfo()
    

    //before saving, make sure date is good
    if(!firstname || !lastname || !departing || !arriving || !leaving||!dob) {
        console.log(`Please fill out all stared(*) fields`)
        return
    }

    let cost = 300 + (20 * bags)
    let drink = secondsBetweenDates(new Date(), new Date(dob)) > SECONDS_IN_21_YEARS
    let tripLength = !returning ?-1:secondsBetweenDates(new Date(returning), new Date(leaving))/60/60/24
    // save data
    const newPassenger = {
        firstname: firstname,
        lastname: lastname,
        dob: dob,
        bags: bags,
        departing: departing,
        arriving: arriving,
        leaving: leaving,
        returning: returning,
        meal: meal,
        
        id: list.length+1,


        cost: cost,
        drink: drink,
        tripLength: tripLength,
    }
   
    
    list.push(newPassenger)

    console.log("List", list)
}
    
function printNames(){
    let stringResult = ''
    for( let person of list){
        stringResult+= `<p>${person.id}: ${person.lastname}, ${person.firstname}</p>`
    } 
    
    
    
    document.getElementById("names").innerHTML = stringResult
}

function printInfo() {
    console.log('\nPrinting info');
    
    console.log("firstname", firstname)
    console.log("lastname", lastname)
    console.log("dob", dob)
    console.log("bags", bags)
    console.log("departing", departing)
    console.log("arriving", arriving)
    console.log("leaving", leaving)
    console.log("returning", returning)
    console.log("mealtype1", mealtype1)
    console.log("mealtype2", mealtype2)
    console.log("mealtype3", mealtype3)
    console.log("meal", meal)
}
    
function secondsBetweenDates(d1, d2) {
    let seconds = (d1.getTime() - d2.getTime()) / 1000
    return seconds
    }