
// function handler(event);
// {
//     e.preventdefault()
//     x=typenameo
//     y=typenames
//     alert(x+y)
//     if(x=="" && y=="")

//     alert("who are you")

// }



function handler(e);{
    e.preventDefault()
    var name=document.getElementById("typenameo").value;
    var email=document.getElementById("typenames").value;
    var number=document.getElementById("typenamet").value;
    var subject=document.getElementById("subject1").value;
    var comment=document.getElementById("ta").value;
    
    result=<b>NAME:</b>+name <br><b>EMAIL:</b>+email <br><b>NUMBER:</b>+number<br>
    <b>SUBJECT:</b>+subject<br> <b>COMMENT:</b>+comment;
    
    document.getElementById("result").innerHTML=result ;
}
