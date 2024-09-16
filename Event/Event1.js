const Logger = require('./Event');
const logObj = new Logger();

logObj.on("message", (name, time) => {
    console.log(name);
    
    // Parse the time string (e.g., "6 AM", "3 PM")
    const [hourStr, period] = time.split(' ');
    let hour = parseInt(hourStr);

    // Convert "PM" times to 24-hour format  if  Time  3 to convert into the Railway time 3+12=15
    if (period === 'PM' && hour !== 12) {
        hour += 12;
    }
    if (period === 'AM' && hour === 12) {   //if time is 12 am then it is midnight so at might 00:00;
        hour = 0; // Midnight case
    }

    // Determine the greeting based on the 24-hour time
    if (hour >= 6 && hour < 12) {
        console.log("Good Morning");
    } else if (hour >= 12 && hour < 17) {
        console.log("Good Afternoon");
    } else if (hour >= 17 && hour < 21) {
        console.log("Good Evening");
    } else {
        console.log("Good Night");
    }
});

logObj.log();
