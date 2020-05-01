<template >
  <v-container>
    <v-card max-width="1200">
      <a
        class="weatherwidget-io"
        href="https://forecast7.com/en/40d39n82d49/mount-vernon/?unit=us"
        data-label_1="MOUNT VERNON"
        data-label_2="WEATHER"
        data-theme="pure"
      >MOUNT VERNON WEATHER</a>
      <v-carousel>
        <v-carousel-item v-for="(image,i) in images" :key="i" :src="image"></v-carousel-item>
      </v-carousel>
      <Profile
        photo_url
        name="De-Andre Steward"
        major="Computer Science"
        email="de-steward@mail.mvnu.edu"
      />
    </v-card>
  </v-container>
</template>

<script>
import Profile from "./Profile";

export default {
  name: "Home",
  components: {
    Profile
  },

  data: () => ({
    //add images for homepage here

    images: [
      "https://i.guim.co.uk/img/media/c89d739029a625c64b7fff7f69f69e8867692780/0_0_4000_2724/master/4000.jpg?width=880&quality=45&auto=format&fit=max&dpr=2&s=6c4ea40a78f36025859a2931d25e3af8",
      "https://i.guim.co.uk/img/media/826245f1a3e47a0ddf0de0dcccfcdf01519492de/0_0_3070_2054/master/3070.jpg?width=880&quality=45&auto=format&fit=max&dpr=2&s=81cbdd6cbe009433dfde689b0f9cc1cb",
      "https://i.guim.co.uk/img/media/e5ff9facbb4cde04868c442e6f53ceaf1cc6ec01/0_0_3500_2332/master/3500.jpg?width=880&quality=45&auto=format&fit=max&dpr=2&s=9e9b40773f444e4b7ffec8ec1b104d80",
      "https://i.guim.co.uk/img/media/26447f3090997b46e5b253dc59751bedae97bd91/0_0_4000_2667/master/4000.jpg?width=880&quality=45&auto=format&fit=max&dpr=2&s=880188d5493ac0f9968b4370f437f6ab"
    ]
  })
};
mounted: {
  !(function(d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0];
    if (!d.getElementById(id)) {
      js = d.createElement(s);
      js.id = id;
      js.src = "https://weatherwidget.io/js/widget.min.js";
      fjs.parentNode.insertBefore(js, fjs);
    }
  })(document, "script", "weatherwidget-io-js");
}
</script>

<style>
</style>
