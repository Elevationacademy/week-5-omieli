let p = $.get('/randomWord') //notice that we don't use a callback in this case! We can, but this is what we're avoiding.
console.log(p)


console.log(p.state())

$.get('/randomWord').then(function (word) {
    console.log(word)
    console.log(p.state())
})


$.get('/sentiment/Ploy')
    .then(function (response) {
        console.log(response)
    })

//What we're seeing here is a GET request to /randomWord, then, inside
//of the then of this callback we are returning the promise of the next request.
//In the second then's callback we have the value we're
//looking for: the synonyms for the random word we got from the first GET request.
// $.get('/randomWord')
//     .then(function (word) {
//         return $.get(`/synonyms/${word}`)
//     })
//     .catch(function (error) { console.log(error) })
//     .then(function (synonyms) {
//         console.log(synonyms)
//     })
//     .catch(function (error) { console.log(error) })


// Make a request (async code) to /randomWord
// Once we resolve this request, we have access to the word we need inside the then's callback
// We store both the /synonyms and /sentiment promises inside of variables
// We use Promise.all([...]) to tell JS to resolve all the promises in the array before executing the next then
// Inside the second then, we get results which is an array of all our resolved values
// $.get('/randomWord')
//     .then(function (word) {
//         let synonymsPromise = $.get(`/synonyms/${word}`)
//         let sentimentPromise = $.get(`/sentiment/${word}`)
//         Promise.all([synonymsPromise, sentimentPromise])
//             .then(function (results) {
//                 console.log(results)
//             })
//     })

const printResults = function (word, synonyms, sentiment) {
    console.log(`
        The word ${word} has a 
        ${sentiment === 1 ? "Positive" : sentiment === -1 ? "Negative" : "Neutral"} sentiment,
        its synonyms are: ${synonyms}`
    )
}

$.get('/randomWord')
    .then(function (word) {
        let synonymsPromise = $.get(`/synonyms/${word}`)
        let sentimentPromise = $.get(`/sentiment/${word}`)
        Promise.all([synonymsPromise, sentimentPromise])
            .then(function (results) {
                printResults(word, results[0], results[1])
            })
    })
//The principles of promises are simple: instead of using nested callbacks,
// we can used chained promises to resolve series of async code - or use Promise.all to resolve several promises together.

/**
 * Promises are useful mainly in two situations:



When we have a series of async calls whose results depend on one another (as above)
To detach our async calls (mostly GET requests) from callbacks (example below)


Consider the following code:
class APIManager {
    fetch() {
        return $.get('/data')
    }
}

class Renderer {
    render(dataPromise) {
        dataPromise.then(function (data) {
            $("#body").append(`<div>${data}</div>`)
        })
    }
}

const apiManager = new APIManager()
const renderer = new Renderer()

let initialDataPromise = apiManager.fetch()
renderer.render(initialDataPromise) //initial page load

$(".some-thing").on("click", function () {
    let newDataPromise = apiManager.fetch()
    renderer.render(newDataPromise)
})


The upside to this is that we don't have to use a callback, so we can pass our promise around like a normal object.



Specifically, we can make the API request wherever, then store the promise of that data in a variable, and resolve it elsewhere.



In this case, we're resolving our promise inside of render - which is the downside.



The "bad" thing about this is that now our renderer isn't a dumb, simple, plain, stupid "renderer" anymore - it actually has to do some logic.
 */