// document.getElementById("next-button").addEventListener("click", function() {
//     // Get personal information
//     const name = document.getElementById("name").value;
//     const phone = document.getElementById("phone").value;
//     const hostel = document.getElementById("hostel").value;
//     const room = document.getElementById("room").value;

//     // Display personal information in summary
//     document.getElementById("summary-name").textContent = name;
//     document.getElementById("summary-phone").textContent = phone;
//     document.getElementById("summary-hostel").textContent = hostel;
//     document.getElementById("summary-room").textContent = room;

//     // Get selected items
//     const selectedItems = document.querySelectorAll(".menu-item:checked");
//     const itemList = document.getElementById("selected-items");
//     itemList.innerHTML = ""; // Clear the list
//     let totalPrice = 0;

//     selectedItems.forEach(function(item) {
//         const quantity = item.closest('tr').querySelector('.quantity').value;
//         const price = item.dataset.price * quantity;
//         totalPrice += price;

//         const listItem = document.createElement("li");
//         listItem.textContent = `${item.dataset.dish} - ₹${item.dataset.price} x ${quantity} = ₹${price}`;
//         itemList.appendChild(listItem);
//     });

//     // Display total price
//     document.getElementById("total-price").textContent = totalPrice;

//     // Show the summary box
//     document.getElementById("summary-box").style.display = "block";
// });

// document.getElementById("pay-button").addEventListener("click", function() {
//     alert("Proceeding to payment...");
// });


document.getElementById("next-button").addEventListener("click", function() {
    // Get personal information
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const hostel = document.getElementById("hostel").value;
    const room = document.getElementById("room").value;

    // Display personal information in summary
    document.getElementById("summary-name").textContent = name;
    document.getElementById("summary-phone").textContent = phone;
    document.getElementById("summary-hostel").textContent = hostel;
    document.getElementById("summary-room").textContent = room;

    // Get selected items
    const selectedItems = document.querySelectorAll(".menu-item:checked");
    const itemList = document.getElementById("selected-items");
    itemList.innerHTML = ""; // Clear the list
    let totalPrice = 0;

    selectedItems.forEach(function(item) {
        const quantity = item.closest('tr').querySelector('.quantity').value;
        const price = item.dataset.price * quantity;
        totalPrice += price;

        const listItem = document.createElement("li");
        listItem.textContent = `${item.dataset.dish} - ₹${item.dataset.price} x ${quantity} = ₹${price}`;
        itemList.appendChild(listItem);
    });

    // Display total price
    document.getElementById("total-price").textContent = totalPrice;

    // Show the summary box
    document.getElementById("summary-box").style.display = "block";
});

document.getElementById("pay-button").addEventListener("click", function() {
    alert("Click ok! for \n Redirecting to payment options");
    window.location.href = "payment.html";
});



document.getElementById('next-button').addEventListener('click', function() {
    // Collect form data
    const formData = {
      name: document.getElementById('name').value,
      phone: document.getElementById('phone').value,
      hostel: document.getElementById('hostel').value,
      room: document.getElementById('room').value,
      menu: []
    };
  
    // Collect selected menu items
    document.querySelectorAll('.menu-item').forEach(item => {
      if (item.checked) {
        formData.menu.push({
          dish: item.getAttribute('data-dish'),
          price: parseFloat(item.getAttribute('data-price')),
          quantity: parseInt(item.nextElementSibling.value)
        });
      }
    });
  
    // Populate hidden input with menu data
    document.getElementById('menu-data').value = JSON.stringify(formData.menu);
  });