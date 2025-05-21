<template>
  <div class="landing-page">
    <!-- Header -->
    <v-row class="header px-16 pt-4">
      <!-- Left side: Logo -->
      <v-col cols="6" class="logo">
        <img src="../assets/taskaround_website_logo.png" alt="TaskAround Logo" height="72"/>
      </v-col>
      <!-- Right side: Navigation Links -->
      <v-col class="menu">
        <v-spacer></v-spacer>
        <router-link to="#" style="color: white; text-decoration: none">
          <span>Contact</span>
        </router-link>
        <router-link to="#" style="color: white; text-decoration: none">
          <span>Blog</span>
        </router-link>
      </v-col>
    </v-row>
    <!--    <v-spacer></v-spacer>-->
    <!-- Hero Section -->
    <v-row class="hero px-16">
      <v-col cols="6" class="d-flex flex-column ga-3" >
        <div class="d-flex flex-column ga-3">
          <h1>Help is just around the corner.</h1>
          <p>
            Whether you need a hand or want to earn on your terms, Taskaround connects you with local people to get
            tasks done fast. Post, find, and complete gigs near you — all from your phone, and completely free.
          </p>
        </div>
        <div class="d-flex flex-row">
          <img class="store-buttons" src="../assets/Google%20Play.png" alt="Download on Google Play"/>
          <img class="store-buttons" src="../assets/App%20Store.png" alt="Download on the App Store"/>
        </div>
      </v-col>
      <v-col cols="6">

      </v-col>
      <!--        <v-row>-->
      <!--            <img src="../assets/mockup_2.png" alt="Phone screen 2" class="phone" />-->
      <!--            <img src="../assets/mockup_1.png" alt="Phone screen 1" class="phone" />-->
      <!--        </v-row>-->
    </v-row>
    <v-spacer></v-spacer>

    <!-- Footer -->
    <v-footer class="footer">
      <div>
        <font-awesome-icon style="height: 30px; width: 30px; color: black " :icon="faInstagram"/>
        <font-awesome-icon style="height: 30px; width: 30px" :icon="faFacebook"/>
        <font-awesome-icon style="height: 30px; width: 30px" :icon="faTiktok"/>
        <font-awesome-icon style="height: 30px; width: 30px" :icon="faLinkedin"/>
      </div>
      <div class="footer-links">
        <a href="#">Terms & Conditions</a>
        <a href="#">Privacy policy</a>
      </div>
    </v-footer>
  </div>
</template>

<script setup lang="ts">
// No logic needed for this static layout
import {faFacebook, faInstagram, faLinkedin, faTiktok} from "@fortawesome/free-brands-svg-icons";
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

.landing-page {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  background-color: #f46066;
  color: white;
  font-family: 'Poppins', sans-serif;

}


/* Header */

.logo img {
  height: 40px;
  object-fit: contain;
  display: block;
}


/* Hero */
.hero {
  display: flex;
  flex-direction: row;
  padding-left: 0;
  padding-right: 0;
  gap: 4rem;
}

.store-buttons {
  max-height: 48px;
  margin-right: 1rem;
}


/* Footer */
.footer {
  background: white;
  color: black;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  font-size: 0.875rem;
  flex-wrap: wrap;
}

.footer a {
  color: black;
  text-decoration: none;
  margin-right: 1rem;
}


</style>