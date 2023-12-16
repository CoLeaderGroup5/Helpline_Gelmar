<template>
    <div class="login-container">
      <div class="login-form">
        <h2>Anmeldeseite</h2>
        <form @submit.prevent="login">
          <label>E-mail:</label>
          <input type="email" v-model="email" required>
          <p v-if="errors.email" class="error">{{ errors.email }}</p>
          <label>Passwort:</label>
          <input type="password" v-model="password" required>
          <p v-if="errors.password" class="error">{{ errors.password }}</p>
          <button type="submit">Einloggen</button>
        </form>
        <button @click="$router.push('/forgot-password')">Passwort vergessen?</button>
        <button @click="$router.push('/register')">Konto erstellen</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UserLogin',
    data() {
      return {
        email: '',
        password: '',
        errors: {}
      }
    },
    methods: {
      login() {
        this.errors = {};
        if (!this.email) {
          this.errors.email = 'Email ist erforderlich.';
        }
        if (!this.password) {
          this.errors.password = 'Password ist erforderlich.';
        }
        if (Object.keys(this.errors).length > 0) {
          return;
        }
        // Here you would usually send the user's input to your backend to log them in
        console.log(`Logging in with email ${this.email} and password ${this.password}`);
      }
    }
  }
  </script>
  
  <style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fira+Code&family=Playfair+Display:ital,wght@1,600&display=swap');

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5dc;
  padding: 20px;
  font-family: 'Fira Code', monospace;
}

.login-form {
  background: #8b4513;
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.login-form h2 {
  margin-bottom: 20px;
  color: #f5f5dc;
  font-family: 'Playfair Display', serif;
}

.login-form label {
  display: block;
  margin-bottom: 5px;
  color: #f5f5dc;
}

.login-form input {
  width: 90%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid #ddd;
  background: #f5f5dc;
  color: #8b4513;
}

.login-form button {
  padding: 10px 20px;
  background: #f5f5dc;
  color: #8b4513;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: 'Fira Code', monospace;
}
button{
    margin: 10px 10px 10px 0;
}
</style>