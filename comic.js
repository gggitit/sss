var body = $response.body
    .replace(/<head>/, '<head><link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/gggitit/sss@v0.351/comic.css" type="text/css">');
$done({ body });
