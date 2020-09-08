$.get(`/randomWord`).then(function (word) {
    return $.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`)
}).then(function (found) {
  console.log(found)  
})

