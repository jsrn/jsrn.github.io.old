String.prototype.replaceAt=function(index, character) {
	return this.substr(0, index) + character + this.substr(index+character.length);
}

chars = "ABCDEFGHIJKLMNOPQRSTUVQXYZabcdefghijklmnopqrstuvqxyz0123456789"

heartBlock =  "------------------------------------------------------------"
heartBlock += "------------------------------------------------------------"
heartBlock += "-----------------@@@@@@@------------@@@@@@@-----------------"
heartBlock += "---------------@@@@@@@@@@@--------@@@@@@@@@@@---------------"
heartBlock += "--------------@@@@@@@@@@@@@@----@@@@@@@@@@@@@@--------------"
heartBlock += "--------------@@@@@@@@@@@@@@@--@@@@@@@@@@@@@@@--------------"
heartBlock += "--------------@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@--------------"
heartBlock += "---------------@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@---------------"
heartBlock += "----------------@@@@@@@@@@@@@@@@@@@@@@@@@@@@----------------"
heartBlock += "-----------------@@@@@@@@@@@@@@@@@@@@@@@@@@-----------------"
heartBlock += "------------------@@@@@@@@@@@@@@@@@@@@@@@@------------------"
heartBlock += "-------------------@@@@@@@@@@@@@@@@@@@@@@-------------------"
heartBlock += "--------------------@@@@@@@@@@@@@@@@@@@@--------------------"
heartBlock += "---------------------@@@@@@@@@@@@@@@@@@---------------------"
heartBlock += "----------------------@@@@@@@@@@@@@@@@----------------------"
heartBlock += "------------------------@@@@@@@@@@@@------------------------"
heartBlock += "-------------------------@@@@@@@@@@-------------------------"
heartBlock += "---------------------------@@@@@@---------------------------"
heartBlock += "-----------------------------@@-----------------------------"
heartBlock += "------------------------------------------------------------";

hashIndices = [];
count = 0;

function init()
{
	for(var i = 0; i < heartBlock.length; i++)
	{
		var chr = heartBlock[i];
		if( chr === "@")
		{
			hashIndices.push(i);
		}
	}
}

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

init();

updateBlock();

setInterval(updateBlock, 100);
