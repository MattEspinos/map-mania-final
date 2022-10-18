var map;

function initMap() {
    map = new google.maps.Map(document.getElementById("myMapID"), {
      center: { lat: 41.878, lng: 10 },
      zoom: 3,
    });

    google.maps.event.addListener(map, 'idle', function() {
        updateMapEvent()
    });
  }

   async function updateMapEvent() {
    console.log('function UpdateMapEvent() from google-maps')
    var zoomLevel = map.getZoom()
    var inBounds = false;

    const response = await fetch("/favoriteplaces")
    const data = await response.json()

    //Chicago
    var loc = data.loc1;
    var temp = loc.split(",");
    var chicago = {lat: parseFloat(temp[0]), lng: parseFloat(temp[1])};
    //Toronto
    loc = data.loc2;
    temp = loc.split(",");
    var toronto = {lat: parseFloat(temp[0]), lng: parseFloat(temp[1])};
    //Tokyo
    loc = data.loc3;
    temp = loc.split(",");
    var tokyo = {lat: parseFloat(temp[0]), lng: parseFloat(temp[1])};

  if(map.getBounds().contains(chicago) && zoomLevel >=10) {
        inBounds = true;
        var marker1 = new google.maps.Marker({position:chicago, map});
        marker1.setIcon('https://maps.google.com/mapfiles/kml/shapes/info-i_maps.png');

        var infoWindow = new google.maps.InfoWindow({content: 'Location 1: Chicago, Illinois'});
        marker1.addListener('click', function() {
            infoWindow.open(map, marker1);
        });
  }
  if(map.getBounds().contains(toronto) && zoomLevel >=10) {
    inBounds = true;
    var marker1 = new google.maps.Marker({position:toronto, map});
    marker1.setIcon('https://maps.google.com/mapfiles/kml/shapes/info-i_maps.png');

    var infoWindow = new google.maps.InfoWindow({content: 'Location 2: Toronto, Ontario'});
    marker1.addListener('click', function() {
        infoWindow.open(map, marker1);
    });
  }
  if(map.getBounds().contains(tokyo) && zoomLevel >=10) {
    inBounds = true;
    var marker1 = new google.maps.Marker({position:tokyo, map});
    marker1.setIcon('https://maps.google.com/mapfiles/kml/shapes/info-i_maps.png');

    var infoWindow = new google.maps.InfoWindow({content: 'Location 3: Tokyo, Japan'});
    marker1.addListener('click', function() {
        infoWindow.open(map, marker1);
    });
  }

    console.log("inBounds:"+inBounds+"zoomLevel:"+zoomLevel)
  }


function initApplication(){
    console.log('Map Mania Start');
}