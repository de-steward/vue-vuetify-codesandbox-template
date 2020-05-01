<template>
  <div class="App"/>
</template>

<script>
import MarkerClusterer from "@google/markerclusterer";
import gmapsInit from "/src/utils/gmaps";
import axios from "axios";

export default {
  name: `App`,
  methods: {
    getLocations: function() {
      let self = this;
      return new Promise(function(resolve, reject) {
        axios
          .get(
            "https://cs.mvnu.edu/classes/csc3032/de-steward/disastersim/api/location.php"
          )
          .then(function(response) {
            console.log("this is the location response data: ");
            console.log(response.data);
            self.location = response.data;
            const filtLocation = response.data.filter(
              location => location.location_boolean === "1"
            );
            console.log("this is the filtered location");
            console.log(filtLocation);
            let first = filtLocation[0].address;
            console.log(first);
            self.location = filtLocation;

            //code to get locations and output a list.
            let locationLength = filtLocation.length - 1;
            var locations = [];

            while (locationLength >= 0) {
              let lat = parseFloat([filtLocation[locationLength].latitude], 10);
              let long = parseFloat(
                [filtLocation[locationLength].longitude],
                10
              );

              let tempObject = {
                locationType: filtLocation[locationLength].location_type,
                destruction_type: filtLocation[locationLength].destruction_type,
                description: filtLocation[locationLength].description,
                image: filtLocation[locationLength].location_image,
                position: {
                  lat: lat,
                  lng: long
                },
                title: filtLocation[locationLength].display_name
              };
              locations.push(tempObject);
              locationLength--;
            }
            console.log("this is the array of location pins");
            console.log(locations);
            resolve(locations);
          })
          .catch(function(error) {
            console.log("get location errors:");
            console.log(error);
            reject(error);
          });
      });
    }
  },

  async mounted() {
    console.log("hello form location vue!");
    //this.getLocations();
    //var locations;
    // locations = await this.getLocations();
    let mapself = this;
    this.getLocations().then(async function(locations) {
      console.log("test to see if this is correct:");
      console.log(locations);
      // console.log("test to see if this is similar");
      // console.log(locationstest);
      try {
        const google = await gmapsInit();
        const geocoder = new google.maps.Geocoder();
        const map = new google.maps.Map(mapself.$el);
        geocoder.geocode({ address: "Mount Vernon, Oh" }, (results, status) => {
          if (status !== `OK` || !results[0]) {
            throw new Error(status);
          }
          map.setCenter(results[0].geometry.location);
          map.fitBounds(results[0].geometry.viewport);
        });

        var secretMessage = [],
          marker,
          i;

        for (i = 0; i < locations.length; i++) {
          marker = new google.maps.Marker({
            position: locations[i].position,
            title: locations[i].title,
            map: map
          });
          let title = locations[i].title;
          if (title.length > 1) {
            title =
              "<h1 id=firstHeading class=firstHeading>" + title + " </h1>";
          } else {
            title = "";
          }

          let locationType = locations[i].locationType;
          if (locationType.length > 1) {
            locationType = "<h3> Location Type: " + locationType + "</h3>";
          } else {
            locationType = "";
          }

          let destruction_type = locations[i].destruction_type;
          if (destruction_type.length > 1) {
            destruction_type =
              "<h3>Destruction Type: " +
              locations[i].destruction_type +
              '</h3><div id="bodyContent">';
          } else {
            destruction_type = "";
          }

          let description = locations[i].description;
          if (description.length > 1) {
            description = "<h3>" + description + "</h3>";
          } else {
            description = "";
          }

          let image = locations[i].image;
          if (image.length > 1) {
            image = " <img src=" + image + "</img></div>";
          } else {
            image = "";
          }

          let tempContentString =
            '<div id="content">' +
            title +
            locationType +
            destruction_type +
            description +
            image +
            "</div>";

          secretMessage.push(tempContentString);
          attachSecretMessage(marker, secretMessage[i]);
        }
        // Attaches an info window to a marker with the provided message. When the
        // marker is clicked, the info window will open with the secret message.
        function attachSecretMessage(marker, secretMessage) {
          var infowindow = new google.maps.InfoWindow({
            content: secretMessage
          });

          marker.addListener("click", function() {
            infowindow.open(marker.get("map"), marker);
          });
        }

        // eslint-disable-next-line no-new
        // new MarkerClusterer(map, markers, {
        //   imagePath: `https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m`
        // });
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    });
  }
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}
.App {
  width: 100vw;
  height: 100vh;
}
</style>