let map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 58.25, lng: 22.49 },
    zoom: 14,
  });

  let marker = new google.maps.Marker({
    map: map,
  });


  map.addListener('click', (e) => {
    console.log(e.latLng.toJSON());

    marker.setPosition(e.latLng);

    document.getElementById('input-lat').value = e.latLng.toJSON().lat;
    document.getElementById('input-lng').value = e.latLng.toJSON().lng;

  });
  
}

window.initMap = initMap;