

// calculating the current datetime (minutes since midnight)

const d = new Date();
let minutes = d.getMinutes();
let hours = d.getHours();

total_minutes = hours * 60 + minutes
console.log(total_minutes)

// console.log(total_minutes)


// getting all the tr tags (that will contain the ticket data in the columns)

const trs = $$('tr')


 // moving through tickets 

for (let i = 1; i < trs.length; i++) {
    

// getting the values for channel, created and updated datetime

var created = trs[i].childNodes[5].childNodes[0].childNodes[0].childNodes[0].childNodes[0].textContent
var updated = trs[i].childNodes[6].childNodes[0].childNodes[0].childNodes[0]
var channel = trs[i].childNodes[4].childNodes[0].childNodes[0].childNodes[0].childNodes[0].textContent

// setting the created datetime as updated if the ticket was never replied to

if (updated === undefined) {
    updated = created    
}
else {
    updated = trs[i].childNodes[6].childNodes[0].childNodes[0].childNodes[0].childNodes[0].textContent
}
    
 // calculation of delta time between the current datetime and time updated

 // converting the updated datetime to minutes (elapsed since midnight)
var updated_time = updated.slice(-8,)
var ampm = updated_time.slice(-2,)
var updated_minutes = Number(updated_time.slice(3,5))
var updated_hours = updated_time.slice(0,2)
var updated_total = updated_hours * 60 + updated_minutes

    if ( ampm === 'PM') {
    updated_total += 12*60    
}
        if ( ampm === 'AM' && updated_hours == '12') {
    updated_total -= 12*60    
}

// console.log(updated_total, ' total number of minutes elapsed minutes');

 console.log(total_minutes - updated_total);

// logic for comparing times and adding colouring depending on the time elapsed
if (total_minutes - updated_total > 10) {
        trs[i].childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[0].style.backgroundColor = "red"}
    else {
            trs[i].childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[0].style.backgroundColor = "green";

}
}