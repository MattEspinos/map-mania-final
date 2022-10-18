var map;

function initMap() {
    map = new google.maps.Map(document.getElementById("myMapID"), {
      center: { lat: 41.878, lng: 10 },
      zoom: 3,
    });

    //Marker Canoe Bay WI
    var marker = new google.maps.Marker({position: {lat:45.330,lng:91.491}, map});

    var marker2 = new google.maps.Marker({position:{lat:36.3932,lng:25.4615}, map});
    marker2.setIcon('https://maps.google.com/mapfiles/kml/shapes/info-i_maps.png');

    var infoWindow = new google.maps.InfoWindow({content: 'Santorini, Greece'});
    marker2.addListener('click', function() {
        infoWindow.open(map, marker2);
    });

    google.maps.event.addListener(map, 'idle', function() {
        updateMapEvent()
    });
  }

  function updateMapEvent() {
    console.log('function UpdateMapEvent() from google-maps')
    var zoomLevel = map.getZoom()
    var inBounds = false;

    if(map.getBounds().contains({lat:45.330,lng:91.491})) {
        inBounds = true;
    }

    console.log("inBounds:"+inBounds+"zoomLevel:"+zoomLevel)
  }


function initApplication(){
    console.log('Map Mania Start');
}