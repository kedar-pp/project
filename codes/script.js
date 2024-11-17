// Basic JavaScript example for dashboard interactions

document.addEventListener("DOMContentLoaded", () => {
    const totalVehicles = 15; // This value can be dynamically updated
    const availableSlots = 5; // Example value
    const occupiedSlots = totalVehicles - availableSlots;
    const totalIncome = 500; // Example value
  
    document.getElementById("totalVehicles").textContent = totalVehicles;
    document.getElementById("availableSlots").textContent = availableSlots;
    document.getElementById("occupiedSlots").textContent = occupiedSlots;
    document.getElementById("totalIncome").textContent = totalIncome;
  
    // Example of adding recent activity logs
    const activityLog = document.getElementById("activityLog");
    activityLog.innerHTML = "<li>Vehicle AB123 entered</li><li>Vehicle XY789 exited</li>";
  });
  