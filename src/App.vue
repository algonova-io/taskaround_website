<script setup lang="ts">

import {faFacebook, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
</script>

<template>
  <div class="landing-page">
    <div class="d-flex header content pt-6">
      <!-- Left side: Logo -->
      <v-col cols="6" class="logo">
        <router-link to="/">
          <img src="./assets/taskaround_website_logo.png" alt="TaskAround Logo" height="72"/>
        </router-link>
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
    </div>
    <div class="d-flex  content overflow-auto">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component"/>
        </transition>
      </router-view>

    </div>

    <v-footer class="footer py-4">
      <div class="d-flex flex-row  flex-fill content">
        <div class="d-flex flex-row ga-5">
          <font-awesome-icon class="social-icons"  :icon="faInstagram"/>
          <font-awesome-icon class="social-icons"  :icon="faFacebook"/>
          <font-awesome-icon class="social-icons"  :icon="faLinkedin"/>
        </div>
        <v-spacer/>
        <div class="footer-links">
          <router-link to="/terms">Terms & Conditions</router-link>
          <router-link to="/privacy">Privacy policy</router-link>
        </div>

      </div>
    </v-footer>

  </div>
</template>

<style scoped>
</style>
