
//TOP ARTISTS OF ALL TIME
function getTopArtistsLong(access_token, template, newTemplate ) {
	var data  = {};
	$.ajax({
		url: 'https://api.spotify.com/v1/me/top/artists?time_range=long_term&limit=10&offset=0',
		headers: {
		  'Authorization': 'Bearer ' + access_token
		},
		async: false,
		success: function(response) {
			console.log("PRINTING response top artists long term");
			console.log(response);
			$(newTemplate).html(template(response));
			data = response;
//			sessionStorage.setItem("topArtistsLong", JSON.stringify(response));
		}
	});
	return data;
}

//TOP ARTISTS FROM THE LAST 6 MONTHS
function getTopArtistsMed(access_token, template, newTemplate ) {
	var data  = {};
	$.ajax({
		url: 'https://api.spotify.com/v1/me/top/artists?time_range=medium_term&limit=10&offset=0',
		headers: {
		  'Authorization': 'Bearer ' + access_token
		},
		async: false,
		success: function(response) {
			console.log("PRINTING response top artists med term");
			console.log(response);
			$(newTemplate).html(template(response));
			data = response;
//			sessionStorage.setItem("topArtistsLong", JSON.stringify(response));
		}
	});
	return data;
}

function getTopArtistsShort(access_token, template, newTemplate ) {
	var data  = {};
	$.ajax({
		url: 'https://api.spotify.com/v1/me/top/artists?time_range=short_term&limit=10&offset=0',
		headers: {
		  'Authorization': 'Bearer ' + access_token
		},
		async: false,
		success: function(response) {
			console.log("PRINTING response top artists short term");
			console.log(response);
			$(newTemplate).html(template(response));
			data = response;
//			sessionStorage.setItem("topArtistsLong", JSON.stringify(response));
		}
	});
	return data;
}





//TOP TRACKS OF ALL TIME
function getTopTracksLong(access_token, template, newTemplate) {
	var data = {};
   $.ajax({
	   url: 'https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=10&offset=0',
	   headers: {
		   'Authorization': 'Bearer ' + access_token
	   },
	   async: false,
	   success: function(response) {
			console.log("PRINTING response from top tracks long");
			console.log(response);
		    
		    var trackID = "";
		    var pop = 0;
			for(var i = 0; i < response.items.length; i++) {
				trackID += response.items[i].id + ',';
				pop += response.items[i].popularity;
			}
		   	pop = pop / response.items.length;
		    pop = +pop.toFixed(1);
		   
			var data2 = getSeveralFeatures(access_token, trackID);
			var danceability = 0;
			var valence = 0;
			for(var i = 0; i < data2.audio_features.length; i++) {
				danceability += data2.audio_features[i].danceability;
				valence += data2.audio_features[i].valence;
			}
			danceability = danceability / data2.audio_features.length;
			danceability *= 100;
			valence = valence / data2.audio_features.length;
			valence *= 100;
			
			danceability = +danceability.toFixed(1);
			valence = +valence.toFixed(1);
		   
			data = response;
			data["danceability"] = danceability;
			data["valence"] = valence;
		    data["avgpop"] = pop;
		   
			$(newTemplate).html(template(response));
		    
//		    sessionStorage.setItem("topTracksLong", JSON.stringify(response));
	   }
   });
	return data; 
}

//TOP TRACKS FROM THE LAST 6 MONTHS
function getTopTracksMed(access_token, template, newTemplate) {
	var data = {};
	$.ajax({
		url: 'https://api.spotify.com/v1/me/top/tracks?time_range=medium_term&limit=10&offset=0',
		headers: {
		  'Authorization': 'Bearer ' + access_token
		},
		async: false,
		success: function(response) {
		  	console.log("PRINTING response from top tracks med");
		  	console.log(response);
			$(newTemplate).html(template(response));
			
			
			var trackID = "";
		    var pop = 0;
			for(var i = 0; i < response.items.length; i++) {
				trackID += response.items[i].id + ',';
				pop += response.items[i].popularity;
			}
		   	pop = pop / response.items.length;
		    pop = +pop.toFixed(1);
		   
			var data2 = getSeveralFeatures(access_token, trackID);
			var danceability = 0;
			var valence = 0;
			for(var i = 0; i < data2.audio_features.length; i++) {
				danceability += data2.audio_features[i].danceability;
				valence += data2.audio_features[i].valence;
			}
			danceability = danceability / data2.audio_features.length;
			danceability *= 100;
			valence = valence / data2.audio_features.length;
			valence *= 100;
			
			danceability = +danceability.toFixed(1);
			valence = +valence.toFixed(1);
		   
			data = response;
			data["danceability"] = danceability;
			data["valence"] = valence;
		    data["avgpop"] = pop;
	
			$(newTemplate).html(template(response));
//		    sessionStorage.setItem("topTracksMed", JSON.stringify(response));
		}
	});
	return data;
}

