// let result = new Promise((resolve,reject)=>{
//     let r=false;
//     // if(r){
//     //     resolve("operation completed successfully");
//     // }
//     if (r){
//         setTimeout(() => {

//             resolve("pending");

//         }, 2000);
//     }
//     else{
//         reject("there is some error");
//     }
// });
// console.log(result);


function login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let login = true;
            if (login) {
                resolve("done");
                console.log("Login successfull");
            } else {
                reject("failed");
            }
        }, 2000);
    });
}

function ticketsbook() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let tickets_avail = true;
            if (tickets_avail) {
                resolve("done");
                console.log("Tickets booked successfully");
            }
            else {
                reject("failed");
            }
        }, 2000);
    });
}

function payments() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let payment = true;
            if (payment) {
                resolve("done")
                console.log("payment done successfully");
            }
            else {
                reject("failed");
            }
        }, 2000);
    });
}
function ticketgen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let ticketgen = true;
            if (ticketgen) {
                resolve("done")
                console.log("tickets successfully booked");
            }
            else {
                reject("failed");
            }
        }, 2000);
    });
}
function notify() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let notification = true;
            if (notification) {
                resolve("done")
                console.log("notification send successfully");
            }
            else {
                reject("failed");
            }
        }, 2000);
    });
}
function tracking() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let track = true;
            if (track) {
                resolve("done")
                console.log("tracking");
            }
            else {
                reject("failed");
            }
        }, 2000);
    });
}

////Promises
// login();
// then(()=>{ticketsbook()});
// then(()=>{payments()});
// then(()=>{ticketgen()});
// then(()=>{notify()});
// then(()=>{tracking()});

// catch(()=>)


//async and await 
async function calling() {

    try{
        await login();
        await ticketsbook();
        await payments();
        await ticketgen();
        await notify();
        await tracking()

    }
    catch(error){
        console.log(error);
        
    }


}