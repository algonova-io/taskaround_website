<template>
  <div class="landing-page">
    <div class="d-flex">
      <v-col :cols="sm ? 12 : 6" class="d-flex flex-column ga-6 pt-16">
        <div class="d-flex flex-column ga-6">
          <h1>{{ $t('homePage.title')}}</h1>
          <div class="d-flex flex-column">
            <h3>
              {{ $t('homePage.description') }}
            </h3>
          </div>
        </div>
        <div class="d-flex flex-row">
          <a href="https://play.google.com/store/apps/details?id=com.taskaround.app">
            <img class="store-buttons" src="../assets/Google%20Play.png" alt="Download on Google Play"/>
          </a>
          <a href="https://apps.apple.com/app/taskaround/id6746360517">
            <img class="store-buttons"  src="../assets/App%20Store.png" alt="Download on the App Store"/>
          </a>
        </div>
      </v-col>
      <v-spacer/>
      <v-col cols="6" v-if="!sm">
        <div :class="sm ? 'flex-row' : 'flex-row'" class="images-container d-flex">
          <img
              class="overlap-image"
              src="../assets/mockup_2.svg"
              alt=""
          />
          <img
              class="overlap-image"
              src="../assets/mockup.svg"
              alt=""
          />
        </div>

      </v-col>
    </div>

    <v-spacer></v-spacer>
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
  margin-right: 1rem;
}


.phone {
  max-height: 700px;
}

.images-container {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 1.5rem;

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


/* Second image: slight right rotation */
.overlap-image:last-child {
  transform: rotate(5deg) translateX(20px) translateY(80px);
  z-index: 1;
}

</style>