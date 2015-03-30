/////////////////////////////////////////////////////////////////////////////
//
var newBg;
var oldBg;
var elementOut;
var elementIn;

$(document).ready(function()
{
	$('#slidingLeft').animate({left: "-152px"},2000);
	$('#slidingRight').animate({right: "-152px"},2000);
	//transition(); //Element in, element out
});

function transition(){ //Element in, element out
	$('#slidingLeft').animate({left: "0px"},2000);
	$('#slidingRight').animate({right: "0px"},2000);
	if (elementIn === "1")
	{
		$('.bg1')animate({'opacity': '1'},0);
		$('.bg1')animate({'z-index': '1'},0);
		$('.bg2')animate({'z-index': '0'},0);
		$('.bg3')animate({'z-index': '0'},0);
		$('.bg4')animate({'z-index': '0'},0);
		if (elementOut === '2')
		{
			$('.bg2')animate({'z-index': '2'},0);
			$('.bg2').delay(4000).animate({'opacity': '0'},2000);
		}
		else if (elementOut === '3')
		{
			$('.bg3')animate({'z-index': '2'},0);
			$('.bg3').delay(4000).animate({'opacity': '0'},2000);
		}
		else 
		{
			$('.bg4')animate({'z-index': '2'},0);
			$('.bg4').delay(4000).animate({'opacity': '0'},2000);
		}
		//if som kollar vilket det utfasande element skall vara och sätter dess z-index till 2
		//kör därefter en animation på dess opacity och skickar sedan ut sidorna.
		
	}
	else if (transitionIn === "2")
	{
		$('.bg2')animate({'opacity': '1'},0);
		$('.bg1')animate({'z-index': '0'},0);
		$('.bg2')animate({'z-index': '1'},0);
		$('.bg3')animate({'z-index': '0'},0);
		$('.bg4')animate({'z-index': '0'},0);
		if (elementOut === '1')
		{
			$('.bg1')animate({'z-index': '2'},0);
			$('.bg1').delay(4000).animate({'opacity': '0'},2000);
		}
		else if (elementOut === '3')
		{
			$('.bg3')animate({'z-index': '2'},0);
			$('.bg3').delay(4000).animate({'opacity': '0'},2000);
		}
		else 
		{
			$('.bg4')animate({'z-index': '2'},0);
			$('.bg4').delay(4000).animate({'opacity': '0'},2000);
		}
	}
	else if (transitionIn === "3")
	{
		$('.bg3')animate({'opacity': '1'},0);
		$('.bg1')animate({'z-index': '0'},0);
		$('.bg2')animate({'z-index': '0'},0);
		$('.bg3')animate({'z-index': '1'},0);
		$('.bg4')animate({'z-index': '0'},0);
		if (elementOut === '1')
		{
			$('.bg1')animate({'z-index': '2'},0);
			$('.bg1').delay(4000).animate({'opacity': '0'},2000);
		}
		else if (elementOut === '2')
		{
			$('.bg2')animate({'z-index': '2'},0);
			$('.bg2').delay(4000).animate({'opacity': '0'},2000);
		}
		else 
		{
			$('.bg4')animate({'z-index': '2'},0);
			$('.bg4').delay(4000).animate({'opacity': '0'},2000);
		}
	}
	else
	{
		$('.bg4')animate({'opacity': '1'},0);
		$('.bg1')animate({'z-index': '0'},0);
		$('.bg2')animate({'z-index': '0'},0);
		$('.bg3')animate({'z-index': '0'},0);
		$('.bg4')animate({'z-index': '1'},0);
		if (elementOut === '1')
		{
			$('.bg1')animate({'z-index': '2'},0);
			$('.bg1').delay(4000).animate({'opacity': '0'},2000);
		}
		else if (elementOut === '2')
		{
			$('.bg2')animate({'z-index': '2'},0);
			$('.bg2').delay(4000).animate({'opacity': '0'},2000);
		}
		else 
		{
			$('.bg3')animate({'z-index': '2'},0);
			$('.bg3').delay(4000).animate({'opacity': '0'},2000);
		}
	}
	$('#slidingLeft').animate({left: "-152px"},2000);
	$('#slidingRight').animate({right: "-152px"},2000);
	//if (newBg === x){
		
	//}
	//Sätt alla andra element till Z index 0, gamla elementet till 1 och nya till 2
	
	//$('#slidingLeftBg1', '#slidingRightBg1', '#mainBg1', '#contentBg1').animate({opacity: "0"},2000);
	//Bakgrunderna går att göra som divar inuti sina parents utan någon styling utan kommer att ta upp hela området om så givet chansen. Absolute med låg z-index?
	//Kopiera opacity animationen och koppla den till If-statements där elementets namn kollas.
}