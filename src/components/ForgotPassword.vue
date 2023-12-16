<template>
    <div class="forgetPassword-container">
        <div class="forgetPassword-form">
            <h2>Passwort vergessen</h2>
            <form @submit.prevent="submit">
            <label>E-Mail:</label>
            <input type="email" v-model="email" required>
            <button type="submit">Absenden</button>
        </form>
    </div>
    </div>
  </template>

<script>
</script>

<style scoped>
@import '../assets/style.css';
</style>