const log = console.log;
// Listen for submit
document.querySelector('#loan-form').addEventListener('submit', function(e) {
  // Hide results
  document.querySelector('#results').style.display = 'none';

  // Show loader
  document.querySelector('#loading').style.display = 'block';

  setTimeout(calculateResults, 2000);

  e.preventDefault();
});

// Calculate Results
function calculateResults() {
  log(`calculating`);
  // UI Vars
  const amountUI = document.querySelector('#amount');
  const interestUI = document.querySelector('#interest');
  const yearsUI = document.querySelector('#years');
  const monthlyPmtUI = document.querySelector('#monthly-payment');
  const totalPmtUI = document.querySelector('#total-payment');
  const totalIntUI = document.querySelector('#total-interest');

  const principal = parseFloat(amountUI.value);
  const calculatedInterest = (parseFloat(interestUI.value) / 100) / 12;
  const calculatedPmts = parseFloat(yearsUI.value) * 12;

  // Compute monthly pmts
  const x = (1 + calculatedInterest) ** calculatedPmts;
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    monthlyPmtUI.value = monthly.toFixed(2);
    totalPmtUI.value = (monthly * calculatedPmts).toFixed(2);
    totalIntUI.value = ((monthly * calculatedPmts) - principal).toFixed(2);

    // Show results
    document.querySelector('#results').style.display = 'block';
    // Hide loader
    document.querySelector('#loading').style.display = 'none';
  } else {
    showError(`Please check your numbers`);
  }
}

function showError(errorMsg) {
  // Hide loader
  document.querySelector('#loading').style.display = 'none';
  // Create a div 
  const errorDiv = document.createElement(`div`);

  // Get elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  // Add class
  errorDiv.className = 'alert alert-danger';

  // Create text node and append to div
  errorDiv.appendChild(document.createTextNode(errorMsg));
  log({ errorDiv });
  
  // .appendChild(errorDiv);
  log(errorMsg);

  // Insert error above heading
  /* parentNode . insertBefore() method inserts a node as a child, right before an existing child, which you specify.*/
  card.insertBefore(errorDiv, heading);

  // Clear error after 3 secs 
  setTimeout(clearError, 3000);
}

// Clear error 
function clearError() {
  // grabs element with two classes 
  document.querySelector('.alert.alert-danger').remove();
}