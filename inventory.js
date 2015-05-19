
// Location Constructor
var Location = function(name,min,max,avg,hours) {
  this.name=name;
  this.min=min;
  this.max=max;
  this.avg=avg;
  this.hours = 12;
}

// Instantiation of locations
var downtown = new Location("Downtown",8,43,4.5);
var cap_hill = new Location("Capital Hill",4,37,2.);
var sL_union = new Location("South Lake Union",9,23,6.33);
var wWood = new Location("Wedgewood",2,28,1.25);
var ballard = new Location("Ballard",8,58,3.75);

// Variables
var table, newRow, newData, newText;
var hoursOpen = ['Location','7:00am', '8:00am', '9:00am', '10:00am', '11:00am',
'12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', 'Total'];

var table = document.getElementById('tableStart');
var headers = function(){
  for ( var i=0; i < hoursOpen.length; i++){
    newRow = document.createElement('th');
    newText = document.createTextNode(hoursOpen[i]);
    newRow.appendChild(newText);
    table.appendChild(newRow);
  }
}


// Random number function
Location.prototype.generateRandom = function() {
  return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
}

// Hourly production fucntion
Location.prototype.hourly = function() {
   return parseInt(this.generateRandom() * this.avg);
}

var table = document.getElementById('tableStart');


Location.prototype.createT = function() {
  var total = 0;
  newRow = document.createElement('tr');
    var hour = this.hourly();
    newData = document.createElement('td');
    newText = document.createTextNode(this.name);
    newData.appendChild(newText);
    newRow.appendChild(newData);
    table.appendChild(newRow);

  for (var i=0; i<this.hours; i++) {
    var hour = this.hourly();
    newData = document.createElement('td');
    newText = document.createTextNode(hour);
    newData.appendChild(newText);
    newRow.appendChild(newData);
    table.appendChild(newRow);
    total += hour;
  }
    newData = document.createElement('td');
    newText = document.createTextNode(total);
    newData.appendChild(newText);
    newRow.appendChild(newData);
    table.appendChild(newRow);

}

headers();
downtown.createT();
cap_hill.createT();
sL_union.createT();
wWood.createT();
ballard.createT();




