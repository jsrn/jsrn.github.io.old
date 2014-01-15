// Punching
var punchingWounds = new Array(
	'scratched',
	'bruised',
	'bloodied'
	);

var punchingTarget = new Array(
	'eye',
	'side of nose',
	'side of mouth',
	'side of neck',
	'side of chest',
	'shoulder'
	);

// Stabbing
var stabbingWounds = new Array(
	'pierced',
	'scratched'
	);

var stabbingTarget = new Array(
	'eye',
	'cheek',
	'shoulder',
	'upper arm',
	'forearm',
	'hand',
	'wrist',
	'side of neck',
	'side of chest',
	'side of stomach',
	'thigh',
	'shin'
	);

// Crushing
var crushingWounds = new Array(
	'cracked',
	'broken',
	'splintered'
	);

var crushingTarget = new Array(
	'side of skull',
	'side of jaw',
	'collar bone',
	'shoulder blade',
	'side of ribcage',
	'femur'
	);

// Slashing
var slashingWounds = new Array(
	'cut',
	'slashed',
	'severed'
	);

var slashingTarget = new Array(
	'fingers',
	'hand',
	'forearm',
	'upper arm',
	'side of neck',
	'thigh'
	);

var sides = new Array(
	'left',
	'right'
	);

// Injuries
var injuries;


function roll()
{
	injuries = new Array();

	getFistWounds();

	getStabbingWounds();

	getCrushingWounds();

	getSlashingWounds();
	
	var results = '';

	for (key in injuries) {
	    if (injuries.hasOwnProperty(key)) {
	        results += '<b>' + firstToUpper(key) + '</b><br>';
	        results += formatInjuryArray(injuries[key]);
	        results += "<br>";
	    }
	}	

	document.getElementById("results").innerHTML = results;
}

function firstToUpper(s)
{
	return s.charAt(0).toUpperCase() + s.slice(1);
}

function formatInjuryArray(injuries)
{
	for (var i = 0; i < injuries.length; i++) {
		injuries[i] = firstToUpper(injuries[i]);
	};

	uniqueInjuries = injuries.filter(function(elem, pos) {
    return injuries.indexOf(elem) == pos;
	})
	
	return uniqueInjuries.join(', ');
}

function addInjury(area, injury)
{
	if(injuries[area] == null)
	{
		injuries[area] = new Array();
	}
	injuries[area].push(injury);
}

function getFistWounds()
{
	var results = "";
	var area, injury;

	var fistwounds = document.getElementById("fists").value;
	for ( var i = 0; i < fistwounds; i++ ) {
		injury = punchingWounds[ dN( punchingWounds.length ) ];
		area = getSide() + " " + punchingTarget[ dN( punchingTarget.length ) ];
		
		addInjury(area, injury);
	};
}

function getStabbingWounds()
{
	var results = "";
	var area, injury;

	var stabbingwounds = document.getElementById("stabbing").value;
	for ( var i = 0; i < stabbingwounds; i++ ) {
		injury = stabbingWounds[ dN( stabbingWounds.length ) ];
		area = getSide() + " " + stabbingTarget[ dN( stabbingTarget.length ) ];
		
		addInjury(area, injury);
	};
}

function getCrushingWounds()
{
	var results = "";
	var area, injury;

	var crushingwounds = document.getElementById("crushing").value;
	for ( var i = 0; i < crushingwounds; i++ ) {
		injury = crushingWounds[ dN( crushingWounds.length ) ];
		area = getSide() + " " + crushingTarget[ dN( crushingTarget.length ) ];
		
		addInjury(area, injury);
	};
}

function getSlashingWounds()
{
	var results = "";
	var area, injury;

	var slashingwounds = document.getElementById("slashing").value;
	for ( var i = 0; i < slashingwounds; i++ ) {
		injury = slashingWounds[ dN( slashingWounds.length ) ];
		area = getSide() + " " + slashingTarget[ dN( slashingTarget.length ) ];
		
		addInjury(area, injury);
	};
}

function getSide(){
	return sides[ dN(2) ];
}

function dN(n)
{
	return Math.floor(Math.random() * n);
}