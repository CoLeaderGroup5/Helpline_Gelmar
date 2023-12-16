<template>
    <img src="../assets/imageStart.jpg" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  
    <div class="header-container">
      <div class="icon-left-container">
      <button id="homeButton" class="buttonStyling">
        <i class="fas fa-home"></i>
      </button>
      <button id="searchButton" class="buttonStyling">
        <i class="fas fa-search"></i>
      </button>
    </div> 
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
      <h1>Netzbetreiber Startseite</h1>
    </div>
    <div class="body-container">
      <button class="button-large" id="angestellteVerwaltenBtn">Angestellte verwalten</button>
      <button class="button-large" id="tarifeVertraegeBtn">Tarife und Verträge</button>
      <button class="button-large" id="invoicesBtn">Rechnungen</button>
      <button class="button-large" id="einspeiseZusagenBtn">Einspeisezusagen</button>
      <button class="button-large" id="dashboardBtn">Dashboard</button>
      <button class="button-large" id="beschwerdeBtn">Beschwerden</button>
      <button class="button-large" id="netzvertraeglichkeitspruefungBtn">Netzverträglichkeitsprüfung</button>
    </div>
    <div class="footer-container">
      <button class="button-large" id="logoutBtn">Logout</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'fn_010'
    
  }
  </script>
  
  <style scoped>
  @import '../assets/style_Startseite-Solarteur-FS010.css';
  </style>