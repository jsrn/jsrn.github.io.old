String.prototype.replaceAt=function(index, character) {
	return this.substr(0, index) + character + this.substr(index+character.length);
}

chars = "ABCDEFGHIJKLMNOPQRSTUVQXYZabcdefghijklmnopqrstuvqxyz0123456789"

hashIndices = [
	137,138,139,140,141,142,143,156,157,158,159,160,161,162,195,196,197,198,199,
	200,201,202,203,204,205,214,215,216,217,218,219,220,221,222,223,224,254,255,
	256,257,258,259,260,261,262,263,264,265,266,267,272,273,274,275,276,277,278,
	279,280,281,282,283,284,285,314,315,316,317,318,319,320,321,322,323,324,325,
	326,327,328,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,374,
	375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,
	394,395,396,397,398,399,400,401,402,403,404,405,435,436,437,438,439,440,441,
	442,443,444,445,446,447,448,449,450,451,452,453,454,455,456,457,458,459,460,
	461,462,463,464,496,497,498,499,500,501,502,503,504,505,506,507,508,509,510,
	511,512,513,514,515,516,517,518,519,520,521,522,523,557,558,559,560,561,562,
	563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,
	582,618,619,620,621,622,623,624,625,626,627,628,629,630,631,632,633,634,635,
	636,637,638,639,640,641,679,680,681,682,683,684,685,686,687,688,689,690,691,
	692,693,694,695,696,697,698,699,700,740,741,742,743,744,745,746,747,748,749,
	750,751,752,753,754,755,756,757,758,759,801,802,803,804,805,806,807,808,809,
	810,811,812,813,814,815,816,817,818,862,863,864,865,866,867,868,869,870,871,
	872,873,874,875,876,877,924,925,926,927,928,929,930,931,932,933,934,935,985,
	986,987,988,989,990,991,992,993,994,1047,1048,1049,1050,1051,1052,1109,1110
	];
	
count = 0;

function getBlock()
{
	var block = getBackgroundBlock();
	block = overlayHashes(block);
	block = addBreaks(block);
	return block;
}

function getBackgroundBlock()
{
	var block = ""

	for(var i = 0; i < 20 * 60; i++)
	{
		block += chars.charAt(Math.floor(Math.random() * chars.length));;
	}

	return block;
}

function overlayHashes( block )
{
	for(var i = 0; i < hashIndices.length; i++)
	{
		var chance = count / hashIndices.length;
		var modifier = 2;
		chance *= modifier;

		if( Math.random() < chance )
		{
			var ind = hashIndices[i];
			block = block.replaceAt(ind,"@");	
		}
	}

	return block;
}

function addBreaks( block )
{
	var parts = block.match(/.{1,60}/g);
	return parts.join("<br>");
}

function updateBlock()
{
	var displayBlock = getBlock();
	document.getElementById("block").innerHTML = displayBlock;
	count++;
}

updateBlock();

setInterval(updateBlock, 100);
