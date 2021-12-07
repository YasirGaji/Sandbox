document.getElementById('loan_form').addEventListener('submit', calculateResults); // this listens for the submit event 

function calculateResults(e){
    // INITIALIZING UI VARIABLES
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly_payment');
  const totalPayment = document.getElementById('total_payment');
  const totalInterest = document.getElementById('total_interest');

    // ASSIGNING FORMULAR VARIABLES TO UI VARIABLES
  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

    // THE MONTHLY PAYMENT FORMULAR
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal*x*calculatedInterest)/(x-1);

  if(isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);
  } else {
    showError('Please check your numbers.')
  }

  e.preventDefault();
}; // this calculates the results

function showError(error) {
  const errorDiv = document.createElement('div'); // this creates a div

    // GETTING CARD & HEADING ELEMENT
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  errorDiv.className = 'alert alert-danger'; // this adds a class to the div

  errorDiv.appendChild(document.createTextNode(error)); // this adds a textnode as a child element

  card.insertBefore(errorDiv, heading); // this puts the error div before the heading element

  setTimeout(clearError, 3000);
}; // this shows error message if input fields are not filled

function clearError() {
  document.querySelector('.alert').remove();
}; // this selects the alert element for the clear error method 