Template.googleCities.rendered = ->    
	countryRestrict = undefined
	countryRestrict = country: "br"
	
	window.onload = ->
	  autocomplete = new google.maps.places.Autocomplete((document.getElementById("autocomplete-cities")),
	    types: ['(cities)']
	    componentRestrictions: countryRestrict
	  )
	  return
	return

#function loadScript() {
#  var script = document.createElement('script');
#  script.type = 'text/javascript';
#  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&' +
#      'callback=initialize';
#  document.body.appendChild(script);
#}

#window.onload = loadScript;


#var countryRestrict = { 'country': 'us' };