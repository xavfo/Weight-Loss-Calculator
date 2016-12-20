
<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta charset="UTF-8">
  <title>The Ultimate Weightloss Calculator!</title>
  <link rel='stylesheet prefetch' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css'>
  <link rel="stylesheet" href="css/style.css"> 

<script type="text/javascript" src="js/metric.js" defer></script>
</head>

<body>

<div id="title">The Ultimate Weightloss Calculator</div>

<div id="menu">
  <div class="nav"><a href="about.php">About</a></div>
  <div class="nav"><a href="index.php">Imperial Version</a></div>
  <div class="nav"><a href="metric.php">Metric Version</a></div>
  <div class="nav"><a href="frame.php">Frame Size Guide</a></div>
  <div class="nav"><a href="activity.php">Activity Level Guide</a></div>
</div>

<div id="leftsidebar">SIDEBAR ADS</div>
<div id="calheader">HEADER ADS</div>


<div id="input">

	<div class="calheader">Welcome to the Ultimate Weightloss Calculator</div>
	<div class="content">
		<div class="caltext"><a href="index.php">If you prefer LBS, FEET AND INCHES, click here for the imperial version.</a></div>
		<div class="fieldcontainer">
			<div class="caltext">Please complete all fields in this section.</div>
			<form id="requiredfields">

			<div class="formelement">
			<!--gender radio buttons-->
			Gender
			<input type="radio" name="gender" value="female" checked>F
			<input type="radio" name="gender" value="male" >M
			</div>

			<div class="formelement">
			<!--age number input-->
			Age
			<input class="req" type="number" id="age" name="age">Years
			</div>

			<div class="formelement">
			<!--weight number input-->
			Weight
			<input class="req" type="number" id="kg" name="kg">kg
			</div>

			<div class="formelement">
			<!--height cm input-->
			Height
			<input class="req" type="number" id="cm" name="cm">cm
			</div>

			<div class="formelement">
			<!--activity level dropdown-->
			Activity Level
			<select id="activitylevel" name="activitylevel">
				<option value=1.2 selected>Sedentary</option>
				<option value=1.375>Lightly Active</option>
				<option value=1.55>Moderately Active</option>
				<option value=1.725>Very Active</option>
				<option value=1.9>Athlete</option>
			</select>
			</div>

			</form>

		</div>

		<div class="fieldcontainer">
		<div class="caltext">Optional for more detailed results - it's ok to leave some or all of these blank.</div>
			<form id="optionalfields">

			<div class="formelement">
			<!--intended cals number input-->
			Intended Intake
			<input type="number" id="intendedcals" name="intendedcals">Calories p/day
			</div>

			<div class="formelement">
			<!--finish date input-->
			Finish Date
			<input type="date" id="finishdate" name="finishdate">
			</div>

			<div class="formelement">
			<!--goal weight number input-->
			Goal Weight
			<input type="number" id="goalweight" name="goalweight">kg
			</div>
		
			<div class="formelement">
			<!--goal bmi number input -->
			Goal BMI
			<input type="number" id="goalBMI" name="goalBMI">
			</div>

			<div class="formelement">
			<!--frame size dropdown-->
			Frame Size
			<select id="framesize" name="framesize">
				<option value="small">Small</option>
				<option value="average" selected>Average / No adjustment</option>
				<option value="large">Large</option>
			</select>
			</div>
			
			</form>
		</div>
		<button id="submit">Submit</button>
	</div>
</div>

<!--results are created in div below-->
<div id="results">
</div>
<button id="back">Back</button>
<button id="clear">Clear All</button>




<div id="rightsidebar">DISCLAIMER</div>
<footer> 
	<div id="footerads">FOOTER ADS</div>
	Made by <a href="http://jmcooper.net/">J M Cooper</a><br>
</footer>
</body>
