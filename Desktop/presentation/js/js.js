$(function() {
	$wrapper = $("#wrapper");
	var superSlow = "super-slow";
	var slow = "slow";
	var middle = "middle";
	var fast = "fast";
	var superFast = "super-fast";
	var p = 0;
	var allFast = false;
	
	$wrapper.css({
		'-webkit-transform':'translate3('+getValues(0)[2]+'px, '+getValues(0)[1]+'px, 0)'
	});
	
	
	
	
	
	
	
	
	$(document).keydown(function(e){
		/*if(e.keyCode == 32) {
			allFast = !allFast;
			console.log(allFast);
			return false;
		}*/
	
		//left
	    if (e.keyCode == 37) { 
	       back();
	       return false;
	    }
	    
	    //right
	    if (e.keyCode == 39) { 
	       forward();
	       return false;
	    }
	});


	
	function forward() {
		if(p < 34) {
			p++;
		}
		var values = getValues(p);
		console.log(values+"   number: "+p);
		$wrapper.removeClass();
		if(!allFast) {
			$wrapper.addClass(values[0]);
		} else {
			$wrapper.addClass(fast);
		}
		$wrapper.css({
			'-webkit-transform':'translate3d('+values[2]+'px, '+values[1]+'px, 0)'
		});
	};
	function back() {
		if(p > 0) {
			p--;
		}
		var values = getValues(p);
		console.log(values+"   number: "+p);
		$wrapper.removeClass();
		if(!allFast) {
			$wrapper.addClass(values[0]);
		} else {
			$wrapper.addClass(fast);
		}
		$wrapper.css({
			'-webkit-transform':'translate3d('+values[2]+'px, '+values[1]+'px, 0)'
		});
	};









	/*$("#wrapper").click(function(e){
	   
	});*/






	function getValues(_p) {
		var values = ["", 0, 0];
		if(_p == 0) {
			values = [fast, 0, 0];
		} else if(_p == 1) {
			values = [fast, 0, -1920];
		} else if(_p == 2) {
			values = [fast, 0, -3210];
		} else if(_p == 3) {
			values = [fast, 0, -5123];
			
			$("#licht").addClass(fast).css({
				'-webkit-transform':'scale(1)',
				'opacity':'1'
			});
			
			
		} else if(_p == 4) {
			values = [fast, 0, -8401];
		} else if(_p == 5) {
			values = [fast, 0, -10174];
		} else if(_p == 6) {
			values = [fast, 0, -11996];
		} else if(_p == 7) {
			values = [fast, 0, -13820];
		} else if(_p == 8) {
			values = [fast, 0, -15691];
		} else if(_p == 9) {
			values = [fast, 0, -16367];
		} else if(_p == 10) {
			values = [fast, 0, -18353];
		} else if(_p == 11) {
			values = [fast, 0, -19922];
		} else if(_p == 12) {
			values = [fast, 0, -21940];
		} else if(_p == 13) {
			values = [fast, 0, -21940];
			$("#people-overlay").addClass('fast').css('opacity', '1');
			$("#david").addClass('fast').css({
				'-webkit-transform':'scale(1)',
				'opacity':'1'
			});
			
		} 
		
		else if(_p == 14) {
			values = [fast, 0, -22614];
			$("#kalle").addClass('fast').css({
				'-webkit-transform':'scale(1)',
				'opacity':'1'
			});
		} else if(_p == 15) {
			values = [fast, 0, -23391];
			$("#roman").addClass('fast').css({
				'-webkit-transform':'scale(1)',
				'opacity':'1'
			});
		} else if(_p == 16) {
			values = [fast, 0, -25458];
		} else if(_p == 17) {
			values = [fast, 0, -26780];
		} else if(_p == 18) {
			values = [fast, 0, -28699];
			$("#zitat01").addClass(superFast).css({
				'-webkit-transform':'scale(1)',
				'opacity':'1'
			});
			$("#zitat02").addClass(superFast).css({
				'-webkit-transform':'scale(1)',
				'opacity':'1'
			});
			$("#zitat03").addClass(superFast).css({
				'-webkit-transform':'scale(1)',
				'opacity':'1'
			});
			$("#zitat04").addClass(superFast).css({
				'-webkit-transform':'scale(1)',
				'opacity':'1'
			});
			
			
		} else if(_p == 19) {
			values = [fast, 0, -30420];
		} else if(_p == 20) {
			values = [fast, 0, -30420];
			$("#findings-overlay").addClass('fast').css('opacity', '1');
		} else if(_p == 21) {
			values = [fast, 0, -32394];
			$("#rad01").addClass("rotating-left");
			$("#rad02").addClass("rotating-right");
			
		} else if(_p == 22) {
			values = [fast, 0, -33626];
		} else if(_p == 23) {
			values = [fast, 0, -35557];
		} else if(_p == 24) {
			values = [fast, -1080, -35557];
		} else if(_p == 25) {
			values = [fast, -1080, -38337];
		} else if(_p == 26) {
			values = [fast, -294, -38337];
			$("#blink").addClass("blinking");
		} else if(_p == 27) {
			values = [fast, -294, -39517];
		} else if(_p == 28) {
			values = [fast, -294, -41545];
			
			$("#cloud-front").addClass("cloud-front-move");
			$("#cloud-back").addClass("cloud-back-move");
		} else if(_p == 29) {
			values = [fast, -1296, -41545];
		} else if(_p == 30) {
			values = [fast, -1296, -43548];
			
			$("#big-picture").addClass(fast).css('opacity', '1');
			
		} else if(_p == 31) {
			values = [fast, -1296, -45531];
		} else if(_p == 32) {
			values = [fast, -1296, -47491];
		} else if(_p == 33) {
			values = [fast, -1296, -49460];
		} else if(_p == 34) {
			values = [fast, -1296, -51314];
		}
		
		
		
		
		
		
		
		
		
		
		
		
		return values;
	
	}











	//early MOuse STUFF to position this shit
	var mousePosX = 0;
	var mousePosY = 0;
	
	var varX = getValues(p)[2];
	var varY = getValues(p)[1];
	
	var mouseDown = false;
	/*$(document).bind('mousedown', function(e) {
		e.preventDefault();
		mousePosX = e.pageX;
		mousePosY = e.pageY;
		$wrapper.removeClass();
		mouseDown = true;
	});*/
	
	/*$(document).bind('mouseup', function(e) {
		varX -= mousePosX - e.pageX;
		varY -= mousePosY - e.pageY;
		$wrapper.css({
			'-webkit-transform':'translate3d('+varX+'px, '+varY+'px, 0)'
		});
		console.log(varY+", "+varX);
		mouseDown = false;
		
		var parentOffset = $("#wrapper").offset(); 
		//or $(this).offset(); if you really just want the current element's offset
		var relX = e.pageX - parentOffset.left;
		var relY = e.pageY - parentOffset.top;
		console.log("x: "+relX+"  y: "+relY);
	});*/



});