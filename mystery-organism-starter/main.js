// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"]; // DNA bases
  return dnaBases[Math.floor(Math.random() * 4)]; // Randomly pick one base
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase()); // Push a random DNA base to the strand
  }
  return newStrand;
};

// Factory function to create a pAequor object
const pAequorFactory = (num, arr) => {
  return {
    _specimenNum: num, // Unique identifier for the specimen
    _dna: arr, // DNA strand of the specimen

    // Getter for the DNA strand
    get dna() {
      return this._dna;
    },

    // Getter for the specimen number
    get specimenNum() {
      return this._specimenNum;
    },

    // Method to mutate the DNA by changing one random base to a different base
    mutate() {
      let index = Math.floor(Math.random() * 15); // Pick a random index
      let dnaBase = this._dna[index]; // Store the base at the chosen index
      let newBase = returnRandBase(); // Generate a random base
      // Ensure the new base is different from the current base
      while (dnaBase === newBase) {
        newBase = returnRandBase();
      }
      this._dna[index] = newBase; // Replace the base with the new one
      return this._dna; // Return the mutated DNA
    },

    // Method to compare DNA strands of two specimens and calculate their similarity
    compareDNA(pAequor) {
      let count = 0; // Count matching bases
      let comparingDna = pAequor.dna; // DNA strand of the other specimen
      for (let i = 0; i < this._dna.length; i++) {
        if (this._dna[i] == comparingDna[i]) {
          count += 1; // Increment count for matching bases
        }
      }
      let percentage = (count * 100) / this._dna.length; // Calculate percentage similarity
      return percentage; // Return similarity percentage
    },

    // Method to determine if the specimen is likely to survive
    willLikelySurvive() {
      // Count the number of 'C' and 'G' bases
      let survivalBaseCount = this._dna.filter(
        (base) => base === "C" || base === "G"
      ).length;
      let percentage = (survivalBaseCount * 100) / this._dna.length; // Calculate percentage of 'C' and 'G' bases
      return percentage >= 60; // Return true if percentage >= 60
    },

    // Method to generate the complementary DNA strand
    complementStrand() {
      return this._dna.map((base) => {
        // Map each base to its complementary base
        switch (base) {
          case "A":
            return "T";
          case "T":
            return "A";
          case "C":
            return "G";
          case "G":
            return "C";
        }
      });
    },
  };
};

// Generate 30 instances of pAequor that are likely to survive
const pAequorGenrt = () => {
  let pAequorList = [];
  let pAequor;

  for (let i = 1; i <= 30; i++) {
    pAequor = pAequorFactory(i, mockUpStrand()); // Generate a new specimen
    while (!pAequor.willLikelySurvive()) {
      // Ensure the specimen is likely to survive
      pAequor = pAequorFactory(i, mockUpStrand());
    }
    pAequorList.push(pAequor); // Add the specimen to the list
  }
  return pAequorList; // Return the list of specimens
};

// List of 30 pAequor instances
let pAequorList = pAequorGenrt();

// Function to find the two most related specimens
const mostRelated = (arr) => {
  let maxPercentage = 0; // Store the maximum similarity percentage
  let mostRelatedPair = []; // Store the most related specimens
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let similarity = arr[i].compareDNA(arr[j]); // Compare DNA of two specimens
      if (similarity > maxPercentage) {
        maxPercentage = similarity; // Update the maximum similarity
        mostRelatedPair = [arr[i], arr[j]]; // Update the most related pair
      }
    }
  }

  // Log the most related pair and their similarity percentage
  console.log(
    `The two most related specimens are #${mostRelatedPair[0].specimenNum} and #${mostRelatedPair[1].specimenNum} with ${maxPercentage}% DNA in common.`
  );
  return mostRelatedPair; // Return the most related pair
};

// Find the two most related specimens from the list
mostRelated(pAequorList);
