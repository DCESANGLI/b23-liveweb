var gender = "";



function selectGender(target)
{
    gender = target.value;
}

function check()
{
    var age = Number(document.getElementById("txt-age").value);

    if(gender==="male" && age>=25 && age<=65)
        document.getElementById("output").innerHTML = "Male Employee is Eligible for insurance";
    else if(gender==="female" && age>=25 && age<=65)
        document.getElementById("output").innerHTML = "Female Employee is Eligible for insurance";
    else
        document.getElementById("output").innerHTML = "Employee is not Eligible for insurance";
}