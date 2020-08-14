var j=0;
function charCount(alphabet, word)
{

	for(var i=0;i<word.length;i++)
	{
		if(alphabet===word[i])
		{
			
			j++;
		}
	}
	document.write(j);

}
charCount("b","big fat bubble");
