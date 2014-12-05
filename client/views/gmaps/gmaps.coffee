Template.googleMaps.rendered = ->
 gmaps.initialize()  unless Session.get("map")
  Deps.autorun ->
    data = undefined
    pages = undefined
    data =
      count: 10785236
      photos: [
        {
          id: "1"
          city: "Passe Fica"
          total: "28"
          latitude: "-30.03634"
          longitude: "-51.221054"
          html: "oi"
        }
        {
          id: "2"
          city: "Porto Carioca"
          total: "57"
          latitude: "-30.037557"
          longitude: "-51.221812"
          html: "oi"
        }
        {
          id: "3"
          city: "Vitraux Club"
          total: "1"
          latitude: "-30.028219"
          longitude: "-51.219064"
          html: "oi"
        }
        {
          id: "4"
          city: "Venezianos"
          total: "2"
          latitude: "-30.042449"
          longitude: "-51.222463"
          html: "oi"
        }
        {
          id: "5"
          city: "Bahamas Bar"
          total: "2"
          latitude: "-30.037215"
          longitude: "-51.222304"
          html: "oi"
        }
        {
          id: "6"
          city: "Café Bonobo"
          total: "2"
          latitude: "-30.030333"
          longitude: "-51.209754"
          html: "oi"
        }
        {
          id: "7"
          city: "Parangolé"
          total: "1"
          latitude: "-30.036062"
          longitude: "-51.224268"
          html: "oi"
        }
        {
          id: "8"
          city: "Aquavit"
          total: "10"
          latitude: "-30.03916"
          longitude: "-51.224728"
          html: "oi"
        }
        {
          id: "9"
          city: "Tapas"
          total: "4"
          latitude: "-30.03916"
          longitude: "-51.224728"
          html: "oi"
        }
        {
          id: "10"
          city: "Lab"
          total: "1"
          latitude: "-30.037203"
          longitude: "-51.222846"
          html: "oi"
        }
      ]

    # Create the infowindow(popup over marker)
    infowindow = new google.maps.InfoWindow()  

    pages = data.photos
    _.each pages, (page) ->
      objMarker = undefined
      objMarker = undefined
      objMarker =
        id: page.id
        lat: page.latitude
        lng: page.longitude
        title: page.name

      gmaps.addMarker objMarker
      return







Template.googleMaps.destroyed = ->
  Session.set "map", false
  return
