function checkCP() {
	var grades = document.forms[0];
	var total=0;
	var i=0;
	var yourGrade = "";

	for(i=0; i<grades.length; i++) {
		if(grades[i].value >= 2.5 && grades[i+1].checked) {
			total++;
		}
	}
	document.getElementById("f1").innerHTML = "Number of ECs: " + total;

	switch (total) {
		case 6:
    			yourGrade = "A";
    		break;
		case 5:
    			yourGrade = "B";
    		break;
		case 4:
    			yourGrade = "C";
    		break;
		case 3:
    			yourGrade = "D";
    		break;
		default: 
			yourGrade = "F";
		break;
	}

	document.getElementById("f2").innerHTML = "Your Grade: " + yourGrade;
}

function checkHonors() {
	var grades = document.forms[1];
	var total=0;
	var i=0;
	var yourGrade = "";
	var honorsA = true;

	for(i=0; i<grades.length; i++) {
		if(grades[i].value >= 3.5 && grades[i+1].checked) {
			total++;
		} else if (grades[i].value >= 2.5 && grades[i+1].checked) {
			honorsA = false;
			total++;
		}
	}
	document.getElementById("f1").innerHTML = "Number of ECs: " + total;
	
	if ( !honorsA ) {
		total--;
	}
	
	switch (total) {
		case 6:
    			yourGrade = "A";
    		break;
		case 5:
    			yourGrade = "B";
    		break;
		case 4:
    			yourGrade = "C";
    		break;
		case 3:
    			yourGrade = "D";
    		break;
		default: 
			yourGrade = "F";
		break;
	}

	document.getElementById("f2").innerHTML = "Your Grade: " + yourGrade;
}

function checkCP2() {
	var grades = document.forms[0];
	var total=0;
	var i=0;
	var yourGrade = "";

	for(i=0; i<grades.length; i++) {
		if(grades[i].value >= 2.5 && grades[i+1].checked) {
			total++;
		}
	}
	document.getElementById("f1").innerHTML = "Number of ECs: " + total;

	switch (total) {
		case 6:
    			yourGrade = "A";
    		break;
		case 5:
    			yourGrade = "B";
    		break;
		case 4:
    			yourGrade = "C";
    		break;
		case 3:
    			yourGrade = "D";
    		break;
		default: 
			yourGrade = "F";
		break;
	}

	document.getElementById("f2").innerHTML = "Your Grade: " + yourGrade  + "!";
}

function checkHonors2() {
	var grades = document.forms[1];
	var total=0;
	var i=0;
	var yourGrade = "";
	var honorsA = true;

	for(i=0; i<grades.length; i++) {
		if(grades[i].value >= 3.5 && grades[i+1].checked) {
			total++;
		} else if (grades[i].value >= 2.5 && grades[i+1].checked) {
			honorsA = false;
			total++;
		}
	}
	document.getElementById("f1").innerHTML = "Number of ECs: " + total;
	
	if ( !honorsA ) {
		total--;
	}
	
	switch (total) {
		case 6:
    			yourGrade = "A";
    		break;
		case 5:
    			yourGrade = "B";
    		break;
		case 4:
    			yourGrade = "C";
    		break;
		case 3:
    			yourGrade = "D";
    		break;
		default: 
			yourGrade = "F";
		break;
	}

	document.getElementById("f2").innerHTML = "Your Grade: " + yourGrade + "!";
}