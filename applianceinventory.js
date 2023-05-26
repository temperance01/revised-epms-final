function inventoryFunctions(){
 //add function
 document.getElementById("addButton").addEventListener("click", function() {
    document.getElementById("inputForm").style.display = "block";
    document.getElementById("date").value = "";
    document.getElementById("name").value = "";
    document.getElementById("power").value = "";
    document.getElementById("dailyUse").value = "";
    document.getElementById("rate").value = "";
    document.getElementById("saveButton").style.display = "inline-block";
    document.getElementById("updateButton").style.display = "none";
  });

  document.getElementById("removeButton").addEventListener("click", function() {
    document.getElementById("inputForm").style.display = "none";
  });

  // Get the user's email from local storage and display it
  var userEmail = localStorage.getItem("userEmail");
  if (userEmail) {
    document.getElementById("userEmail").innerText = "User: " + userEmail;
  }

 document.getElementById("saveButton").addEventListener("click", function(event) {
    event.preventDefault();

    var date = document.getElementById("date").value;
    var name = document.getElementById("name").value;
    var power = document.getElementById("power").value;
    var dailyUse = document.getElementById("dailyUse").value;
    var rate = document.getElementById("rate").value;

    if (date === "" || name === "" || power === "" || dailyUse === "" || rate === "") {
        alert("Please fill in all fields.");
        return; // Stop further execution
    }

    var dailyConsumption = (power * dailyUse) / 1000;

    var applianceTable = document.getElementById("applianceTable");
    var row = applianceTable.insertRow(-1);

    var dateCell = row.insertCell(0);//date
    var nameCell = row.insertCell(1);//name
    var powerCell = row.insertCell(2);//power watts
    var dailyUseCell = row.insertCell(3);//time used hrs
    var rateCell = row.insertCell(4);//aleco rate
    var consumptionCell = row.insertCell(5);// kwh
    var actionsCell = row.insertCell(6);//edit, delete

    dateCell.textContent = date;
    nameCell.textContent = name;
    powerCell.textContent = power;
    dailyUseCell.textContent = dailyUse;
    rateCell.textContent = rate;
    consumptionCell.textContent = dailyConsumption.toFixed(2);
    actionsCell.innerHTML = `
        <div class="actionButtons">
        <button class="editButton" onclick="editRow(this)">Edit</button>
        <button class="deleteButton" onclick="deleteRow(this)">Delete</button>
        </div>
    `;

    // Clear the input fields
    document.getElementById("date").value;
    document.getElementById("name").value ;
    document.getElementById("power").value ;
    document.getElementById("dailyUse").value ;
    document.getElementById("rate").value ;

    // Hide the input form
    document.getElementById("inputForm").style.display = "none";

    // Add data to the calculateTable
    var calculateTable = document.getElementById("calculationTable");
    var calculateRow = calculateTable.insertRow(-1);

    var calculateDateCell = calculateRow.insertCell(0);
    var calculateNameCell = calculateRow.insertCell(1);
    var calculatePowerCell = calculateRow.insertCell(2);
    var calculateDailyUseCell = calculateRow.insertCell(3);
    var calculateRateCell = calculateRow.insertCell(4);
    var calculateConsumptionCell = calculateRow.insertCell(5);

    calculateDateCell.textContent = date;
    calculateNameCell.textContent = name;
    calculatePowerCell.textContent = power;
    calculateDailyUseCell.textContent = dailyUse;
    calculateRateCell.textContent = rate;
    calculateConsumptionCell.textContent = dailyConsumption.toFixed(2);
    });
  
    document.getElementById("updateButton").addEventListener("click", function(e) {
        e.preventDefault();

        // Get the input values
        var date = document.getElementById("date").value;
        var name = document.getElementById("name").value;
        var power = document.getElementById("power").value;
        var dailyUse = document.getElementById("dailyUse").value;
        var rate = document.getElementById("rate").value;

        if (date === "" || name === "" || power === "" || dailyUse === "" || rate === "") {
            alert("Please fill in all fields.");
            return; // Stop further execution
        }

        var dailyConsumption = (power * dailyUse) / 1000;

        //appliance table
        var table = document.getElementById("applianceTable");
        var newRow = table.insertRow(-1); // Insert at the bottom

        var dateCell = newRow.insertCell(0);
        var nameCell = newRow.insertCell(1);
        var powerCell = newRow.insertCell(2);
        var dailyUseCell = newRow.insertCell(3);
        var rateCell = newRow.insertCell(4);
        var consumptionCell = newRow.insertCell(5);
        var actionsCell = newRow.insertCell(6);

        dateCell.textContent = date;
        nameCell.textContent = name;
        powerCell.textContent = power;
        dailyUseCell.textContent = dailyUse;
        rateCell.textContent = rate;
        consumptionCell.textContent = dailyConsumption.toFixed(2);
        actionsCell.innerHTML = `
            <div class="actionButtons">
            <button class="editButton" onclick="editRow(this)">Edit</button>
            <button class="deleteButton" onclick="deleteRow(this, 'your_appliance_id')">Delete</button>
            </div>
        `;

        // Clear the input fields
        document.getElementById("date").value = "";
        document.getElementById("name").value = "";
        document.getElementById("power").value = "";
        document.getElementById("dailyUse").value = "";
        document.getElementById("rate").value = "";

        // Hide the input form
        document.getElementById("inputForm").style.display = "none";

        //Calculation table
        var cTable = document.getElementById("calculationTable");
        var cNewRow = cTable.insertRow(-1); // Insert at the bottom

        var dateCell = cNewRow.insertCell(0);
        var nameCell = cNewRow.insertCell(1);
        var powerCell = cNewRow.insertCell(2);
        var dailyUseCell = cNewRow.insertCell(3);
        var rateCell = cNewRow.insertCell(4);
        var consumptionCell = cNewRow.insertCell(5);

        dateCell.textContent = date;
        nameCell.textContent = name;
        powerCell.textContent = power;
        dailyUseCell.textContent = dailyUse;
        rateCell.textContent = rate;
        consumptionCell.textContent = dailyConsumption.toFixed(2);

        // Clear the input fields
        document.getElementById("date").value = "";
        document.getElementById("name").value = "";
        document.getElementById("power").value = "";
        document.getElementById("dailyUse").value = "";
        document.getElementById("rate").value = "";
        });

}    


           
          
