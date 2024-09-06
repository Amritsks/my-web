document.addEventListener("DOMContentLoaded", function() {
    // Get the order button
    const orderButton = document.querySelector(".order-button");
  
    // Add a click event listener to the order button
    orderButton.addEventListener("click", function() {
      // Redirect to the order.html page
      window.location.href = "order.html";
    });
  });
  
//    second One.

  

// js code for submittion of suggestion

document.getElementById("suggestionForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Get form values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var suggestion = document.getElementById("suggestion").value;

  // Clear the form
  document.getElementById("suggestionForm").reset();

  // Show a success message
  document.getElementById("successMessage").innerHTML = "Thank you, " + name + "! Your suggestion has been submitted.";

  // Optionally: Send the data to a server (e.g., via an API or backend service)
  // This step would require server-side programming
});





// document.getElementById("paymentForm").addEventListener("submit", function (event) {
//   event.preventDefault();

//   // Get form values
//   var paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
//   var upiId = document.getElementById("upiId").value;
//   var phoneNumber = document.getElementById("phoneNumber").value;

//   // Show success message
//   var successMessage = "Payment initiated via " + paymentMethod + ". ";
//   if (upiId) {
//       successMessage += "UPI ID: " + upiId + ".";
//   } else if (phoneNumber) {
//       successMessage += "Phone Number: " + phoneNumber + ".";
//   }

//   document.getElementById("successMessage").innerHTML = successMessage;

//   // Optionally, you can send the data to a server for processing the payment
// });
