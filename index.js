// Prompt user to enter list of froyo flavors
function getFroyoOrder() {
  const userInput = prompt(
    "Enter your froyo flavors here, separated by commas (e.g., vanilla, strawberry, chocolate):"
  );

  if (!userInput) {
    console.log("No flavors entered.");
    return;
  }

  // Split string into array
  // I googled how to get a defined callback function on each element of an array and return an array that contains the results. Maybe there's an easier way?
  const flavorsArray = userInput.split(",").map((flavor) => flavor.trim());

  // Count occurences of each flavor
  const flavorCounts = countFlavors(flavorsArray);

  // Console results
  console.table(flavorCounts);
}

// Function for counting each flavor in the array
function countFlavors(flavors) {
  const counts = {};

  // Loop thru array of flavors and update the counts obj
  for (const flavor of flavors) {
    counts[flavor] = (counts[flavor] || 0) + 1;
  }

  return counts;
}

// Function call when page loads
getFroyoOrder();
