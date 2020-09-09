$.get('/randomWord')
	    .then(function(word) {
	        let book = $.get(`https://www.googleapis.com/books/v1/volumes?q=title:${word}`)
	        let gif = $.get(`http://api.giphy.com/v1/gifs/search?q=${word}&api_key=HzsSoGIhud1VLofBt7XW6lzhrEKNOy6P`)
	        Promise.all([book, gif]).then(function(found) {
	                $("body").append(`<div>${found[0].items[0].volumeInfo.title}</div>`)
	                $("body").append(`<iframe src="${found[1].data[0].embed_url}">`)
	            })
        })
        
