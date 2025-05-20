<template>
  <div class="landing-page">
    <!-- Header -->
    <header class="header ">
      <div class="container header-inner">
        <div class="logo">
          <img src="../assets/taskaround_website_logo.png" alt="TaskAround Logo" />
        </div>
        <nav class="nav">
          <a href="#">Contact</a>
        </nav>
      </div>
    </header>

    <!-- Hero Section -->
    <v-container >
      <v-row>
        <v-col class="fill-height">
          <h1>Help is just around the corner.</h1>
          <p>
            Whether you need a hand or want to earn on your terms, Taskaround connects you with local people to get tasks done fast. Post, find, and complete gigs near you — all from your phone, and completely free.
          </p>
          <v-row>
            <div class="store-buttons">
              <a href="#">
                <img src="../assets/Google%20Play.png" alt="Download on Google Play" />
              </a>
              <a href="#">
                <img src="../assets/App%20Store.png" alt="Download on the App Store" />
              </a>
            </div>
          </v-row>
        </v-col>
        <v-row>
            <img src="../assets/mockup_2.png" alt="Phone screen 2" class="phone second" />
            <img src="../assets/mockup_1.png" alt="Phone screen 1" class="phone first" />
        </v-row>

      </v-row>
    </v-container>

    <!-- Footer -->
    <footer class="footer">
      <div class="social-icons">
        <a href="#">📘</a>
        <a href="#">🟢</a>
        <a href="#">📸</a>
      </div>
      <div class="footer-links">
        <a href="#">Terms & Conditions</a>
        <a href="#">Privacy policy</a>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// No logic needed for this static layout
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
/* Reusable container class like Freetrade's layout */
.container {
  width: 100%;
  max-width: 1200px;
  padding-left: 2rem;
  padding-right: 2rem;
  margin: 0 auto;
}

/* Header */
.header {
  padding-top: 2rem;
}

.header-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo img {
  height: 40px;
  object-fit: contain;
  display: block;
}

.nav a {
  color: white;
  font-weight: 600;
  font-size: clamp(0.875rem, 1vw, 1rem);
  line-height: 1;
  text-decoration: none;
}

/* Hero */
.hero {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  top:20%;
  bottom:20%;
  max-width: 500px;
}

.hero-inner {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
}

@media (min-width: 768px) {
  .hero-inner {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}

.hero-content {
  flex: 1;
  max-width: 550px;
  text-align: left;
}

.hero-content h1 {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1;
}

.hero-content p {
  font-size: clamp(1rem, 2vw, 1.5rem);
  font-weight: 400;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.store-buttons a img {
  height: 48px;
  margin-right: 1rem;
}

/* Phones */
.hero-images {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex: 1;
  max-width: 600px;
}

.phone {
  width: clamp(140px, 20vw, 180px);
  border-radius: 0;
  box-shadow: none;
  background: transparent;
}

.phone.first {
  transform: rotate(-10deg);
}

.phone.second {
  transform: rotate(5deg);
}

/* Footer */
.footer {
  background: white;
  color: #f46066;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  font-size: 0.875rem;
  flex-wrap: wrap;
}

.footer a {
  color: #f46066;
  text-decoration: none;
  margin-right: 1rem;
}

.social-icons {
  display: flex;
  gap: 1rem;
}
</style>