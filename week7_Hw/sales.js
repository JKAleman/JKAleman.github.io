"use strict"
/* initialization of arrays r1-5 */
var r1 = [1540, 1130, 1580, 1105];
var r2 = [2010, 1168, 2305, 4102];
var r3 = [2450, 1847, 2710, 2391];
var r4 = [1845, 1491, 1284, 1575];
var r5 = [2120, 1767, 1599, 3888];
var textDisplay = "";

var $ = function (id) 
{
	return document.getElementById(id);
}
var quarter_click = function () 
{
	//clear text display before completeing rest of function
	textDisplay = "";
	
	//display sales by quarter
	var quarter = "";
	for (var i = 0; i < r1.length; i++ ) {
		quarter = "Q" + ( i + 1 ) + ": " + ( r1[i] + r2[i] + r3[i] + r4[i] + r5[i] );
		textDisplay += quarter + "\n";
	}
	$("results").value = textDisplay;
}	
var region_click = function () 
{
	//clear text display before completeing rest of function
	textDisplay = "";
	
	//display sales by region
	var r1_total = 0;
	var r2_total = 0;
	var r3_total = 0;
	var r4_total = 0;
	var r5_total = 0;
	for ( var i = 0; i < r1.length; i++ ) {
		r1_total += r1[i];
		r2_total += r2[i];
		r3_total += r3[i];
		r4_total += r4[i];
		r5_total += r5[i];
	}
	textDisplay += "Sales by Quarter\n";
	textDisplay += "Region 1: " + r1_total + "\nRegion 2: " + r2_total;
	textDisplay += "\nRegion 3: " + r3_total + "\nRegion 4: " + r4_total + "\nRegion 5: " + r5_total;
	
	$("results").value = textDisplay;
}
var total_click = function ()
{
	//clear text display before executing rest of function
	textDisplay = "";
	
	//display the total sales number
	var r1_total = 0;
	var r2_total = 0;
	var r3_total = 0;
	var r4_total = 0;
	var r5_total = 0;
	
	for ( var i = 0; i < r1.length; i++ ) {
		r1_total += r1[i];
		r2_total += r2[i];
		r3_total += r3[i];
		r4_total += r4[i];
		r5_total += r5[i];
	}
	textDisplay += "Total sales: " + ( r1_total + r2_total + r3_total + r4_total + r5_total );
	
	$("results").value = textDisplay;
}

window.onload = function () {
	$("show_quarter").onclick = quarter_click;
	$("show_region").onclick = region_click;
	$("show_total").onclick = total_click;
}