//TOP TRACKS FROM THE LAST 4 WEEKS
function getTopTracksShort(access_token, template, newTemplate) {
	var data = {};
	$.ajax({
		url: 'https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=10&offset=0',
		headers: {
		  'Authorization': 'Bearer ' + access_token
		},
		async: false, 
		success: function(response) {
		 	console.log("PRINTING response from top tracks short");
		  	console.log(response);
			
			
			var trackID = "";
		    var pop = 0;
			for(var i = 0; i < response.items.length; i++) {
				trackID += response.items[i].id + ',';
				pop += response.items[i].popularity;
			}
		   	pop = pop / response.items.length;
		    pop = +pop.toFixed(1);
		   
			var data2 = getSeveralFeatures(access_token, trackID);
			var danceability = 0;
			var valence = 0;
			for(var i = 0; i < data2.audio_features.length; i++) {
				danceability += data2.audio_features[i].danceability;
				valence += data2.audio_features[i].valence;
			}
			danceability = danceability / data2.audio_features.length;
			danceability *= 100;
			valence = valence / data2.audio_features.length;
			valence *= 100;
			
			danceability = +danceability.toFixed(1);
			valence = +valence.toFixed(1);
		   
			data = response;
			data["danceability"] = danceability;
			data["valence"] = valence;
		    data["avgpop"] = pop;
			
			
			$(newTemplate).html(template(response));

//		    sessionStorage.setItem("topTracksShort", JSON.stringify(response));
		}
	});
	return data;
}


//GET AUDIO FEATURES FOR SEVERAL TRACKS
function getSeveralFeatures(access_token, trackID) {
	var data = {};
	$.ajax({
		url: 'https://api.spotify.com/v1/audio-features?ids=' + trackID,
		headers: {
		  'Authorization': 'Bearer ' + access_token
		},
		async: false, 
		success: function(response) {
		 	console.log("PRINTING response from several audio features");
		  	console.log(response);
			data = response;
//		    sessionStorage.setItem("topTracksShort", JSON.stringify(response));
		}
	});
	return data;
}



//GET USERS LAST 50 SAVED SONGS
function getSavedSongs(access_token) {
	$.ajax({
		url: 'https://api.spotify.com/v1/me/tracks?limit=50&offset=0',
		headers: {
		  'Authorization': 'Bearer ' + access_token
		},
		success: function(response) {
		  console.log("PRINTING response from 50 saved songs");
		  console.log(response);
		  for(var i = 0; i < 10; i++) {
			  console.log(response.items[i].name);	  
		  }
		}
	});
}


//GET A USER'S RECENTLY PLAYED TRACKS
function getRecentTracks(access_token, after) {
	$.ajax({
		url: 'https://api.spotify.com/v1/me/player/recently-played?type=track&after=' + after + '&limit=10',
		headers: {
			'Authorization': 'Bearer ' + access_token
		},
		success: function(response) {
		  console.log("PRINTING response from recently played tracks");
		  console.log(response);
			
			
			var trackID = "";
			var pop = 0;
			for(var i = 0; i < response.items.length; i++) {
				trackID += response.items[i].track.id + ',';
				pop += response.items[i].track.popularity;
			}
			pop = pop / response.items.length;
			pop = +pop.toFixed(1);

			var data2 = getSeveralFeatures(access_token, trackID);
			var danceability = 0;
			var valence = 0;
			for(var i = 0; i < data2.audio_features.length; i++) {
				danceability += data2.audio_features[i].danceability;
				valence += data2.audio_features[i].valence;
			}
			danceability = danceability / data2.audio_features.length;
			danceability *= 100;
			valence = valence / data2.audio_features.length;
			valence *= 100;

			danceability = +danceability.toFixed(1);
			valence = +valence.toFixed(1);

			data = response;
			data["danceability"] = danceability;
			data["valence"] = valence;
			data["avgpop"] = pop;
	 	
		}
	});
}

// function getTopArtistsLong(access_token) {
// 	var avgPop = 0;
// 	$.ajax({
// 		url: 'https://api.spotify.com/v1/me/top/artists?time_range=long_term&limit=10&offset=0',
// 		headers: {
// 		  'Authorization': 'Bearer ' + access_token
// 		},
// 		success: function(response) {
// 		  console.log("PRINTING response top artists");
// 		  console.log(response);
// 		  var top_tracks = "";
// 		  for(var i = 0; i < 10; i++) {
// 			  console.log(response.items[i].popularity);
// 			  avgPop += response.items[i].popularity;
// 		  }
// 		  avgPop = avgPop / response.limit;
// 		  var popResponse = {avgpop: avgPop};
// 		  $("#top-artists-long").html(artistTemplate(response));
// 		  $("#average-pop").html(popTemplate(popResponse));
// 		}
// 	});
// }

			




// var access_token = sessionStorage.getItem("access_token");
// var playlist = "";
// $("#playlist").on('submit', function() {
// 	playlist = $("#playlist".val());
// 				  });
// console.log(playlist);


// var userPlaylists = {};
// function getPlaylists(access_token) {
// 	$.ajax({
// 		url: 'https://api.spotify.com/v1/me/playlists?limit=50&offset=0',
// 		headers: {
// 		  'Authorization': 'Bearer ' + access_token
// 		},
// 		success: responseFunction 
// 	});
// }		

// function responseFunction(response) {
// 		console.log("PRINTING response from Current User's Playlists")
// 		console.log(response);
// 		for(var i = 0; i < response.items.length; i++) {
// 			console.log(response.items[i].name);
// 			userPlaylists[response.items[i].name] = response.items[i].id;
// 		}
// 		console.log(userPlaylists);
// }


// getPlaylists(access_token);


