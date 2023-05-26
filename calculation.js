function calculateTotalRate() {
    var calculationTable = document.getElementById("calculationTable");
    var rows = calculationTable.getElementsByTagName("tr");

    // Perform the total rate calculation
    var totalRate = 0;  
    for (var i = 1; i < rows.length; i++) {
        var power = parseFloat(rows[i].cells[2].textContent);//power watts
        var time = parseFloat(rows[i].cells[3].textContent);//hrs
        var mRate = parseFloat(rows[i].cells[4].textContent);//rate 
        var appRate = (power * time * mRate)/1000;// 
        totalRate += appRate;
    }

    document.getElementById("totalRate").textContent = totalRate.toFixed(2);
        
    var monthlyRate = totalRate * 30; // Assuming 30 days in a month
    document.getElementById("monthlyRate").textContent = monthlyRate.toFixed(2);
        
    var weeklyRate = totalRate * 7; // Assuming 7 days in a week
    document.getElementById("weeklyRate").textContent = weeklyRate.toFixed(2);
        
    var dailyRate = totalRate;
    document.getElementById("dailyRate").textContent = dailyRate.toFixed(2);
}