$(document).ready(function()
{
	accordion();
});

function accordion(){
	$('#images').accordion({active: -1}, {header: "img"});
}