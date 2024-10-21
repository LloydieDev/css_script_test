// Prefill form with URL parameters and update the introduction paragraph
function prefillForm() {
  const urlParams = new URLSearchParams(window.location.search);

  // Capture all parameters
  const callerId = urlParams.get("callerid") || "";
  const firstName = urlParams.get("firstname") || "";
  const lastName = urlParams.get("lastname") || "";
  const state = urlParams.get("state") || "";
  const trusted = urlParams.get("trusted") || "";
  const dob = urlParams.get("dob") || "";
  const gender = urlParams.get("gender") || "";
  const ip = urlParams.get("ip") || "";
  const zip = urlParams.get("zip") || "";
  const leadId = urlParams.get("Lead_ID") || "";
  const age = urlParams.get("age") || "";
  const sourceName = urlParams.get("sourcename") || "";
  const city = urlParams.get("city") || "";
  const address = urlParams.get("address") || "";
  const agent = urlParams.get("agent") || "";
  const vendorLeadCode = urlParams.get("vendorleadcode") || "";
  const entryDate = urlParams.get("entrydate") || "";
  const jornaya = urlParams.get("jornaya") || "";
  const incidentDate = urlParams.get("incident_date") || "";
  const sourceUrl = urlParams.get("source_url") || "";
  const injuryType = urlParams.get("injury_type") || "";
  const email = urlParams.get("email") || "";
  const agentName = urlParams.get("agentname") || "";

  // Prefill form fields
  document.getElementById("callerid").value = callerId;
  document.getElementById("firstname").value = firstName;
  document.getElementById("lastname").value = lastName;
  document.getElementById("state").value = state;
  document.getElementById("trusted").value = trusted;
  document.getElementById("dob").value = dob;
  document.getElementById("gender").value = gender;
  document.getElementById("ip").value = ip;
  document.getElementById("zip").value = zip;
  document.getElementById("leadId").value = leadId;
  document.getElementById("age").value = age;
  document.getElementById("sourcename").value = sourceName;
  document.getElementById("city").value = city;
  document.getElementById("address").value = address;
  document.getElementById("agent").value = agent;
  document.getElementById("vendorleadcode").value = vendorLeadCode;
  document.getElementById("entrydate").value = entryDate;
  document.getElementById("jornaya").value = jornaya;
  document.getElementById("incident_date").value = incidentDate;
  document.getElementById("source_url").value = sourceUrl;
  document.getElementById("injury_type").value = injuryType;
  document.getElementById("email").value = email;
  document.getElementById("agentname").value = agentName;

  // Update the paragraph with the user's information
  document.getElementById(
    "introParagraph"
  ).innerHTML = `Hello, is this <strong>${firstName}</strong>? Hi <strong>${firstName}</strong> this is <strong>${agentName}</strong> from Financial Relief Center calling on a recorded line.`;
  // Update the paragraph with the user's information
  document.getElementById(
    "Q2Paragraph"
  ).innerHTML = `OK <strong>${firstName}</strong>, how about unsecured loans?`;

  //update the information in Q6
  document.getElementById(
    "q6info"
  ).innerHTML = `I have your first name as <strong>${firstName}</strong>, is that correct? <br>
     And for last name, I have <strong>${lastName}</strong>, do I have that right?<br>
     Finally, I have your state as <strong>${state}</strong>. Is that up to date?<br>
`;

  //update the handoff message
  document.getElementById("handOffMessage").innerHTML = 
  `Hi, this is <strong>${agentName}</strong>, and I have <strong>${firstName}</strong> on the line.  They have $10,000 or more of unsecured debt and are interested in speaking with you about debt relief options. <NO PAUSE> <strong>${firstName}</strong> are you still on the line? 
Thank you for your time and I hope you have a great day.
    `;
}

// Ensure the form is prefilled once the window loads
window.onload = prefillForm;

// script.js

function updateQ3() {
  const creditLoan =
    parseFloat(document.getElementById("credit_loan").value) || 0;
  const unsecuredLoan =
    parseFloat(document.getElementById("unsecured_loan").value) || 0;

  // Update Q3 output
  document.getElementById(
    "Q3Output"
  ).innerHTML = `For credit card debt I have $${creditLoan}, and for Personal Loans I have $${unsecuredLoan}.`;

  // Calculate total debt
  const totalDebt = creditLoan + unsecuredLoan;

  // Display the total debt
  document.getElementById(
    "totalDebtOutput"
  ).innerHTML = `Your TOTAL debt, including your credit card and personal loans is: $${totalDebt.toFixed(
    2
  )}`;

  // Qualification logic
  const QualifiedMessage = document.getElementById("QualifiedMessage");
  const notQualifiedMessage = document.getElementById("notQualifiedMessage");

  if (totalDebt >= 10000) {
    QualifiedMessage.innerHTML = "You are now Qualified"; // Clear message
    notQualifiedMessage.innerHTML = "";
  } else {
    notQualifiedMessage.innerHTML =
      `Sorry but you are not qualified due to the total debt being under $10,000.
       <br><br><button id="closeTabButton" type="button" onclick="closeTab()" style="background-color: #b91f45;">Close Tab</button>
      `; // Set qualification message
    QualifiedMessage.innerHTML = "";
  }
}

