// 27 Jan 2016 in-class exercise
// public vs. private properties
// getters and setters

// IIFE:
// Immediately invoked function expression
var SolarSystem = (function() {  // note capitalization
  var planetArray = ["Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus","Neptune"]; // PRIVATE variable
  var robotsLanded = ["Earth"]; // PRIVATE variable; initial value; use setter to add more
  var spacecraft = ["Juno",    // another PRIVATE variable
                    "Hayabusa 2",
                    "Cassini",
                    "2001 Mars Odyssey",
                    "Mars Express",
                    "Rosetta",
                    "Mars Reconnaissance Orbiter",
                    "New Horizons",
                    // "ARTEMIS",
                    // "Dawn",
                    // "Lunar Reconnaissance Orbiter",
                    // "Chang-E 2",
                    // "Mangalyaan",
                    // "MAVEN",
                    // "Chang-E 5-T1",
                    "Akatsuki",
                    "Voyager 2"];
  var dwarfPlanets = [];

  return {
    last_modified: Date(),
    getDwarfPlanet: function() {
      return dwarfPlanets;
    },
    addDwarfPlanet: function(newDwarf) {
      dwarfPlanets.push(newDwarf);
      this.last_modified = Date();
    },
    getPlanet: function() {
      return planetArray;
    },
    addRobot: function(newPlanet) {
      robotsLanded.push(newPlanet);
      this.last_modified = Date();
    },
    getRobot: function() {
      return robotsLanded;
    },
    getCraft: function() {
      return spacecraft;
    },
    addCraft: function(newSpacecraft) {
      spacecraft.push(newSpacecraft);
      this.last_modified = Date();
    }
  };
})(SolarSystem || {});

