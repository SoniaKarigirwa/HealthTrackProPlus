// Sample data for the chart
const patientData = {
    labels: ["Patient 1", "Patient 2", "Patient 3", "Patient 4"],
    datasets: [{
        label: "Body Temperature",
        data: [37.2, 37.8, 38.5, 37.0],
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        fill: false
    }]
};

const ctx = document.getElementById('patientChart').getContext('2d');

const patientChart = new Chart(ctx, {
    type: 'line',
    data: patientData,
    options: {
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});
