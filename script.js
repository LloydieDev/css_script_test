// Prefill form with URL parameters and update the introduction paragraph
function prefillForm() {
    const urlParams = new URLSearchParams(window.location.search);
    
    // Capture all parameters
    const callerId = urlParams.get('callerid') || '';
    const firstName = urlParams.get('firstname') || '';
    const lastName = urlParams.get('lastname') || '';
    const state = urlParams.get('state') || '';
    const trusted = urlParams.get('trusted') || '';
    const dob = urlParams.get('dob') || '';
    const gender = urlParams.get('gender') || '';
    const ip = urlParams.get('ip') || '';
    const zip = urlParams.get('zip') || '';
    const leadId = urlParams.get('Lead_ID') || '';
    const age = urlParams.get('age') || '';
    const sourceName = urlParams.get('sourcename') || '';
    const city = urlParams.get('city') || '';
    const address = urlParams.get('address') || '';
    const agent = urlParams.get('agent') || '';
    const vendorLeadCode = urlParams.get('vendorleadcode') || '';
    const entryDate = urlParams.get('entrydate') || '';
    const jornaya = urlParams.get('jornaya') || '';
    const incidentDate = urlParams.get('incident_date') || '';
    const sourceUrl = urlParams.get('source_url') || '';
    const injuryType = urlParams.get('injury_type') || '';
    const email = urlParams.get('email') || '';
    const agentName = urlParams.get('agentname') || '';

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
    document.getElementById("introParagraph").innerHTML = 
        `Hello, is this <strong>${firstName}</strong>? Hi <strong>${firstName}</strong> this is <strong>${agentName}</strong> from Financial Relief Center calling on a recorded line.`;
    // Update the paragraph with the user's information
    document.getElementById("Q2Paragraph").innerHTML = 
        `OK <strong>${firstName}</strong>, how about unsecured loans?`;
}

// Ensure the form is prefilled once the window loads
window.onload = prefillForm;

// script.js

function updateQ3() {
    const creditLoan = parseFloat(document.getElementById('credit_loan').value) || 0;
    const unsecuredLoan = parseFloat(document.getElementById('unsecured_loan').value) || 0;
    
    // Update Q3 output
    document.getElementById('Q3Output').innerHTML = `For credit card debt I have $${creditLoan}, and for Personal Loans I have $${unsecuredLoan}.`;
  
    // Calculate total debt
    const totalDebt = creditLoan + unsecuredLoan;
  
    // Display the total debt
    document.getElementById('totalDebtOutput').innerHTML = `Your TOTAL debt, including your credit card and personal loans is: $${totalDebt.toFixed(2)}`;
  
  

    // Qualification logic
    const QualifiedMessage = document.getElementById('QualifiedMessage');
    const notQualifiedMessage = document.getElementById('notQualifiedMessage');

  
    if (totalDebt >= 10000) {
        QualifiedMessage.innerHTML = "You are now Qualified"; // Clear message
        notQualifiedMessage.innerHTML = ""; 
    } else {
        notQualifiedMessage.innerHTML = "Sorry but you are not qualified due to the total debt being under $10,000."; // Set qualification message
        QualifiedMessage.innerHTML = ""; 
    }
  }
  
  // Event listeners for input changes
  document.getElementById('credit_loan').addEventListener('input', updateQ3);
  document.getElementById('unsecured_loan').addEventListener('input', updateQ3);
  
