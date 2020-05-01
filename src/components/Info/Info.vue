<template>
<v-container>
  <v-card class="light-blue lighten-5 pa-4">
    <div class="ma-4">
      <div>
        <h1>General Info</h1>
        <h3 class="sub">What is CERT training?</h3>
      </div>
      <a href="https://www.ready.gov/cert">
        <v-img src="https://www.ok.gov/homeland/images/CERT%20logo.jpg"></v-img>
      </a>
    </div>
    <body class="mainText">
      The Community Emergency Response Team (CERT) Program educates ordinary
      people from all walks of life about disaster preparedness and weapons of mass
      destruction and trains them in basic disaster response skills, such as fire safety, light
      search and rescue, and disaster medical operation. Using the training, CERT members
      can assist others in their neighborhood or workplace following an event and can take a
      more active role in preparing their community.
    </body>
    <div class="ma-4">
      <div>
        <h3 class="sub">What is FEMA?</h3>
      </div>
      <a href="https://www.fema.gov">
        <v-img src="https://www.fema.gov/profiles/fema_gov/themes/unicorn/img/fema-logo-blue.svg"></v-img>
      </a>
    </div>
    <body class="mainText">
      The Federal Emergency Management Agency (FEMA) coordinates the federal government's role in preparing for,
      preventing, mitigating the effects of, responding to, and recovering from all domestic disasters,
      whether natural or man-made, including acts of terror.
    </body>
  </v-card>
</v-container>
</template>

<script>
export default {
  name: "Info",
  components: {},
  data: () => ({})
};
</script>

<style>
.ma-4 {
  font-size: 22px;
}
.sub {
  font-size: 20px;
}

.mainText {
  font-size: 18px;
}

.v-image {
  width: 50%;
  height: 50%;
  object-fit: scale-down;
}
</style>