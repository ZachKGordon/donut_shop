var Location = function(name,min,max,avg,hours) {
  this.name=name;
  this.min=min;
  this.max=max;
  this.avg=avg;
  this.hours = 4;
}

// Instantiation of locations
var downtown = new Location("Downtown",8,43,4.5);
var cap_hill = new Location("Capital Hill",4,37,2.);
var sL_union = new Location("South Lake Union",9,23,6.33);
var wWood = new Location("Wedgewood",2,28,1.25);
var ballard = new Location("Ballard",8,58,3.75);

// Variables
var table, newRow, newData, newText;
var hoursOpen = ['Location','7:00am', '8:00am', '9:00am', '10:00am', '11:00am']
var newPlace, newMin, newMax, newAvg, newLocation;


// Hours made into headers
var table = document.getElementById('tableStartam');
var headers = function(){
  for ( var i=0; i < hoursOpen.length; i++){
    newRow = document.createElement('th');
    newText = document.createTextNode(hoursOpen[i]);
    newRow.appendChild(newText);
    tableam.appendChild(newRow);
  }
}


// Random number function
Location.prototype.generateRandom = function() {
  return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
}

//  Production function
Location.prototype.hourly = function() {
   return parseInt(this.generateRandom() * this.avg);
}

var tableam = document.getElementById('tableStartam');

//Creates table
Location.prototype.createTam = function() {
    var hour = this.hourly();
    var total = 0;

// creates name column
    newRow = document.createElement('tr');
    newData = document.createElement('td');
    newText = document.createTextNode(this.name);
    newData.appendChild(newText);
    newRow.appendChild(newData);
    tableam.appendChild(newRow);

// creates table data and total data
  for (var i=0; i<this.hours; i++) {
    var hour = this.hourly();
    newData = document.createElement('td');
    newText = document.createTextNode(hour);
    newData.appendChild(newText);
    newRow.appendChild(newData);
    tableam.appendChild(newRow);
    total += hour;
  }
// creates total column
    newData = document.createElement('td');
    newText = document.createTextNode(total);
    newData.appendChild(newText);
    newRow.appendChild(newData);
    tableam.appendChild(newRow);

}

headers();
downtown.createTam();
cap_hill.createTam();
sL_union.createTam();
wWood.createTam();
ballard.createTam();

var Location = function(name,min,max,avg,hours) {
  this.name=name;
  this.min=min;
  this.max=max;
  this.avg=avg;
  this.hours = 7;
}

// Instantiation of locations
var downtown = new Location("Downtown",8,43,4.5);
var cap_hill = new Location("Capital Hill",4,37,2.);
var sL_union = new Location("South Lake Union",9,23,6.33);
var wWood = new Location("Wedgewood",2,28,1.25);
var ballard = new Location("Ballard",8,58,3.75);

// Variables
var table, newRow, newData, newText;
var hoursOpen = ['','12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', 'Total'];

var newPlace, newMin, newMax, newAvg, newLocation

// Buttons and input
var makePlace = function(e){
  e.preventDefault();
   newPlace = document.getElementById('local').value;
   newMin = document.getElementById('min').value;
   newMax = document.getElementById('max').value;
   newAvg = document.getElementById('avg').value;
   newLocation = new Location(newPlace, newMin, newMax, newAvg);
   newLocation.createTPm();
}

var el = document.getElementById('button');
el.addEventListener('click', makePlace, false);

// Hours made into headers
var tablePm = document.getElementById('tableStartPm');
var headers = function(){
  for ( var i=0; i < hoursOpen.length; i++){
    newRow = document.createElement('th');
    newText = document.createTextNode(hoursOpen[i]);
    newRow.appendChild(newText);
    tablePm.appendChild(newRow);
  }
}


// Random number function
Location.prototype.generateRandom = function() {
  return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
}

//  Production function
Location.prototype.hourly = function() {
   return parseInt(this.generateRandom() * this.avg);
}

var tablePm = document.getElementById('tableStartPm');

//Creates table
Location.prototype.createTPm = function() {
    var hour = this.hourly();
    var total = 0;

// creates name column
    newRow = document.createElement('tr');
    newData = document.createElement('td');
    newText = document.createTextNode(this.name);
    newData.appendChild(newText);
    newRow.appendChild(newData);
    tablePm.appendChild(newRow);

// creates table data and total data
  for (var i=0; i<this.hours; i++) {
    var hour = this.hourly();
    newData = document.createElement('td');
    newText = document.createTextNode(hour);
    newData.appendChild(newText);
    newRow.appendChild(newData);
    tablePm.appendChild(newRow);
    total += hour;
  }
// creates total column
    newData = document.createElement('td');
    newText = document.createTextNode(total);
    newData.appendChild(newText);
    newRow.appendChild(newData);
    tablePm.appendChild(newRow);

}

headers();
downtown.createTPm();
cap_hill.createTPm();
sL_union.createTPm();
wWood.createTPm();
ballard.createTPm();


