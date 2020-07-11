<template>
  <div class="">
    <nav class="navbar is-fixed-top is-spaced" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <nuxt-link class="navbar-item title" to="/">
          AYUSH
        </nuxt-link>

        <a role="button" class="navbar-burger" :class="{'is-active': navVisible}" aria-label="menu"
          :aria-expanded="navVisible" @click="navVisible = !navVisible">
          <span :aria-hidden="navVisible"></span>
          <span :aria-hidden="navVisible"></span>
          <span :aria-hidden="navVisible"></span>
        </a>
      </div>
      <div class="navbar-menu" :class="{'is-active': navVisible}">
        <div class="navbar-end">
          <a class="navbar-item is-size-6 is-family-monospace"
            href="https://www.youtube.com/results?search_query=ayurveda"
            rel="noreferrer noopener" 
            target="_blank">
            Videos
          </a>
          <a class="navbar-item is-size-6 is-family-monospace"
            href="https://www.google.com/maps/search/?api=1&query=ayurvedic+hospitals+near+me"
            rel="noreferrer noopener" 
            target="_blank">
            Hospitals
          </a>
          <a class="navbar-item is-size-6 is-family-monospace"
            href="https://www.ayush.gov.in/"
            rel="noreferrer noopener"
            target="_blank">
            More
          </a>
        </div>
      </div>
    </nav>
    <nuxt />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        navVisible: false
      }
    }
  }

</script>

<style>
  ::-webkit-scrollbar {
    display: none;
  }

</style>
