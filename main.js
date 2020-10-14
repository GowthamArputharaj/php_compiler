function execute()
{
    var code = document.getElementById("code").value;
    // code.value= 'asdf';
    var current = window.location.href;
    let start = new Date()

    // location = current + 'server.php';
    // alert(location + current + 'server.php')
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("output").innerHTML = this.responseText;
        }
    };
    code = JSON.stringify(code);
    xhttp.open("GET", location+'server.php?location='+current+'&code='+code, true);
    // confirm('do u want to send code'+code)
    xhttp.send();
    
    
    let end = new Date()
    let elapsed = end.getTime() - start.getTime() 
    // let elapsed = end - start; 

    document.getElementById('elapsed').innerText = `Response time = ${elapsed} ms`;
    
    date = new Date();
    document.getElementById('time').innerText = date.toUTCString();;

}   