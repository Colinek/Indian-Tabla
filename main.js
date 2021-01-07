$(document).on('ready', function() {

	    var droneleftrev = document.createElement('audio');
			        droneleftrev.setAttribute('src', 'droneleftrev.mp3');
			        droneleftrev.setAttribute('autoplay', 'autoplay');
			        droneleftrev.load();
			        $.get();
					droneleftrev.play(0);
					droneleftrev.loop = true;
					droneleftrev.loopStart = 0;
					droneleftrev.LoopEnd = 41;



		var dronerightrev = document.createElement('audio');
			        dronerightrev.setAttribute('src', 'dronerightrev.mp3');
			        dronerightrev.setAttribute('autoplay', 'autoplay');
			        dronerightrev.load()
			        $.get();
		            dronerightrev.play(0);
		            dronerightrev.loop = true;
					dronerightrev.loopStart = 0;
					dronerightrev.LoopEnd = 37;


		var dronecenter = document.createElement('audio');
			        dronecenter.setAttribute('src', 'dronecenter.mp3');
			        dronecenter.setAttribute('autoplay', 'autoplay');
			        dronecenter.load()
			        $.get();
		            dronecenter.play(0);
		            dronecenter.loop = true;
					dronecenter.loopStart = 0;
					dronecenter.LoopEnd = 153;



		var palo1 = document.createElement('audio');
			        palo1.setAttribute('src', 'palo1.mp3');
			        palo1.load()
			        $.get();

		var palo2 = document.createElement('audio');
			        palo2.setAttribute('src', 'palo2.mp3');
			        palo2.load()
			        $.get();

		var dhalo1 = document.createElement('audio');
			        dhalo1.setAttribute('src', 'dhalo1.mp3');
			        dhalo1.load()
			        $.get();

		var dhalo2 = document.createElement('audio');
			        dhalo2.setAttribute('src', 'dhalo2.mp3');
			        dhalo2.load()
			        $.get();

		var nilo1 = document.createElement('audio');
			        nilo1.setAttribute('src', 'nilo1.mp3');
			        nilo1.load()
			        $.get();

		var nilo2 = document.createElement('audio');
			        nilo2.setAttribute('src', 'nilo2.mp3');
			        nilo2.load()
			        $.get();

		var sa1 = document.createElement('audio');
			        sa1.setAttribute('src', 'sa1.mp3');
			        sa1.load()
			        $.get();

		var sa2 = document.createElement('audio');
			        sa2.setAttribute('src', 'sa2.mp3');
			        sa2.load()
			        $.get();

		var re1 = document.createElement('audio');
			        re1.setAttribute('src', 're1.mp3');
			        re1.load()
			        $.get();

		var re2 = document.createElement('audio');
			        re2.setAttribute('src', 're2.mp3');
			        re2.load()
			        $.get();

	    var ga1 = document.createElement('audio');
			        ga1.setAttribute('src', 'ga1.mp3');
			        ga1.load()
			        $.get();

		var ga2 = document.createElement('audio');
			        ga2.setAttribute('src', 'ga2.mp3');
			        ga2.load()
			        $.get();

		var ma1 = document.createElement('audio');
			        ma1.setAttribute('src', 'ma1.mp3');
			        ma1.load()
			        $.get();

		var ma2 = document.createElement('audio');
			        ma2.setAttribute('src', 'ma2.mp3');
			        ma2.load()
			        $.get();

		var pa1 = document.createElement('audio');
			        pa1.setAttribute('src', 'pa1.mp3');
			        pa1.load()
			        $.get();

		var pa2 = document.createElement('audio');
			        pa2.setAttribute('src', 'pa2.mp3');
			        pa2.load()
			        $.get();

		var dha1 = document.createElement('audio');
			        dha1.setAttribute('src', 'dha1.mp3');
			        dha1.load()
			        $.get();

		var dha2 = document.createElement('audio');
			        dha2.setAttribute('src', 'dha2.mp3');
			        dha2.load()
			        $.get();

	    var ni1 = document.createElement('audio');
			        ni1.setAttribute('src', 'ni1.mp3');
			        ni1.load()
			        $.get();

		var ni2 = document.createElement('audio');
			        ni2.setAttribute('src', 'ni2.mp3');
			        ni2.load()
			        $.get();

		var sahi1 = document.createElement('audio');
			        sahi1.setAttribute('src', 'sahi1.mp3');
			        sahi1.load()
			        $.get();

		var sahi2 = document.createElement('audio');
			        sahi2.setAttribute('src', 'sahi2.mp3');
			        sahi2.load()
			        $.get();

		var rehi1 = document.createElement('audio');
			        rehi1.setAttribute('src', 'rehi1.mp3');
			        rehi1.load()
			        $.get();

		var rehi2 = document.createElement('audio');
			        rehi2.setAttribute('src', 'rehi2.mp3');
			        rehi2.load()
			        $.get();

		var gahi1 = document.createElement('audio');
			        gahi1.setAttribute('src', 'gahi1.mp3');
			        gahi1.load()
			        $.get();

		var gahi2 = document.createElement('audio');
			        gahi2.setAttribute('src', 'gahi2.mp3');
			        gahi2.load()
			        $.get();

		var drone =document.createElement('audio');
					drone.setAttribute('src', 'drone2.mp3');
					drone.load();
					$.get();

		var strings =document.createElement('audio');
					strings.setAttribute('src', 'strings.mp3');
					strings.load();
					$.get();

		var bowl =document.createElement('audio');
					bowl.setAttribute('src', 'bowl.mp3');
					bowl.load();
					$.get();

		var tablagroove = document.createElement('audio');
			        tablagroove.setAttribute('src', 'tablagroove.mp3');
			        tablagroove.load();
			        $.get();
					// tablagroove.play();
					// tablagroove.loopStart = 0;
					// tablagroove.LoopEnd = 29;
					tablagroove.loop = true;

	var tablaplay = $('<div class="tabla play">Tabla Groove</div>');
	var tablastop = $('<div class="tabla stop">Tabla Stop</div>');

	$('.main').append(tablaplay);
	$('.main').append(tablastop);
	$(tablastop).hide();

	var prevClass = 'palopic';


    $(document).on('click', '.play', function(){
    		tablagroove.load();
			        $.get();
		tablagroove.play();
		$(tablaplay).hide();
		$(tablastop).show();
		tablagroove.loop = true;
	})

	$(document).on('click', '.stop', function(){
		$(tablastop).hide();
		$(tablaplay).show();
		tablagroove.loop = false;
	})

	var paloPluck = true;
    $(document).on('mouseover', '.pa-lo', function(){
    	if (paloPluck === true){
		palo1.play();
		paloPluck = false;
		} else {
			palo2.play();
			paloPluck = true;
		}
		$('.main').removeClass(prevClass);
		$('.main').addClass('palopic');
		prevClass = 'palopic';
	})

	var dhaloPluck = true;
	$(document).on('mouseover', '.dha-lo', function(){
		if (dhaloPluck === true) {
			dhalo1.play();
			dhaloPluck = false;
		} else {
			dhalo2.play();
			dhaloPluck = true;
		}
		$('.main').removeClass(prevClass);
		$('.main').addClass('dhalopic');
		prevClass = 'dhalopic';
	})

	var niloPluck = true;
	$(document).on('mouseover', '.ni-lo', function(){
		if (niloPluck === true) {
			nilo1.play();
			niloPluck = false;
		} else {
			nilo2.play();
			niloPluck = true;
		}
		$('.main').removeClass(prevClass);
		$('.main').addClass('nilopic');
		prevClass = 'nilopic';
	})

	var saPluck = true
    $(document).on('mouseover', '.sa', function(){
		if (saPluck === true) {
			sa1.play();
			saPluck = false;
		} else {
			sa2.play();
			saPluck = true;
		}
		$('.main').removeClass(prevClass);
		$('.main').addClass('sapic');
		prevClass = 'sapic';
	})

	var rePluck = true;
	$(document).on('mouseover', '.re', function(){
		if (rePluck === true) {
			re1.play();
			rePluck = false;
		} else {
			re2.play();
			rePluck = true;
		}
		$('.main').removeClass(prevClass);
		$('.main').addClass('repic');
		prevClass = 'repic';
	})

	var gaPluck = true;
	$(document).on('mouseover', '.ga', function(){
		if (gaPluck === true) {
			ga1.play();
			gaPluck = false;
		} else {
			ga2.play();
			gaPluck = true;
		}
		$('.main').removeClass(prevClass);
		$('.main').addClass('gapic');
		prevClass = 'gapic';
	})

	var maPluck = true;
	$(document).on('mouseover', '.ma', function(){
		if (maPluck === true) {
			ma1.play();
			maPluck = false;
		} else {
			ma2.play();
			maPluck = true;
		}
		$('.main').removeClass(prevClass);
		$('.main').addClass('mapic');
		prevClass = 'mapic';
	})

	var paPluck = true;
	$(document).on('mouseover', '.pa', function(){
		if (paPluck === true) {
			pa1.play();
			paPluck = false;
		} else {
			pa2.play();
			paPluck = true;
		}
		$('.main').removeClass(prevClass);
		$('.main').addClass('papic');
		prevClass = 'papic';
	})

	var dhaPluck = true;
	$(document).on('mouseover', '.dha', function(){
		if (dhaPluck === true) {
			dha1.play();
			dhaPluck = false;
		} else {
			dha2.play();
			dhaPluck = true;
		}
		$('.main').removeClass(prevClass);
		$('.main').addClass('dhapic');
		prevClass = 'dhapic';
	})

	var niPluck = true;
	$(document).on('mouseover', '.ni', function(){
		if (niPluck === true) {
			ni1.play();
			niPluck = false;
		} else {
			ni2.play();
			niPluck = true;
		}
		$('.main').removeClass(prevClass);
		$('.main').addClass('nipic');
		prevClass = 'nipic';
	})

	var sahiPluck = true;
	$(document).on('mouseover', '.sa-hi', function(){
		if (sahiPluck === true) {
			sahi1.play();
			sahiPluck = false;
		} else {
			sahi2.play();
			sahiPluck = true;
		}
		$('.main').removeClass(prevClass);
		$('.main').addClass('sahipic');
		prevClass = 'sahipic';
	})

	var rehiPluck =  true;
	$(document).on('mouseover', '.re-hi', function(){
		if (rehiPluck === true) {
			rehi1.play();
			rehiPluck = false;
		} else {
			rehi2.play();
			rehiPluck = true;
		}
		$('.main').removeClass(prevClass);
		$('.main').addClass('rehipic');
		prevClass = 'rehipic';
	})

	var gahiPluck = true;
	$(document).on('mouseover', '.ga-hi', function(){
		if (gahiPluck === true) {
			gahi1.play();
			gahiPluck = false;
		} else {
			gahi2.play();
			gahiPluck = true;
		}
		$('.main').removeClass(prevClass);
		$('.main').addClass('gahipic');
		prevClass = 'gahipic';
	})
	$(document).on('mouseover', '.drone', function(){
		drone.play();
	});
	$(document).on('mouseover', '.strings', function(){
		strings.play();
	});
	$(document).on('mouseover', '.bowl', function(){
		bowl.play();
	});



	setupRoutingGraph();


});
