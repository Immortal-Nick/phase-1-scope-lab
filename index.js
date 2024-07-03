// Write your solution in this file!
var customerName = 'bob';

// Function to uppercase customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function getCustomerName() {
    return customerName;
  }
  
  function setBestCustomer() {
    bestCustomer = 'not bob'; // This will declare a global variable
  }
  
  // Function to overwrite the global bestCustomer variable
  function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
  }
  
  // Function to return bestCustomer
  function getBestCustomer() {
    return bestCustomer;
  }
  
  const leastFavoriteCustomer = 'faith';

  function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer='jane';
  }
