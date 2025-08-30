<template>
  <div  class="d-flex justify-center" style="background: transparent; height: 100%">
      <v-col :cols="sm ? 12 : 6" class="d-flex flex-column overflow-x-hidden ga-6 pt-16">
        <div class="d-flex flex-column ga-6">
          <h1>{{ $t('homePage.title')}}</h1>
          <div class="d-flex flex-column">
            <h3>
              {{ $t('homePage.description') }}
            </h3>
          </div>
        </div>

        <div class="d-flex flex-row pt-12">
          <a href="https://play.google.com/store/apps/details?id=com.taskaround.app">
            <img class="store-buttons" src="../assets/download_play_store.svg" alt="Download on Google Play"/>
          </a>
          <a href="https://apps.apple.com/app/taskaround/id6746360517">
            <img class="store-buttons"  src="../assets/download_app_store.svg" alt="Download on the App Store"/>
          </a>
        </div>
      </v-col>
      <v-col cols="6" v-if="!sm" class="d-flex justify-end images-container">
        <img
            class="overlap-image"
            style="width: auto;  max-height: 800px"
            src="../assets/mockup_phone_2.png"
            alt=""
        />
        <img
              class="overlap-image"
              style="width: auto;  max-height: 800px"
              src="../assets/mockup_phone_home.png"
              alt=""
          />
      </v-col>
  </div>
</template>

<script setup lang="ts">
import {useDisplay} from "vuetify/framework";

const sm = useDisplay().smAndDown

</script>

<style scoped>


/* Header */


/* Hero */

.store-buttons {
  max-height: 48px;
  min-height: 48px;
  margin-right: 1rem;
}


.phone {
  max-height: 700px;
}


/* Overlapping images */
.overlap-image {
  position: relative;
  z-index: 2;
  transition: transform 0.2s ease-in-out; /* Optional hover effect */
  width: 45%;
  max-width: 280px;

}

.overlap-image:first-child {
  margin-right: -50px; /* Negative margin to overlap */
  z-index: 1; /* Ensures the first image is on top */
  transform: rotate(-8deg) translateX(-20px);
}


</style>