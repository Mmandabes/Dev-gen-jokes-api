// Create 4 variables and assign them to their respective elements: setupDiv, punchlineDiv, punchlineBtn, newJokeBtn


const setupDiv = document.getElementById('setup');
const punchlineDiv = document.getElementById('punchline');
const punchlineBtn = document.getElementById('punchlineBtn');
const newJokeBtn = document.getElementById('newJokeBtn');
let punchline

// Add an event listener for the punchline button. When clicked it should call a function called getPunchline
/* Create the getPunchline function. This function should: 
    Insert the punchline into the punchlineDiv
    Add the class "bubble" to the punchlineDiv
    Toggle the "hidden" class on both buttons.
*/

punchlineBtn.addEventListener('click', getPunchLine)

// Add an event listener for the new joke button. When clicked it should call the getJoke function 

newJokeBtn.addEventListener('click', getJoke)

function getPunchLine() {
    punchlineDiv.innerHTML = punchline
    punchlineDiv.classList.add('bubble')
    punchlineBtn.classList.toggle('hidden')
    newJokeBtn.classList.toggle('hidden')
}

// Setup an async function called getJoke
// Create a variable called jokePromise that fetches a joke from https://official-joke-api.appspot.com/jokes/programming/random
// create a variable called joke that consumes the json data

async function getJoke() {
    const jokePromise = await fetch('https://official-joke-api.appspot.com/jokes/programming/random')

    if(jokePromise.ok){
        const joke = await jokePromise.json();
        // Get the setup from the joke and insert it into the setupDiv element
        setupDiv.innerHTML = joke[0].setup
    // Create a global variable called punchline which will store the current punchline and will be updated with each new joke
    // Assign the current jokes punchline to the punchline variable.
        punchline = joke[0].punchline

        // Clear the punchline div and remove the "bubble" class from the punchline div
        punchlineDiv.innerHTML = ''
        punchlineDiv.classList.remove('bubble')

        punchlineBtn.classList.toggle('hidden')
        newJokeBtn.classList.toggle('hidden')
    } else{

    }

}
getJoke()

// const userApi = 'https://randomuser.me/api/'
    
// async function getUser() {
//     const callApi = await fetch(userApi)
//     const user = await callApi.json()
//     const firstUser = user.results[0].name.first
//     const callApi2 = await fetch(userApi)
//     const user2 = await callApi2.json()
//     const secondUser = user2.results[0].name.first
//     console.log(`${firstUser} and ${secondUser} are friends`)
// }
// getUser()

const startTransaction = ()=>{
    return new Promise((res)=>{
       setTimeout(()=>{
             res(true)
       },3000)
 })       
 } 
 const initPayment = ()=>{
    return new Promise((res)=>{
       setTimeout(()=>{
             res(true)
       },2000)
 })
 }
 const launchVerification = ()=>{
     return new Promise((res) => {
       setTimeout(()=>{
             res(true)
       },2000)
 })
 }
 
 (async function() {
     try{
         const resolve = await Promise.all([startTransaction, initPayment, launchVerification]).then((values) => {
               console.log(values)
         })
         
         
     }catch(err){
         console.log(err)
     }
 })();



 const getPost = async () =>{
    // const blogFetch = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    // const blogJson = await blogFetch.json()
    // const post = document.createElement('h3')
    // post.innerHTML = `<h3>${blogJson.title}</h3>
    // <p>${blogJson.body}</p>`
    document.body.appendChild(post)
}
getPost()

