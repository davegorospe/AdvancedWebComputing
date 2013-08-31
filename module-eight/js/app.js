$(function(){
//code starts here
	$('body').append('<h1>Movies</h1>');
	var server = 'http://api.rottentomatoes.com/api/public/v1.0/movies.json'
	
	function searchMovie(movie_name){
		$('.items').fadeOut(1000, function(){ $(this).remove();});

	$.ajax({
		url: server,
		dataType: 'jsonp',
		data: {
			q: movie_name,
			apiKey: 'hcrurhsttexasrgfm2y6yahm'
		},
		success: showMovies
	});
	}

	function showMovies(response){
		console.log('response', response);
		var movies = response.movies;

		$('.items').remove();
		$('body').append('<h4 class="items">showing search results for "'+ input.value+'"</h4>');
		input.value='';
		for (var i = 0; i < movies.length; i ++){
			var movie = movies[i];
			$('body').append('<div	class="items box2"><h3 class="items" hidden="true">'+ movie.title + '</h3><h4 class="items" hidden="true">Release Dates<br>'+ movie.release_dates.dvd + '</h4><img class="items" hidden="true" src="' + movie.posters.thumbnail + '"/></div>');
			$('.items').show('slow', function() {
    // Animation complete.
  });

		}
	}


	var input = document.getElementById('searchBar');
	input.onkeydown = function(event){

		if(event.keyCode===13){
			searchMovie(input.value);
		}

		 $("#submitBut").click(function () {
        searchMovie(input.value);
        }
        );
	}

});