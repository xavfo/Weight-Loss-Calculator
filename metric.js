//WLC
document.getElementById('results').style.display = 'none';
document.getElementById('back').style.display = 'none';

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
	var weight = document.getElementById('kg').value;

	var height = (document.getElementById('cm').value / 100);

	var activitylevel = document.getElementById('activitylevel').value;

	//optional
	var intendedcals = document.getElementById('intendedcals').value;
	
	// TODO how to handle dates?
	var finishdate = new Date(document.getElementById('finishdate').value);

	var goalweight = document.getElementById('goalweight').value;
	var goalBMI = document.getElementById('goalBMI').value;
	var framesize = document.getElementById('framesize').value;
	
	var frame1; // for calculating adjusted bmi
	var frame2; // for calculating adjusted goalbmi and ideal weight range

		switch(framesize) {
		case 'small':
			frame1 = 1.1;
			frame2 = 0.9;
			break;
		case 'large':
			frame1 = 0.9;
			frame2 = 1.1;
			break;
		default:
			frame1 = 1;
			frame2 = 1;
	}

	var BMI = (weight / (height * height)) * frame1;

	var goalBMIresult = (goalBMI * (height * height)) * frame2;

	var idealweightlow = (18.5 * (height * height)) * frame2; //lower limit healthy bmi
	var idealweighthigh = (25 * (height * height)) * frame2; //upper limit healthy bmi

	var BMR;
	if (gender == "male") {
		BMR = 66 + (13.7 * weight) + (5 * (height * 100)) - (6.8 * age);
	}
	else {
		BMR = 655 + (9.6 * weight) + (1.8 * (height * 100)) - (4.7 * age);
	}

	var TDEE = BMR * activitylevel;

	var lose1 = TDEE - 276; //lose 0.25kg per week
	var lose2 = TDEE - 551; //lose 0.5kg p/w
	var lose3 = TDEE - 1102; //lose 1kg p/w

	var today = new Date();

	var daystofinishdate = (finishdate.getTime() / 86400000) - (today.getTime() / 86400000);

	var daystoreachgoal = ((weight - goalweight) * 7716) / (TDEE - intendedcals);
	var dategoalreached = new Date();

  	dategoalreached.setTime(today.getTime() + (daystoreachgoal * 86400000));

  	var finishdateweight = weight - (((TDEE - intendedcals) * daystofinishdate) /7716); 

  	var calstoreachgoal = TDEE - (((weight - goalweight) * 7716) / daystofinishdate);

	var idealweightrange = 'Your current weight is ' + weight + ' kg. Your ideal weight range is between ' + Math.round( idealweightlow * 10) / 10 + ' kg and ' + Math.round( idealweighthigh * 10) / 10 + ' kg.<br>';
	
	var BMIresults = 'Your current BMI is ' + Math.round( BMI * 10) / 10 + '.<br>';
	
	var BMRresults =  'Your BMR is ' + Math.round( BMR ) + ' calories per day.<br>';
	
	var TDEEresults = 'Your TDEE is ' + Math.round( TDEE ) + ' calories per day.<br>';
	
	var tolose = 'To lose 0.5 kg per week, consume ' + Math.round( lose1 ) + ' calories per day.<br> To lose 1 lb per week, consume ' + Math.round( lose2 ) + ' calories per day.<br>To lose 2 kg per week, consume ' + Math.round( lose3 ) + ' calories per day.<br>';
	
	//optionals 



	//goalBMI
	var goalBMIresults;
	if (goalBMI === '') {
		goalBMIresults = '';
	}
	else {
		goalBMIresults = 'To achieve your goal BMI of ' + goalBMI + ' you would need to weigh ' + Math.round( goalBMIresult * 10) / 10 + ' kg.<br>';
	}

	//predictor
	var predictor;
	if (intendedcals === '' || goalweight === '' || finishdate === '') {
		predictor = '';
	}
	else {	
			var predict;
			if (dategoalreached.getTime() < today.getTime()) {
				predict = ' calories per day, you will never reach your goal weight of ' + goalweight + ' kg';
			}
			else {
				predict = ' calories per day, you will reach your goal weight of ' + goalweight + ' kg on ' + dategoalreached.toDateString();
			}


			predictor = 'If you consume ' + intendedcals + predict + '.<br>On ' + finishdate.toDateString() + ' you would weigh ' + Math.round(finishdateweight * 10) / 10 + ' kg.<br>To weigh ' + goalweight + ' kg on ' + finishdate.toDateString() + ' you would need to consume ' + Math.round(calstoreachgoal) + ' calories per day.<br>';
	}

	var zigzag;
	var macros;
	if (intendedcals === '') {
		zigzag = '';
		macros = '';
	}
	else {
			zigzag = 'Zig Zag Diet Planner<br>Day 1 calories: ' + intendedcals * 1.4 + '<br>Day 2 calories: ' + intendedcals * 0.5 + '<br>Day 3 calories: ' + intendedcals * 1.2 + '<br>Day 4 calories: ' + intendedcals * 0.9 + '<br>Day 5 calories: ' + intendedcals * 1.3 + '<br>Day 6 calories: ' + intendedcals * 0.7 + '<br>Day 7 calories: ' + intendedcals + '<br>';


			var losefat = 'To lose fat:<br>' + Math.round(intendedcals * 0.2) + ' calories or ' + Math.round((intendedcals * 0.2) / 4) + ' grams of carbohydrate per day.<br>' + Math.round(intendedcals * 0.45) + ' calories or ' + Math.round((intendedcals * 0.45) / 4) + ' grams of protein per day.<br>' + Math.round(intendedcals * 0.35) + 'calories or ' + Math.round((intendedcals * 0.35) / 9) + ' grams of fat per day.<br>';

			var maintain = 'To maintain:<br>' + Math.round(intendedcals * 0.4) + ' calories or ' + Math.round((intendedcals * 0.4) / 4) + ' grams of carbohydrate per day.<br>' + Math.round(intendedcals * 0.3) + ' calories or ' + Math.round((intendedcals * 0.3) / 4) + ' grams of protein per day.<br>' + Math.round(intendedcals * 0.3) + 'calories or ' + Math.round((intendedcals * 0.3) / 9) + ' grams of fat per day.<br>';


			var buildmuscle = 'To build muscle:<br>' + Math.round(intendedcals * 0.5) + ' calories or ' + Math.round((intendedcals * 0.5) / 4) + ' grams of carbohydrate per day.<br>' + Math.round(intendedcals * 0.3) + ' calories or ' + Math.round((intendedcals * 0.3) / 4) + ' grams of protein per day.<br>' + Math.round(intendedcals * 0.2) + 'calories or ' + Math.round((intendedcals * 0.2) / 9) + ' grams of fat per day.<br>';

			macros = 'Macro Planner<br>' + losefat + maintain + buildmuscle + '<br>';
	}

	var fivetwo = '5:2 Diet Planner<br>Two low calorie days of ' + Math.round(TDEE * 0.25) + ' calories per day<br>Five normal calorie days of ' + Math.round(TDEE) + ' calories per day.<br>'; 


	var results = idealweightrange + BMIresults + goalBMIresults + BMRresults + TDEEresults + tolose + predictor + zigzag + fivetwo + macros;


	document.getElementById('results').innerHTML = results;
	//puts results in container
	
	document.getElementById('input').style.display = 'none';
	document.getElementById('results').style.display = 'block';
	document.getElementById('back').style.display = 'block';
}
};

document.getElementById('back').onclick = function() {
	document.getElementById('input').style.display = 'block';
	document.getElementById('results').style.display = 'none';
	document.getElementById('back').style.display = 'none';
};

//reloads everything
document.getElementById('clear').onclick = function(){
  history.go(0);
};