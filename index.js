//WLC

	function checkreqs() {

	var reqs = document.getElementsByClassName('req');
	for (var i = 0; i < reqs.length; i++) {
		if ( reqs[i].value === '') {
			return false;
		}
	}
return true;
}

document.getElementById('submit').onclick = function(){

	if (!checkreqs()) {
		alert('Please fill in all the required fields.');
	} else {


	//required
	var gender = "female"; //document.getElementsByName('gender');

	var age = document.getElementById('age').value;
	var weight = document.getElementById('lbs').value;
	var feet = document.getElementById('feet').value;
	var inches = document.getElementById('inches').value;

	var activitylevel = document.getElementById('activitylevel').value;


	//optional
	var intendedcals = document.getElementById('intendedcals').value;
	
	// TODO how to handle dates?
	var finishdate = new Date(document.getElementById('finishdate').value);

	var goalweight = document.getElementById('goalweight').value;
	var goalBMI = document.getElementById('goalBMI').value;
	var framesize = document.getElementById('framesize').value;


	//check for blanks, if blank alert


	//calculate results and store in variables

	var height = (Number(feet) * 12) + Number(inches);

	var idealweightlow = (18.5 * (height * height)) / 703; //lower limit healthy bmi
	var idealweighthigh = (25 * (height * height)) / 703; //upper limit healthy bmi
	var BMI = (weight / (height * height)) * 703;
	
	var adjustedbmi;

// TODO what and how will adjustedbmi affect results?

	switch(framesize) {
		case 0.9:
			adjustedbmi = BMI * 1.1;
			break;
		case 1.1:
			adjustedbmi = BMI * 0.9;
			break;
		default:
			adjustedbmi = BMI;
	}

	var goalBMIresult = (goalBMI * (height * height)) / 703;

	var BMR;
	if (gender == "male") {
		BMR = (6.25 * weight) + (12.7 * height) - (6.76 * age) + 66; 
	}
	else {
		BMR = (4.35 * weight) + (4.7 * height) - (4.68 * age) + 655;
	}

	var TDEE = BMR * activitylevel;

	var lose1 = TDEE - 250; //lose 0.5lbs per week
	var lose2 = TDEE - 500; //lose 1lb p/w
	var lose3 = TDEE - 1000; //lose 2lbs p/w


	var deficit = TDEE - intendedcals;

	var todaysdate = new Date();

	var daystofinishdate = ( (finishdate.getTime() / 86400000) - (todaysdate.getTime() / 86400000));
	var daystoreachgoal = ((weight - goalweight) * 3500) / deficit;

	var dategoalreached = new Date();
  dategoalreached.setTime( dategoalreached.getTime () + daystoreachgoal * 86400000);

  	var finishdateweight = weight - ((deficit * daystofinishdate) /3500); 

  	var calstoreachgoal = 1500 - (((weight - goalweight) * 3500) / daystofinishdate);

	var idealweightrange = 'Your current weight is ' + weight + ' lbs. Your ideal weight range is between ' + Math.round( idealweightlow * 10) / 10 + ' lbs and ' + Math.round( idealweighthigh * 10) / 10 + ' lbs.<br>';
	var BMIresults = 'Your current BMI is ' + Math.round( BMI * 10) / 10 + '. To achieve your goal BMI of ' + goalBMI + ' you would need to weigh ' + Math.round( goalBMIresult * 10) / 10 + ' lbs.<br>';
	var BMRresults =  'Your BMR is ' + Math.round( BMR ) + ' calories per day.<br>';
	var TDEEresults = 'Your TDEE is ' + Math.round( TDEE ) + ' calories per day.<br>';
	var tolose = 'To lose 0.5 lbs per week, consume ' + Math.round( lose1 ) + ' calories per day.<br> To lose 1 lb per week, consume ' + Math.round( lose2 ) + ' calories per day.<br>To lose 2 lbs per week, consume ' + Math.round( lose3 ) + ' calories per day.<br>';
	
	var predictor = 'If you consume ' + intendedcals + ' calories per day, you will reach your goal weight of ' + goalweight + ' lbs on ' + dategoalreached.toDateString() + '.<br>On ' + finishdate.toDateString() + ' you would weigh ' + Math.round(finishdateweight * 10) / 10 + ' lbs.<br>To weigh ' + goalweight + ' lbs on ' + finishdate.toDateString() + ' you would need to consume ' + Math.round(calstoreachgoal) + ' calories per day.<br>';
	
	var zigzag = 'Zig Zag Diet Planner<br>Day 1 calories: ' + intendedcals * 1.4 + '<br>Day 2 calories: ' + intendedcals * 0.5 + '<br>Day 3 calories: ' + intendedcals * 1.2 + '<br>Day 4 calories: ' + intendedcals * 0.9 + '<br>Day 5 calories: ' + intendedcals * 1.3 + '<br>Day 6 calories: ' + intendedcals * 0.7 + '<br>Day 7 calories: ' + intendedcals + '<br>';

	var fivetwo = '5:2 Diet Planner<br>Two low calorie days of ' + Math.round(TDEE * 0.25) + ' calories per day<br>Five normal calorie days of ' + Math.round(TDEE) + ' calories per day.<br>'; 



	var results = 'height is:' + height + '<br><br>' + idealweightrange + BMIresults + BMRresults + TDEEresults + tolose + predictor + zigzag + fivetwo;


	document.getElementById('results').innerHTML = results;
	//puts results in container
	
	document.getElementById('input').style.display = 'none';
	document.getElementById('results').style.display = 'block';
}
};

//reloads everything
document.getElementById('reset').onclick = function(){
  history.go(0);
};