if (Meteor.isClient) {
    
  $('#addReview').modal({keyboard: true});
    
  Template.home.events = {
        "click .open-modal" : function(e,t) {
        e.preventDefault();
        $("#addReview").modal("show");
        }     
  };

  Template.form.helpers({
    contactFormSchema: function() {
      return Schema.reviews;
    }
  });


  AutoForm.addHooks(null, {
    onSuccess: function () {
      console.log("onSuccess on all input/update/method forms!");
      $("#form").modal("hide");
      $("#sentReview").modal("show");

    }
  });


  var infos = [];
  var locations = [
      ['Passe Fica', -30.03634, -51.221054, 'R. da República, 50 - Cidade Baixa'],
      ['Porto Carioca', -30.037557, -51.221812, 'R. da República, 188 - Cidade Baixa'],
      ['Vitraux Club', -30.028219, -51.219064, 'Rua da Conceição, 492 - Centro'],
      ['Venezianos', -30.042449, -51.222463, 'Rua Joaquim Nabuco, 397 - Cidade Baixa'],
      ['Bahamas Bar', -30.037215, -51.222304, 'R. da República, 198 - Cidade Baixa'],
      ['Bonobo', -30.030333, -51.209754, 'R. Castro Alves, 101 - Independência'],
      ['Parangolé', -30.036062, -51.224268, 'Rua General Lima e Silva, 242 - Cidade Baixa']
  ]; 


  function initialize() {

    var myOptions = {
      center: new google.maps.LatLng(-30.0462291, -51.180004),
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.ROADMAP

    };
    var map = new google.maps.Map(document.getElementById("default"),
        myOptions);

    setMarkers(map,locations);

  }



  function setMarkers(map,locations){

    var marker, i;

    for (i = 0; i < locations.length; i++)
    {  

      var estabelecimento = locations[i][0];
      var lat = locations[i][1];
      var long = locations[i][2];
      var add =  locations[i][3];

      latlngset = new google.maps.LatLng(lat, long);

      marker = new google.maps.Marker({  
          map: map, title: estabelecimento , position: latlngset, animation: google.maps.Animation.DROP  
      });
            //map.setCenter(marker.getPosition())


      var content = '<h4>' + estabelecimento +  '</h4>' + add ;    

      var infowindow = new google.maps.InfoWindow();
            
           
      google.maps.event.addListener(marker,'click', (function(marker,content,infowindow){ 
          return function() {
            
            /* close the previous info-window */
            closeInfos();
            
            infowindow.setContent(content);
            infowindow.open(map,marker);
                  
                  /* keep the handle, in order to close it on next click event */
            infos[0]=infowindow;
                  
          };
      })(marker,content,infowindow)); 

    }
  }

  function closeInfos(){
 
    if(infos.length > 0){
 
      /* detach the info-window from the marker ... undocumented in the API docs */
      infos[0].set("marker", null);
 
      /* and close it */
      infos[0].close();
 
      /* blank the array */
      infos.length = 0;
    }
  }



Template.home.rendered = function() {
  return initialize();
};

/*     Template.formtoMail.events({
      'click #btn': function () {
        // if someone click on the button ( tag), then we ask the server to execute the function sendEmail (RPC call)
        var corpo = "

        "
        Meteor.call('sendEmail', $('#email').val());
        Session.set('done', true);
      }
  });

  Template.email.done = function () { return Session.equals('done', true); }
}*/




  
  

  Meteor.startup(function() {
      $(document).ready(function() {
          // show google analytics if running on the live web site
          if ( -1 != document.URL.indexOf("freeda.me") )
          {
              (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
              (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
              m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
              })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    
          ga('create', 'UA-57194927-1', 'auto');
          ga('require', 'linkid', 'linkid.js');
          ga('send', 'pageview');
          }
      });
  });


}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}




Template.reviews.helpers({
  posts: function () {
    // this helper returns a cursor of
    // all of the posts in the collection
    return Posts.find();
  }
});