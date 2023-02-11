function calculateTotal() {
  let total = 0;
  
  // Calculate the cost of the food based on the selected radio button
  const maafeRadio = document.getElementById("maafe");
  const sconeRadio = document.getElementById("scone");
  const poppersRadio = document.getElementById("poppers");
  const shrimpRadio = document.getElementById("shrimp");
  
  if (maafeRadio.checked) {
    total += 15;
  } else if (sconeRadio.checked) {
    total += 10;
  } else if (poppersRadio.checked) {
    total += 14;
  } else if (shrimpRadio.checked) {
    total += 25;
  } else {
    total += 0;
  }
  
  // If the "filling" select box has a selected value, add its cost to the total
  const fillingSelect = document.getElementById("filling");
  
  if (fillingSelect.selectedIndex > 0) {
    const fillingCosts = {
      "Lemon": 5,
      "Custard": 5,
      "Fudge": 7,
      "Mocha": 8,
      "Raspberry": 10,
      "Pineapple": 5,
      "Dobash": 9,
      "Mint": 5,
      "Cherry": 5,
      "Apricot": 8,
      "Buttercream": 7,
      "Chocolate Mousse": 12
    };
    const selectedFilling = fillingSelect.options[fillingSelect.selectedIndex].value;
    total += fillingCosts[selectedFilling];
  }
  
  // If any checkbox is selected, multiple the food cost by 2
  const checkboxes = document.getElementsByName("character");
  let numChecked = 0;
  
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      numChecked++;
    }
  }
  
  total *= numChecked;
  
  // Output the total
  alert(`Total: $${total}`);
}
