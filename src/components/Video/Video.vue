<template>
  <div id="app">
    <h1 class="h1">Videos</h1>
 
    <div class="videos">
      <ul class="videos__list">
        <li v-for="(video, index) in videos" :key="index" class="videos__item">
          <LazyYoutubeVideo :url="video.url" :previewImageSize="video.previewImageSize"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import LazyYoutubeVideo from "vue-lazy-youtube-video";

export default {
  name: "App",
  components: {
    LazyYoutubeVideo
  },
  data() {
    return {
      videos: [
        {
          url: "https://www.youtube.com/watch?v=1cxN0Jr3ZDQ",
          previewImageSize: "maxresdefault"
        },
        {
          url: "https://www.youtube.com/watch?v=Brk2QSChie4",
          previewImageSize: "maxresdefault"
        }
       
      ]
    };
  }
};
</script>

<style lang="scss">
$gap: 20px;

#app {
  font-family: sans-serif;
}

.h1 {
  text-align: center;
  color: #34495e;
}

p {
  text-align: center;
}

.videos {
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-left: 0;
    margin: {
      top: 0;
      bottom: 0;
    }
    list-style: none;
  }

  &__item {
    width: calc(50% - #{$gap / 2});

    &:nth-child(n + 3) {
      margin-top: $gap;
    }
  }
}
</style>
