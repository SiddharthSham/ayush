<template>
  <div class="">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <nuxt-link class="navbar-item title" to="/">
          AYUSH
        </nuxt-link>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-end">
        <a class="navbar-item is-size-4 is-family-monospace" href="https://docs.google.com/spreadsheets/d/1UZ0KyGzdbbp3L_YStZLBMWfWBDVAgRQm2uiMIp1ZPCw/edit?usp=sharing" target="_blank">
          Datasheet
        </a>
        <a class="navbar-item is-size-4 is-family-monospace" href="https://www.youtube.com/results?search_query=ayurveda" target="_blank">
          Videos
        </a>
        <a class="navbar-item is-size-4 is-family-monospace" href="https://www.google.com/maps/search/?api=1&query=ayurvedic+hospitals+near+me"
          target="_blank">
          Hospitals
        </a>
      </div>
    </nav>
    <nuxt />
  </div>
</template>

<script>
  export default {

  }
</script>

<style>

::-webkit-scrollbar-track
{
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	background-color: #F5F5F5;
}

::-webkit-scrollbar
{
	width: 6px;
	background-color: #F5F5F5;
}

::-webkit-scrollbar-thumb
{
	background-color: #000000;
}
</style>