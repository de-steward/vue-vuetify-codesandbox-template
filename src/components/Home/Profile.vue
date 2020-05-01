<template>
  <v-container>
    <div class="flex-container">
      <v-img :aspect-ratio="3/4" v-bind:src="photo_url" min-width="50" max-width="150px"></v-img>
      <div class="information">
        <h3 class="headline">{{name}}</h3>
        <h3 class="sub">{{major}}</h3>
        <h3>
          Email:
          <a :href="`mailto:${email}`">{{email}}</a>
        </h3>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Profile",

  props: {
    major: String,
    name: String,
    photo_url: String,
    email: String
  },

  data: () => ({})
};
</script>


<style>
.flex-container {
  display: flex;
  flex-wrap: wrap-horizontal;
}
.information {
  width: 500px;
  padding: 5px;
}
.sub {
  font-style: italic;
}
</style>
