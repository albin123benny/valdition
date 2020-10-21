function checkEmail(text){
    return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(text))
}
function checkPassword(text){
    return (/^.{8,}$/.test(text));
}
function checkPhone(number){
    return (/^(6|7|8|9)[0-9]{9}$/.test(number));
}

function checkName(text){
    return (/^[A-Za-z]+$/.test(text));
}




function valName()
        {
            var hname = document.getElementsByName('uname')[0];
            if (checkName(hname.value)){
                document.getElementById("uname").style.borderColor = "green";
                } 
            else
                {
                   document.getElementById("uname").style.borderColor = "red"; 
                }
        }

     function valPassword()
     {
         var hs = document.getElementsByName('password')[0];
         if (checkPassword(hs.value)){
             document.getElementById("password").style.borderColor="green";
         }
         else
         {
             document.getElementById("password").style.borderColor="red";
         }
     }   

function valPassword1()
{
    var hd = document.getElementsByName('password1')[0];
    if (checkPassword(hd.value)){
        document.getElementById("password1").style.borderColor="green";

    }
    else
        {
        document.getElementById("password1").style.borderColor="red";
    }
}
function valReptpassword ()
{
    var hd = document.getElementsByName('rept-password') [0];
    if (checkPassword(hd.value)){
        document.getElementsById("rept-password").style.borderColor="green";
    }
    else
    {
        document.getElementById("rept-password").style.borderColor="red";
    }
}


    function valEmail()
        {
            var he = document.getElementsByName('email')[0];
            if (checkEmail(he.value)){
                document.getElementById("email").style.borderColor = "green";
                } 
            else
                {
                   document.getElementById("email").style.borderColor = "red"; 
                }
        }
        function valEmail1()
        {
            var he = document.getElementsByName('email1')[0];
            if (checkEmail(he.value)){
                document.getElementById("email1").style.borderColor = "green";
                } 
            else
                {
                   document.getElementById("email1").style.borderColor = "red"; 
                }
        }
function valMob()
    {
        var hm = document.getElementsByName('mobno')[0];
            if (checkPhone(hm.value)){
                document.getElementById("mobno").style.borderColor = "green";
                } 
            else
                {
                   document.getElementById("mobno").style.borderColor = "red"; 
                }
    }      
     



