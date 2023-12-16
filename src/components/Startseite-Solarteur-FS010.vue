<template>
  <img src="../assets/imageStart.jpg"/>
  <!-- Updated FontAwesome to 6.5.1 (before 6.1.0)-->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

  <!-- Left-aligned menu bar items -->
  <div class="header-container">
    <div class="icon-left-container">
    <button id="homeButton" class="buttonStyling">
      <i class="fas fa-home"></i>
    </button>
    <button id="searchButton" class="buttonStyling">
      <i class="fas fa-search"></i>
    </button>
  </div>

    <!-- Right-aligned menu bar items -->
    <div class="icon-right-container">
      <button id="profileButton" class="buttonStyling">
        <i class="fas fa-user"></i>
      </button>
      <button id="notificationButton" class="buttonStyling">
        <i class="fas fa-bell"></i>
      </button>
      <button id="messagesButton" class="buttonStyling">
        <i class="fas fa-envelope"></i>
      </button>
    </div>
  </div>

  <div class="headerName">
    <h1>Startseite</h1>
  </div>
  <div class="body-container">
    <button class="button-large" id="pvAnlagenBtn">PV-Anlagen</button>
    <button class="button-large" id="invoicesBtn">Rechnungen</button>
  </div>
  <div class="footer-container">
    <button class="button-large" id="logoutBtn">Logout</button>
  </div>
</template>

<script>
export default {
  name: 'fs_010',
  props: {
    msg: String
  }
}

</script>
<style scoped>
@import '../assets/style_Startseite-Solarteur-FS010.css';
</style>