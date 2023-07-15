document.addEventListener('DOMContentLoaded', () => {
  // Function to get the current time and update the clock element
  function updateClock() {
    var now = new Date();
    var hours = now.getHours().toString().padStart(2, '0');
    var minutes = now.getMinutes().toString().padStart(2, '0');
    var seconds = now.getSeconds().toString().padStart(2, '0');
    var timeString = hours + ':' + minutes + ':' + seconds;
    document.getElementById('clock').textContent = 'Current Time: ' + timeString;
  }

  // Function to add a new scam number to the table
  function addScamNumber(scamNumber) {
    var scamTableBody = document.getElementById('scamTableBody');

    var newRow = document.createElement('tr');
    var typeCell = document.createElement('td');
    typeCell.textContent = scamNumber.scamType;
    var numberCell = document.createElement('td');
    numberCell.textContent = scamNumber.scamNumber;
    var statusCell = document.createElement('td');
    statusCell.textContent = scamNumber.status;
    var dateCell = document.createElement('td');
document.addEventListener('DOMContentLoaded', () => {
  // Function to get the current time and update the clock element
  function updateClock() {
    var now = new Date();
    var hours = now.getHours().toString().padStart(2, '0');
    var minutes = now.getMinutes().toString().padStart(2, '0');
    var seconds = now.getSeconds().toString().padStart(2, '0');
    var timeString = hours + ':' + minutes + ':' + seconds;
    document.getElementById('clock').textContent = 'Current Time: ' + timeString;
  }

  // Function to add a new scam number to the table
  function addScamNumber(scamNumber) {
    var scamTableBody = document.getElementById('scamTableBody');

    var newRow = document.createElement('tr');
    var typeCell = document.createElement('td');
    typeCell.textContent = scamNumber.scamType;
    var numberCell = document.createElement('td');
    numberCell.textContent = scamNumber.scamNumber;
    var statusCell = document.createElement('td');
    statusCell.textContent = scamNumber.status;
    var dateCell = document.createElement('td');
