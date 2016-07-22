function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 8,
          center: {lat: 37.7854368, lng: -122.3976003}
        });
        var geocoder = new google.maps.Geocoder();

        document.getElementById('submit').addEventListener('click', function() {
          geocodeAddress(geocoder, map);
        });
      }

      function geocodeAddress(geocoder, resultsMap) {
        var address = document.getElementById('pac-input').value;
        geocoder.geocode({'address': address}, function(results, status) {
          if (status === google.maps.GeocoderStatus.OK) {
        resultsMap.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
          map: resultsMap,
          position: results[0].geometry.location
        });
                         // Opens the InfoWindow when marker is clicked.
                         marker.addListener('click', function() {
                                            infoWindow.open(resultsMap, marker);
                                            });
       
      } else {
        $("#messagebox").text("*Error: Invalid Search Value:" + status);
          }
        });
      }