var body = $response.body
    .replace(/<head>/, '<head><link rel="stylesheet" href="https://ghproxy.com/https://raw.githubusercontent.com/gggitit/sss/main/comic.css" type="text/css">');
$done({ body });
