
let inputs=document.getElementsByClassName("ip-value");
let pswd=document.getElementById("password-form");
let cnfmPswd=document.getElementById("password-confrm");
let mobileNo=document.getElementById("mobile-no");
let count=0
let btn=document.getElementById("btn");
btn.addEventListener("click",function(e)
{
	console.log((pswd.value!=cnfmPswd.value))
	e.preventDefault(); 
	for(let i=0; i<inputs.length;i++)
	{
		if(inputs[i].value=="")
		{
			inputs[i].parentNode.getElementsByTagName("p")[0].classList.add("invalid-input");
			count++;
		}
		else{
			inputs[i].parentNode.getElementsByTagName("p")[0].classList.remove("invalid-input");
		}
		if(count==0)
		{
			if(mobileNo.value.length!=10 && isNaN(mobileNo.value))
			{
				document.getElementsByClassName("error-mobileno")[0].classList.add("invalid-input");
				console.log(mobileNo.value.length);
			}
			else
			{
				document.getElementsByClassName("error-mobileno")[0].classList.remove("invalid-input");
			}
		}
		if(count==0)
		{
			if((pswd.value.length<5) )
		{
			document.getElementsByClassName("error-pswd")[0].classList.add("invalid-input");
		}
		else if((pswd.value!=cnfmPswd.value))
		{
			document.getElementsByClassName("error-confm-pswd")[0].classList.add("invalid-input");
		}
		else{
			
		}
		}
		}
});


