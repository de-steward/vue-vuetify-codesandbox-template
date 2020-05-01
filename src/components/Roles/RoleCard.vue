<template>
<v-container>
  <div class="flex-container">
    <div class="information">
      <h3 class="headline">{{title}}</h3>
      <h3 class="sub">{{subTitle}}</h3>
      <body class="mainText">{{text}}</body>
    </div>
    <v-img :aspect-ratio="16/9" v-bind:src="photo_url" min-width="250" max-width="550px"></v-img>
  </div>
</v-container>
</template>

<script>
export default {
  name: "Person",

  props: {
    title: String,
    subTitle: String,
    photo_url: String,
    text: String
  },

  data: () => ({})
};
</script>


<style>
.flex-container {
  display: flex;
  flex-wrap: wrap;
}
.information {
  width: 500px;
}
.sub {
  font-style: italic;
}
</style>