// Event listeners for input changes
document.getElementById("credit_loan").addEventListener("input", updateQ3);
document.getElementById("unsecured_loan").addEventListener("input", updateQ3);

// when the call is tranffered
document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("callForm")
    .addEventListener("submit", function (event) {
      // Prevent the default form submission
      event.preventDefault();

      // Show the modal
      document.getElementById("pleaseWaitModal").style.display = "flex";

      // Open the link in a new tab and submit the form data
      const formData = new FormData(this);
      const queryString = new URLSearchParams(formData).toString();
      const url = `https://display.ringba.com/enrich/2461071299087172853?${queryString}`;
      window.open(url, "_blank");
    });

  // Function to close the modal
  window.closeModal = function () {
    document.getElementById("pleaseWaitModal").style.display = "none";
  };
});

function updateQ4() {
  // Get the source income variable
  const sourceIncome =
    parseFloat(document.getElementById("source_income").value) || 0;

  // Source income qualification message variables
  const sourceIncomeQualifiedMessage = document.getElementById(
    "SourceIncomeQualifiedMessage"
  );
  const notSourceIncomeQualifiedMessage = document.getElementById(
    "notSourceIncomeQualifiedMessage"
  );

  // Check qualification
  if (sourceIncome > 0) {
    sourceIncomeQualifiedMessage.innerHTML = "You are now Qualified";
    notSourceIncomeQualifiedMessage.innerHTML = ""; // Clear non-qualification message
  } else {
    sourceIncomeQualifiedMessage.innerHTML = ""; // Clear qualification message
    notSourceIncomeQualifiedMessage.innerHTML = `
            Sorry, but you are not qualified due to no income. 
            <br><br><button id="closeTabButton" type="button" onclick="closeTab()" style="background-color: #b91f45;">Close Tab</button>
        `;
  }
}

// Function to close the tab
function closeTab() {
  window.close();
}

// Attach the event listener to input field
document.getElementById("source_income").addEventListener("input", updateQ4);

function updateQ() {
  // Get the source income variable
  const sourceIncome =
    parseFloat(document.getElementById("currently_enrolled").value) || 0;

  // Source income qualification message variables
  const sourceIncomeQualifiedMessage = document.getElementById(
    "SourceIncomeQualifiedMessage"
  );
  const notSourceIncomeQualifiedMessage = document.getElementById(
    "notSourceIncomeQualifiedMessage"
  );

  // Check qualification
  if (sourceIncome > 0) {
    sourceIncomeQualifiedMessage.innerHTML = "You are now Qualified";
    notSourceIncomeQualifiedMessage.innerHTML = ""; // Clear non-qualification message
  } else {
    sourceIncomeQualifiedMessage.innerHTML = ""; // Clear qualification message
    notSourceIncomeQualifiedMessage.innerHTML = `
            Sorry, but you are not qualified due to no income. 
            <br><br><button id="closeTabButton" type="button" onclick="closeTab()" style="background-color: #b91f45;">Close Tab</button>
        `;
  }
}

//Q5 validation

function Q5() {
  const currentlyEnrolled = document.getElementById("currently_enrolled").value;

  // Source income qualification message variables
  const isNotCurrentlyEnrolled = document.getElementById(
    "isNotCurrentlyEnrolled"
  );
  const isCurrentlyEnrolled = document.getElementById("isCurrentlyEnrolled");

  if (currentlyEnrolled === "yes") {
    isCurrentlyEnrolled.innerHTML = `
            Sorry, but you are not qualified due to currently enrolled. 
            <br><br><button id="closeTabButton" type="button" onclick="closeTab()" style="background-color: #b91f45;">Close Tab</button>
        `;
    isNotCurrentlyEnrolled.innerHTML = "";
  } else {
    isCurrentlyEnrolled.innerHTML = "";
    isNotCurrentlyEnrolled.innerHTML = "You are now Qualified";
  }
}

document.getElementById("currently_enrolled").addEventListener("change", Q5);
