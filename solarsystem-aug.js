//augmentation of SolarSystem

var SolarSystem = (function (oldSolarSystem) {
  var age = "4 By";
  var stellarClass = "G2V";

  // create new k:v pair in oldSolarSystem
  oldSolarSystem.getAge = function() {
    return age;
  };

  // create new k:v pair in oldSolarSystem object
  oldSolarSystem.setAge = function(newAge) {
    age = newAge;
    this.last_modified = Date();
  };

  // create new k:v pair in oldSolarSystem
  oldSolarSystem.getStellarClass = function() {
    return stellarClass;
  };

  // create new k:v pair in oldSolarSystem object
  oldSolarSystem.setStellarClass = function(newStellarClass) {
    stellarClass = newStellarClass;
    this.last_modified = Date();
  };

  return oldSolarSystem;  // return object

})(SolarSystem || {});