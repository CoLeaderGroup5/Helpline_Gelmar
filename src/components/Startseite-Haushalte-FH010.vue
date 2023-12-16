<template>
  <img src="../assets/imageStart.jpg"/>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.0/css/all.min.css">
  <div class="header-container">
    <div class="homeButton">
      <button id="homeBtn">
        <i class="fas fa-home"></i>
      </button>
    </div>
    <div class="search-button">
      <button id="searchBtn">
        <i class="fas fa-search"></i>
      </button>
    </div>
    <div class="profile">
    </div>
    <div class="notification">
    </div>
    <div class="messages">
    </div>
 </div>
  <div class="headerName">
    <h1>Startseite</h1>
  </div>
  <div class="body-container">
    <div class="button-large">
      Energieverträge
    </div>
    <div class="button-large">
      Rechnungen
    </div>
    <div class="button-large">
      Energieausweis
    </div>
    <div class="button-large">
      PV-Anlage
    </div>
    <div class="button-large">
      Dashboard
    </div>
    <div class="button-large">
      Dokumente
    </div>
  </div>
  <div style="display:flex; justify-content:center;">
    <div class="button-large">
      Beschwerde
    </div>
    <div class="button-large">
      Logout
    </div>
  </div>

</template>

<script>
export default {
  name: 'sh_fh010',
  props: {
    msg: String
  }
}
</script>
<style scoped>
@import '../assets/global.css';
</style>