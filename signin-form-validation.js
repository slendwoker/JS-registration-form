function formValidation()
{
	var uemail = document.signinfm.uemail;
	var passid = document.signinfm.upassword;
	if(ValidateEmail(uemail))
		{
			if(passid_validation(passid))
				return true;
		}
	return false;
}

function ValidateEmail(uemail)
{
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(uemail.value.match(mailformat))
	{
		return true;
	}
	else
	{
		alert("You have entered an invalid email address!");
		return false;
	}
}

function passid_validation(passid)
{
	var passid_len = passid.value.length;
	if (passid_len == 0)
	{
		alert("Password should not be empty.");
		passid.focus();
		return false;
	}
	window.location.reload()
}
