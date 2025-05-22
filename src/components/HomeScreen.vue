<template>
  <div class="landing-page">
    <div class="d-flex">
      <v-col :cols="sm ? 12 : 6" class="d-flex flex-column ga-6 pt-16">
        <div class="d-flex flex-column ga-6">
          <h1>Tra vicini ci si aiuta.</h1>
          <div class="d-flex flex-column">
            <h3>
              Scopri chi può darti una mano nel tuo quartiere — o offriti tu.
            </h3>
            <h3>
              Bastano pochi secondi, ed è gratis. Scarica ora!
            </h3>

          </div>
        </div>
        <div class="d-flex flex-row">
          <img class="store-buttons" src="../assets/Google%20Play.png" alt="Download on Google Play"/>
          <img class="store-buttons" src="../assets/App%20Store.png" alt="Download on the App Store"/>
        </div>
      </v-col>
      <v-spacer/>
      <v-col cols="6" v-if="!sm">
        <div :class="sm ? 'flex-row' : 'flex-row'" class="images-container d-flex">
          <img
              class="overlap-image"
              src="../assets/mockup_2.png"
              alt=""
          />
          <img
              class="overlap-image"
              src="../assets/mockup.png"
              alt=""
          />
        </div>

      </v-col>
      <!--        <v-row>-->
      <!--            <img src="../assets/mockup_2.png" alt="Phone screen 2" class="phone" />-->
      <!--            <img src="../assets/mockup_1.png" alt="Phone screen 1" class="phone" />-->
      <!--        </v-row>-->
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