function hit(){
    //get 
    var num = document.getElementById("num").value;

    document.getElementById("output").innerHTML = "";
    for(var i=1;i<=10;i++)
    {
        var new_value = num+"*"+i+"="+num*i;
        //set 
        document.getElementById("output").innerHTML += new_value+"<br>";
    }
}