<template>
  <v-app>
    <v-toolbar class="blue darken-3">
      <v-menu class="hidden-md-and-up">
        <v-toolbar-side-icon class="white--text" slot="activator"></v-toolbar-side-icon>
        <v-list>
          <v-list-tile to="/">
            <v-list-tile-action>
              <v-icon>home</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>Home</v-list-tile-content>
          </v-list-tile>
          <v-list-tile to="/Info">
            <v-list-tile-action>
              <v-icon>info</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>General Info</v-list-tile-content>
          </v-list-tile>
          <v-list-tile to="/Roles">
            <v-list-tile-action>
              <v-icon>assignment_ind</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>Roles</v-list-tile-content>
          </v-list-tile>
          <v-list-tile to="/Video">
            <v-list-tile-action>
              <v-icon>movie_creation</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>Training Video</v-list-tile-content>
          </v-list-tile>
          <v-list-tile to="/Map">
            <v-list-tile-action>
              <v-icon>map</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>Destruction Map</v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-toolbar-title class="white--text"></v-toolbar-title>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn class="white--text" to="/" flat>Home</v-btn>
        <v-btn class="white--text" to="/Info" flat>General Info</v-btn>
        <v-btn class="white--text" to="/Roles" flat>Roles</v-btn>
        <v-btn class="white--text" to="/Video" flat>Training Video</v-btn>
        <v-btn class="white--text" to="/Map" flat>Destruction Map</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>

    <v-footer height="auto" class="blue darken-3">
      <v-layout justify-center row wrap>
        <v-flex dark py-3 text-xs-center white--text xs12>
          &copy;2019 —
          <strong>MVNU</strong>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
import Home from "./components/Home/Home";
import Roles from "./components/Roles/Roles";
import Map from "./components/Map/Map";
import Video from "./components/Video/Video";
import Info from "./components/Info/Info";
export default {
  name: "App",
  components: {
    Home,
    Roles,
    Map,
    Video,
    Info
  },
  data() {
    return {
      //
    };
  }
};
</script>
<style>
</style>

