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
          <img src="./assets/taskaround_logo_white.png" alt="TaskAround Logo" height="100"/>
        </router-link>
      </v-col>
      <!-- Right side: Navigation Links -->
      <v-col class="menu">
<!--        <v-spacer></v-spacer>-->
<!--        <router-link to="#" style="color: white; text-decoration: none">-->
<!--          <span>{{ $t('navigation.contact') }}</span>-->
<!--        </router-link>-->
<!--        <router-link to="#" style="color: white; text-decoration: none">-->
<!--          <span>{{ $t('navigation.blog') }}</span>-->
<!--        </router-link>-->
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
          <a
              href="https://www.instagram.com/taskaround.io/"
              target="_blank"
              rel="noopener"
          >
            <font-awesome-icon href="https://www.instagram.com/taskaround.io/" class="social-icons" :icon="faInstagram" />
          </a>
          <a
              href="https://www.instagram.com/taskaround.io/"
              target="_blank"
              rel="noopener"
          >
            <font-awesome-icon class="social-icons" :icon="faFacebook" />
          </a>
          <a
              href="https://www.instagram.com/taskaround.io/"
              target="_blank"
              rel="noopener"
          >
            <font-awesome-icon class="social-icons" :icon="faLinkedin" />
          </a>
        </div>
        <v-spacer/>
        <div class="footer-links">
          <router-link to="/terms">{{ $t('footer.terms') }}</router-link>
          <router-link to="/privacy">{{ $t('footer.privacy') }}</router-link>
        </div>

      </div>
    </v-footer>

  </div>
</template>

<style scoped>
</style>
