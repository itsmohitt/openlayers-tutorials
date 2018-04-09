 var map = new ol.Map({
        target: 'map',
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })
        ],
        view: new ol.View({
          center: ol.proj.fromLonLat([-74.006,40.712]), // Coordinates of Paris
          zoom: 7 //Initial Zoom Level
        })
      });