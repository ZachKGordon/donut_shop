
// Location Constructor
var Location = function(name,min,max,avg) {
  this.name=name;
  this.min=min;
  this.max=max;
  this.avg=avg;
}

// Random number function and average calculator
Location.prototype.generateRandom = function() {
  return Math.floor(Math.random() * (((this.max - this.min + 1)) + this.min) * this.avg)
}

// Instantiation of locations
var downtown = new Location("Downtown",8,43,4.50);
var cap_hill = new Location("Capital Hill",4,37,2.00);
var sL_union = new Location("South Lake Union",9,23,6.33);
var wWood = new Location("Wedgewood",2,28,1.25);
var ballard = new Location("Ballard",8,58,3.75);

// For loop making 11 hours
hourlyArray = []
Location.prototype.daily = function() {
  var total = 0;
  for (i=0;i<=11;i++) {
    total += hourlyArray.push(this.generateRandom());
  }
  return total;
}


var dataEntry = function(spot,id){
element_node = document.createElement('td');
var text_node    = document.createTextNode(spot);
element_node.appendChild(text_node);
var position = document.getElementById(id);
position.appendChild(element_node);
}

dataEntry(downtown.generateRandom(),"D1");
dataEntry(downtown.generateRandom(),"D2");
dataEntry(downtown.generateRandom(),"D3");
dataEntry(downtown.generateRandom(),"D4");
dataEntry(downtown.generateRandom(),"D5");
dataEntry(downtown.generateRandom(),"D6");
dataEntry(downtown.generateRandom(),"D7");
dataEntry(downtown.generateRandom(),"D8");
dataEntry(downtown.generateRandom(),"D9");
dataEntry(downtown.generateRandom(),"D10");
dataEntry(downtown.generateRandom(),"D11");
dataEntry(downtown.generateRandom(),"D12");
dataEntry(downtown.daily(),"D13");

dataEntry(cap_hill.generateRandom(),"C1");
dataEntry(cap_hill.generateRandom(),"C2");
dataEntry(cap_hill.generateRandom(),"C3");
dataEntry(cap_hill.generateRandom(),"C4");
dataEntry(cap_hill.generateRandom(),"C5");
dataEntry(cap_hill.generateRandom(),"C6");
dataEntry(cap_hill.generateRandom(),"C7");
dataEntry(cap_hill.generateRandom(),"C8");
dataEntry(cap_hill.generateRandom(),"C9");
dataEntry(cap_hill.generateRandom(),"C10");
dataEntry(cap_hill.generateRandom(),"C11");
dataEntry(cap_hill.generateRandom(),"C12");
dataEntry(cap_hill.daily(),"C13");

dataEntry(sL_union.generateRandom(),"S1");
dataEntry(sL_union.generateRandom(),"S2");
dataEntry(sL_union.generateRandom(),"S3");
dataEntry(sL_union.generateRandom(),"S4");
dataEntry(sL_union.generateRandom(),"S5");
dataEntry(sL_union.generateRandom(),"S6");
dataEntry(sL_union.generateRandom(),"S7");
dataEntry(sL_union.generateRandom(),"S8");
dataEntry(sL_union.generateRandom(),"S9");
dataEntry(sL_union.generateRandom(),"S10");
dataEntry(sL_union.generateRandom(),"S11");
dataEntry(sL_union.generateRandom(),"S12");
dataEntry(sL_union.daily(),"S13");

dataEntry(wWood.generateRandom(),"W1");
dataEntry(wWood.generateRandom(),"W2");
dataEntry(wWood.generateRandom(),"W3");
dataEntry(wWood.generateRandom(),"W4");
dataEntry(wWood.generateRandom(),"W5");
dataEntry(wWood.generateRandom(),"W6");
dataEntry(wWood.generateRandom(),"W7");
dataEntry(wWood.generateRandom(),"W8");
dataEntry(wWood.generateRandom(),"W9");
dataEntry(wWood.generateRandom(),"W10");
dataEntry(wWood.generateRandom(),"W11");
dataEntry(wWood.generateRandom(),"W12");
dataEntry(wWood.daily(),"W13");

dataEntry(ballard.generateRandom(),"B1");
dataEntry(ballard.generateRandom(),"B2");
dataEntry(ballard.generateRandom(),"B3");
dataEntry(ballard.generateRandom(),"B4");
dataEntry(ballard.generateRandom(),"B5");
dataEntry(ballard.generateRandom(),"B6");
dataEntry(ballard.generateRandom(),"B7");
dataEntry(ballard.generateRandom(),"B8");
dataEntry(ballard.generateRandom(),"B9");
dataEntry(ballard.generateRandom(),"B10");
dataEntry(ballard.generateRandom(),"B11");
dataEntry(ballard.generateRandom(),"B12");
dataEntry(ballard.daily(),"B13");


console.log(downtown.hourlyArray);


