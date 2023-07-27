// Class for Smoothie object
class Smoothie {
    constructor(flavor, milkBase, sweetener, toppings) {
      this.flavor = flavor;
      this.milkBase = milkBase;
      this.sweetener = sweetener;
      this.toppings = toppings;
    }
  
    // Method to get the smoothie description
    getSmoothieDescription() {
      return `You ordered a ${this.flavor} smoothie with ${this.milkBase} base, sweetened with ${this.sweetener}, and topped with ${this.toppings.join(", ")}.`;
    }
  }
  
  // Function to be called when the "Order Smoothie" button is clicked
  function orderSmoothie() {
    // Get the form values
    const flavor = document.getElementById("flavor").value;
    const milkBase = document.getElementById("milk").value;
    const sweetener = document.querySelector('input[name="sweetener"]:checked').value;
    const toppings = Array.from(document.getElementById("toppings").selectedOptions).map(option => option.value);
  
    // Create a new Smoothie object
    const smoothie = new Smoothie(flavor, milkBase, sweetener, toppings);
  
    // Display the smoothie description on the page
    const smoothieDescriptionElement = document.getElementById("smoothieDescription");
    smoothieDescriptionElement.textContent = smoothie.getSmoothieDescription();
  }
  