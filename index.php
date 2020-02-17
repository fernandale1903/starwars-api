<!DOCTYPE html>
<html>
<head>
	<script src="https://code.jquery.com/jquery-3.4.1.js" integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU=" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
	<script src="js/script.js"></script>
	<script src="bootstrap/js/bootstrap.min.js"></script>
	<link href="bootstrap/css/bootstrap.min.css" rel="stylesheet">
	<link href="bootstrap/css/bootstrap-reboot.min.css" rel="stylesheet">
	<link rel="stylesheet" href="css/default.css">
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Starwars</title>
	<link rel="stylesheet" href="">
	<nav class="navbar dark">
		<a class="navbar-brand">
			<img src="img/starwars.png" class="d-inline-block align-top" alt="starwars">
		</a>
	</nav>
</head>
<body>
	<div class="row container-fluid">
		<div class="col md-6">
			<input type="text" id="film1" class="sinb-title" readonly>
			<div>
				<img src="img/pelicula1.jpg" alt="A new Hope">
			</div>
			<div>
				<input  id="director1" class="sinb directors text-center"  readonly>
			</div>
			<div>
				<input id="date1" class=" sinb dates text-center"  readonly>
			</div>
			<div>
				<textarea id="opening1" cols="30" rows="26" class="sinb text-justify"  readonly></textarea>
			</div>
			<div>
				<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#starship2">
					CR90 corvette
				</button>
				<button type="button"class="btn btn-warning"data-toggle="modal" data-target="#starship3">
					Star Destroyer
				</button>
			</div>
			<div>
				<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#starship5">
					Sentinel-class landing craft
				</button>
			</div>
			<div>
				<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#starship9">
					Death Star
				</button>
				<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#starship10">
					Millennium Falcon
				</button>
			</div>
			<div>
				<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#starship11">
					Y-wing
				</button>
				<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#starship12">
					X-wing
				</button>
			</div>
			<div>
				<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#starship13">
					TIE Advanced x1
				</button>
			</div>
		</div>

	<div class="col md-6">
		<input type="text" id="film2" class="sinb-title" readonly>
		<div>
			<img src="img/pelicula2.jpg" alt="The Empire Strikes Back" readonly>
		</div>
		<div>
			<input  id="director2" class="sinb directors text-center" readonly>
		</div>
		<div>
			<input id="date2" class=" sinb dates text-center" readonly>
		</div>
		<div>
			<textarea id="opening2" cols="30" rows="26" class="sinb text-justify" readonly></textarea>
		</div>	
		<div>
				<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#starship15">
					Executor
				</button>
				<button type="button"class="btn btn-warning"data-toggle="modal" data-target="#starship10">
					Millennium Falcon
				</button>
			</div>
			<div>
				<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#starship11">
					Y-wing
				</button>
			</div>
			<div>
				<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#starship12">
					X-wing
				</button>
				<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#starship21">
					Slave 1
				</button>
			</div>
			<div>
				<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#starship22">
					Imperial shuttle
				</button>
				<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#starship23">
					EF76 Nebulon-B escort frigate
				</button>
			</div>
			<div>
				<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#starship3">
					Star Destroyer
				</button>
				<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#starship17">
					Rebel transport
				</button>
			</div>
		</div>

	<div class="row container-fluid">
		<div class="col md-6">
		<input type="text" id="film3" class="sinb-title" readonly>
		<div>
			<img src="img/pelicula3.jpg" alt="The Empire Strikes Back" readonly>
		</div>
		<div>
			<input  id="director3" class="sinb directors text-center" readonly>
		</div>
		<div>
			<input id="date3" class=" sinb dates text-center" readonly>
		</div>
		<div>
			<textarea id="opening3" cols="30" rows="26" class="sinb text-justify" readonly></textarea>
		</div>
			<div>
				<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#starship15">
					Executor
				</button>
				<button type="button"class="btn btn-warning"data-toggle="modal" data-target="#starship10">
					Millennium Falcon
				</button>
			</div>
			<div>
				<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#starship11">
					Y-wing
				</button>
			</div>
			<div>
				<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#starship12">
					X-wing
				</button>
				<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#starship22">
					Imperial shuttle
				</button>
			</div>
			<div>
				<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#starship23">
					Death Star
				</button>
				<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#starship27">
					EF76 Nebulon-B escort frigate
				</button>
			</div>
			<div>
				<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#starship28">
					A-wing
				</button>
				<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#starship29">
					B-wing
				</button>
			</div>
			<div>
				<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#starship13">
					TIE Advanced x1
				</button>
				<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#starship17">
					Rebel transport
				</button>
			</div>
			<div>
				<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#starship2">
					CR90 corvette
				</button>
			</div>
		</div>
		<div class="col md-6">
			<input type="text" id="film4" class="sinb-title" readonly>
			<div>
				<img src="img/pelicula4.png" alt="A new Hope">
			</div>
			<div>
				<input  id="director4" class="sinb directors text-center"  readonly>
			</div>
			<div>
				<input id="date4" class=" sinb dates text-center"  readonly>
			</div>
			<div>
				<textarea id="opening4" cols="30" rows="26" class="sinb text-justify"  readonly></textarea>
			</div>
			<div>
				<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#starship40">
					Naboo Royal Starship
				</button>
				<button type="button"class="btn btn-warning"data-toggle="modal" data-target="#starship41">
					Scimitar
				</button>
			</div>
			<div>
				<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#starship31">
					Republic Cruiser
				</button>
			</div>
			<div>
				<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#starship32">
					Droid control ship
				</button>
				<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#starship39">
					Naboo fighter
				</button>
			</div>
		</div>
	</div>
		<div class="col md-4">
			<input type="text" id="film5" class="sinb-title" readonly>
			<div>
				<img src="img/pelicula5.png" alt="The Empire Strikes Back" readonly>
			</div>
			<div>
				<input  id="director5" class="sinb directors text-center" readonly>
			</div>
			<div>
				<input id="date5" class=" sinb dates text-center" readonly>
			</div>
			<div>
				<textarea id="opening5" cols="30" rows="26" class="sinb text-justify" readonly></textarea>
			</div>
			<div>
				<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#starship21">
					Slave 1
				</button>
				<button type="button"class="btn btn-warning"data-toggle="modal" data-target="#starship29">
					B-wing
				</button>
			</div>
			<div>
				<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#starship43">
					J-type diplomatic barge
				</button>
			</div>
			<div>
				<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#starship47">
					AA-9 Coruscant freighter
				</button>
				<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#starship48">
					Jedi starfighter
				</button>
			</div>
			<div>
				<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#starship49">
					H-type Nubian yacht
				</button>
				<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#starship32">
					Droid control ship
				</button>
			</div>
			<div>
				<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#starship52">
					Republic Assault ship
				</button>
				<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#starship58">
					Solar Sailer
				</button>
			</div>
		</div>
		<div class="col md-4">
			<input type="text" id="film6" class="sinb-title" readonly>
			<div>
				<img src="img/pelicula6.png" alt="The Empire Strikes Back" readonly>
			</div>
			<div>
				<input  id="director6" class="sinb directors text-center" readonly>
			</div>
			<div>
				<input id="date6" class=" sinb dates text-center" readonly>
			</div>
			<div>
				<textarea id="opening6" cols="30" rows="26" class="sinb text-justify" readonly></textarea>
			</div>
			<div>
				<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#starship48">
					Jedi starfighter
				</button>
				<button type="button"class="btn btn-warning"data-toggle="modal" data-target="#starshi59">
					Trade Federation cruiser
				</button>
			</div>
			<div>
				<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#starship61">
					Theta-class T-2c shuttle
				</button>
			</div>
			<div>
				<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#starship32">
					Droid control ship
				</button>
				<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#starship63">
					Republic attack cruiser
				</button>
			</div>
			<div>
				<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#starship69">
					Naboo star skiff
				</button>
				<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#starship65">
					Jedi Interceptor
				</button>
			</div>
			<div>
				<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#starship66">
					arc-170
				</button>
				<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#starship74">
					Belbullab-22 starfighter
				</button>
			</div>
			<div>
				<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#starship75">
					V-wing
				</button>
				<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#starship2">
					CR90 corvette
				</button>
			</div>
			<div>
				<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#starship68">
					Banking clan frigate
				</button>
			</div>
		</div>
	<div class="row container-fluid">
		<div class="col md-4">
			<input type="text" id="film7" class="sinb-title" readonly>
			<div>
				<img src="img/pelicula1.jpg" alt="A new Hope">
			</div>
			<div>
				<input  id="director7" class="sinb directors text-center"  readonly>
			</div>
			<div>
				<input id="date7" class=" sinb dates text-center"  readonly>
			</div>
			<div>
				<textarea id="opening7" cols="30" rows="26" class="sinb text-justify"  readonly></textarea>
			</div>
			<div>
				<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#starship77">
					T-70 X-wing fighter
				</button>
				<button type="button"class="btn btn-warning"data-toggle="modal" data-target="#starship10">
					Millennium Falcon
				</button>
			</div>
		</div>
	<?php require_once 'starships/starships.php' ?>
</body>
</html>