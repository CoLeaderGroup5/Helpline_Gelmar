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
 </div>
  <div class="headerName">
    <h1>Admin Startseite</h1>
  </div>
  <div class="body-container">
    <button class ="button-large" id="accountManagementBtn">Kontoverwaltung</button>
    <button class ="button-large" id="logBtn">LOG</button>
  </div>
  <div class="footer-container">
    <button class ="button-large" id="logoutBtn">Logout</button>
  </div>

</template>

<script>
export default {
  name: 'fa_010',
  props: {
    msg: String
  }
}
</script>

<style scoped>
@import '../assets/style.css';
</style>


