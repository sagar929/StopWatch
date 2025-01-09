<<<<<<< HEAD

// const clock =  document.querySelector(".clock")

// let sec = 0;
// let min = 0;
// let hr = 0;

// let interval;
// let isclicked = false;

// // it will start the count
// const startwatch = () =>{  

//    interval = setInterval(()=>{
//     // if(sec <= 59){
//     //     sec++;

//     // }
//     // else if (sec>59){
//     //     min++;
//     //     sec =0;
//     // }
//     // else if(min<=59){
//     //     min++;

//     // }
//     // else if(min>59){
//     //     hr++;
//     //     min = 0;
//     // }
//     if(isclicked) return;
//     isclicked = true;

//     if (sec < 59) {
//         sec++;
//     } 
    
//     else {
//         sec = 0;

//         min++;

//         if(min>59){
//             hr++;
//             min = 0;
//         }
//         // if (min < 59) {
//         //     min++;
//         // } 
//         // else {
//         //     min = 0;
//         //     hr++;
//         //      }   
//         }   
    

//     const seconds = String(sec).padStart(2,"0");
//     const minutes = String(min).padStart(2,"0");
//     const hours = String(hr).padStart(2,"0");

//     console.log(`${hours} :${minutes} :${seconds}`)
        
//      clock.innerHTML = `${hours} :${minutes} :${seconds}`; 
//     },1000);
// };

// // clear interval will stop the interval
// const stopwatch = () => {
    
//     clearInterval(interval);
//     isclicked = false;
// };

const clock =  document.querySelector(".clock");

let sec = 0;
let min = 0;
let hr = 0;

let interval;
let isclicked = false;

// Start the stopwatch function
const startwatch = () => {  
    if (isclicked) return; 
    isclicked = true;

    interval = setInterval(() => {
        if (sec < 59) {
            sec++;
        } else {
            sec = 0;
            min++;
            if (min > 59) {
                hr++;
                min = 0;
            }
        }

        const seconds = String(sec).padStart(2, "0");
        const minutes = String(min).padStart(2, "0");
        const hours = String(hr).padStart(2, "0");

        console.log(`${hours}:${minutes}:${seconds}`);
        clock.innerHTML = `${hours}:${minutes}:${seconds}`; 
    }, 1000);
};

// Stop the stopwatch function
const stopwatch = () => {
    clearInterval(interval);
    isclicked = false; 
};
=======

// const clock =  document.querySelector(".clock")

// let sec = 0;
// let min = 0;
// let hr = 0;

// let interval;
// let isclicked = false;

// // it will start the count
// const startwatch = () =>{  

//    interval = setInterval(()=>{
//     // if(sec <= 59){
//     //     sec++;

//     // }
//     // else if (sec>59){
//     //     min++;
//     //     sec =0;
//     // }
//     // else if(min<=59){
//     //     min++;

//     // }
//     // else if(min>59){
//     //     hr++;
//     //     min = 0;
//     // }
//     if(isclicked) return;
//     isclicked = true;

//     if (sec < 59) {
//         sec++;
//     } 
    
//     else {
//         sec = 0;

//         min++;

//         if(min>59){
//             hr++;
//             min = 0;
//         }
//         // if (min < 59) {
//         //     min++;
//         // } 
//         // else {
//         //     min = 0;
//         //     hr++;
//         //      }   
//         }   
    

//     const seconds = String(sec).padStart(2,"0");
//     const minutes = String(min).padStart(2,"0");
//     const hours = String(hr).padStart(2,"0");

//     console.log(`${hours} :${minutes} :${seconds}`)
        
//      clock.innerHTML = `${hours} :${minutes} :${seconds}`; 
//     },1000);
// };

// // clear interval will stop the interval
// const stopwatch = () => {
    
//     clearInterval(interval);
//     isclicked = false;
// };

const clock =  document.querySelector(".clock");

let sec = 0;
let min = 0;
let hr = 0;

let interval;
let isclicked = false;

// Start the stopwatch function
const startwatch = () => {  
    if (isclicked) return; 
    isclicked = true;

    interval = setInterval(() => {
        if (sec < 59) {
            sec++;
        } else {
            sec = 0;
            min++;
            if (min > 59) {
                hr++;
                min = 0;
            }
        }

        const seconds = String(sec).padStart(2, "0");
        const minutes = String(min).padStart(2, "0");
        const hours = String(hr).padStart(2, "0");

        console.log(`${hours}:${minutes}:${seconds}`);
        clock.innerHTML = `${hours}:${minutes}:${seconds}`; 
    }, 1000);
};

// Stop the stopwatch function
const stopwatch = () => {
    clearInterval(interval);
    isclicked = false; 
};
>>>>>>> dcd437e1c8b7b4d7ee217252c223d18c3c42b78c
