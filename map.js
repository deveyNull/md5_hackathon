var map;
      var src = 'http://deveyio.us/test15.kml';
      var src2 = 'http://deveyio.us/test16.kml';

      /**
       * Initializes the map and calls the function that creates polylines.
       */
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: new google.maps.LatLng(40.730610,-73.935242),
          zoom: 8,
          mapTypeId: 'terrain'
        });
        loadKmlLayer(src, src2, map);
      }

      /**
       * Adds a KMLLayer based on the URL passed. Clicking on a marker
       * results in the balloon content being loaded into the right-hand div.
       * @param {string} src A URL for a KML file.
       */
      function loadKmlLayer(src, src2, map) {
        var kmlLayer = new google.maps.KmlLayer(src, {
          suppressInfoWindows: true,
          preserveViewport: false,
          map: map
        });
        google.maps.event.addListener(kmlLayer, 'click', function(event) {
          var content = event.featureData.infoWindowHtml;
          var testimonial = document.getElementById('capture');
          testimonial.innerHTML = content;
        });
        var kmlLayer = new google.maps.KmlLayer(src2, {
          suppressInfoWindows: true,
          preserveViewport: false,
          map: map
        });
        google.maps.event.addListener(kmlLayer, 'click', function(event) {
          var content = event.featureData.infoWindowHtml;
          var testimonial = document.getElementById('capture');
          testimonial.innerHTML = content;
        });
       }