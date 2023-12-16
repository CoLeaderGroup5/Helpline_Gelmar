<template>
  <div class="gesamt-container">
    <h1>Gesamtenergieverbrauch & -erzeugung</h1>
    <div class="aktuell">
      <div class="verbrauch">
        <h3>Aktueller Verbrauch</h3>
        <p>{{ aktuellerVerbrauch }} kWh</p>
      </div>
      <div class="erzeugung">
        <h3>Aktuelle Erzeugung</h3>
        <p>{{ aktuelleErzeugung }} kWh</p>
      </div>
    </div>
    <div class="haushalte">
      <div class="hoechster-verbrauch">
        <h3>Höchster Verbrauch</h3>
        <p>{{ hoechsterVerbrauch }} kWh</p>
      </div>
      <div class="geringster-verbrauch">
        <h3>Geringster Verbrauch</h3>
        <p>{{ geringsterVerbrauch }} kWh</p>
      </div>
    </div>
    <div class="dashboardNetzbetreiber"></div>
    <div class="chartContainer">
      <Line :data="chartData" />
    </div>
  </div>
</template>

<script>
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, PointElement, LineElement)

export default {
  name: "FN060",
  components: {
    Line,
  },
  data() {
    return {
      gesamtVerbrauch: 0,
      gesamtErzeugung: 0,
      hoechsterVerbrauch: 0,
      geringsterVerbrauch: 0,
      chartData: {
        labels: [ 'January', 'February', 'March', 'April', 'May' ],
        datasets: [
          {
            label: "Verbrauch",
            data: [10, 5, 10, 25, 50],
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(255, 99, 132, 0.2)",
          },
          {
            label: "Erzeugung",
            data: [15, 25, 10, 5, 10],
            borderColor: "rgba(255, 206, 86, 1)",
            backgroundColor: "red",
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    };
  },
  methods: {
    ermittleHoechsterVerbrauch() {
      // const connection = createConnection();
      // connection.query('SELECT Max(Verbrauch) AS hoechsterVerbrauch FROM Smartmeter', (err, results) => {
      //   if (err) {
      //     console.error(err.message);
      //     return;
      //   }
      //   this.hoechsterVerbrauch = results[0].hoechsterVerbrauch || 0;
      //   connection.end();
      // });
    },
    ermittleGeringsterVerbrauch() {
      // const connection = createConnection();
      // connection.query('SELECT Min(Verbrauch) AS geringsterVerbrauch FROM Smartmeter', (err, results) => {
      //   if (err) {
      //     console.error(err.message);
      //     return;
      //   }
      //   this.geringsterVerbrauch = results[0].geringsterVerbrauch || 0;
      //   connection.end();
      // });
    },
    ermittleGesamtverbrauch() {
      // const connection = createConnection();
      // connection.query('SELECT SUM(Verbrauch) AS gesamtVerbrauch FROM Smartmeter', (err, results) => {
      //   if (err) {
      //     console.error(err.message);
      //     return;
      //   }
      //   this.aktuellerVerbrauch = results[0].gesamtVerbrauch || 0;
      //   connection.end();
      // });
    },
    ermittleGesamterzeugung() {
      // const connection = createConnection();
      // connection.query('SELECT SUM(Erzeugung) AS gesamtErzeugung FROM Smartmeter', (err, results) => {
      //   if (err) {
      //     console.error(err.message);
      //     return;
      //   }
      //   this.aktuelleErzeugung = results[0].gesamtErzeugung || 0;
      //   connection.end();
      // });
    },
    loadChartData() {
      // const connection = createConnection();
      // connection.query("SELECT * FROM Smartmeter", (err, results) => {
      //   if (err) {
      //     console.error(err.message);
      //     return;
      //   }
      //   const verbrauchData = [];
      //   const erzeugungData = [];
      //   const datum = [];
      //   results.forEach((result) => {
      //     verbrauchData.push(result.Verbrauch);
      //     erzeugungData.push(result.Erzeugung);
      //     datum.push(result.Datum);
      //   });
      //   this.verbrauchData = verbrauchData;
      //   this.erzeugungData = erzeugungData;
      //   this.labels = datum;
      //   connection.end();
      // });
    },
    mounted() {
      // Rufe die Funktionen auf, wenn die Komponente montiert wird
      // this.createConnection();
      // this.ermittleGeringsterVerbrauch();
      // this.ermittleHoechsterVerbrauch();
      // this.ermittleGesamtVerbrauch();
      // this.ermittleGesamtErzeugung();
      // this.loadChartData();
    },
  },
};
</script>

<style scoped>
.gesamt-container {
  background-color: darkgray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
}

.aktuell,
.haushalte {
  display: flex;
  justify-content: space-around;
}

.verbrauch,
.erzeugung,
.hoechster-verbrauch,
.geringster-verbrauch {
  width: 40%;
  flex-direction: column;
}

.chartContainer {
  height: 500px;
  width: 500px;
}
</style>
