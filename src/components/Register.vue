<template>
    <div class="login-container">
        <div class="login-form">
            <h2>Konto erstellen</h2>
            <form @submit.prevent="register">
                <label>Vorname:</label>
                <input type="text" v-model="firstName" required>
                <label>Nachname:</label>
                <input type="text" v-model="lastName" required>
                <label>Email:</label>
                <input type="email" v-model="email" required>
                <label>Konto-typ:</label>
                <input type="text" v-model="accountType" required>
                <label>Passwort:</label>
                <input type="password" v-model="password" required>
                <label>Passwort wiederholen:</label>
                <input type="password" v-model="repeatPassword" required>
                <label>Anschrift:</label>
                <input type="text" v-model="street" placeholder="Straße" required>
                <input type="text" v-model="houseNumber" placeholder="Hausnummer" required>
                <input type="text" v-model="city" placeholder="Ort" required>
                <input type="text" v-model="postalCode" placeholder="Postleitzahl" required>
                <div class="checkbox-container">
                    <input type="checkbox" v-model="acceptTerms" required>
                    <label class="small-font">Ich stimme den Nutzungsbedingungen zu. Durch das Absenden dieses Formulars erklärst du dich damit einverstanden, dass Daten gemäß unserer Datenschutzrichtlinie verarbeitet werden dürfen</label>
                </div>
                <button type="submit">Konto erstellen</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UserRegister',
    data() {
        return {
            firstName: '',
            lastName: '',
            email: '',
            accountType: '',
            password: '',
            repeatPassword: '',
            street: '',
            houseNumber: '',
            city: '',
            postalCode: '',
            acceptTerms: false,
            errors: {}
        }
    },
    methods: {
        register() {
            this.errors = {};
            // Add validation for new fields here
            if (!this.firstName) {
                this.errors.firstName = 'Vorname ist erforderlich.';
            }
            if (!this.lastName) {
                this.errors.lastName = 'Nachname ist erforderlich.';
            }
            if (!this.email) {
                this.errors.email = 'Email ist erforderlich.';
            }
            if (!this.accountType) {
                this.errors.accountType = 'Konto-Typ ist erforderlich.';
            }
            if (!this.password) {
                this.errors.password = 'Passwort ist erforderlich.';
            }
            if (this.password !== this.repeatPassword) {
                this.errors.repeatPassword = 'Passwörter stimmen nicht überein.';
            }
            if (!this.street) {
                this.errors.street = 'Straße ist erforderlich.';
            }
            if (!this.houseNumber) {
                this.errors.houseNumber = 'Hausnummer ist erforderlich.';
            }
            if (!this.city) {
                this.errors.city = 'Ort ist erforderlich.';
            }
            if (!this.postalCode) {
                this.errors.postalCode = 'Postleitzahl ist erforderlich.';
            }
            if (!this.acceptTerms) {
                this.errors.acceptTerms = 'Bitte akzeptieren Sie die Nutzungsbedingungen.';
            }
            if (Object.keys(this.errors).length > 0) {
                return;
            }
            // Here you would usually send the user's input to your backend to register them
            // TODO: Implement backend part
            console.log(`Registering with email ${this.email} and password ${this.password}`);
        }
    }
}
</script>

<style scoped>
  @import '../assets/style.css';
</style>
