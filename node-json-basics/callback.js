//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!
timeout = 2000
const add = (num1, num2, callback) => {
    setTimeout(() => {
        sum = num1 + num2
        callback(sum)
    }, timeout);
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})