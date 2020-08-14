function testJackpot(array)
{
	var flag=0;
	for(var i=array.length-1;i>=0;i--)
	{
		if(array[i]==array[0])
		{
			
			flag++;
		}
	}
	

	if(flag===array.length)
	{
		document.write("true");
	}
	else
	{
		document.write("false");
	}
}
testJackpot( ["&&", "&", "&&&", "&&&&"]);