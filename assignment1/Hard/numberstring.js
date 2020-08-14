const checkStringContainNumber=(str)=>{
	let count=0;
	str.split('').forEach(element=>
	{
		if(element===" ");
		else if(!isNaN(element))
		{
			count++;
		}
	}
		);
	return count>0?true:false;
	}
	const numInStr=(arr)=>{
		let newArr=[];
		for(let i=0;i<arr.length;i++)
		{
			if(checkStringContainNumber(arr[i]))
				{
					newArr.push(arr[i]);
				}
		}
		return newArr;
	}
	console.log(numInStr(["1a", "a", "2b", "b"]));
