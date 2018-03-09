<?php include "config.php"; ?>
<!DOCTYPE html>
<!-- <html manifest="src/apache/manifest.appcache"> -->
<head>
    <title><?php echo $ogTitle; ?></title>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="renderer" content="webkit">
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="format-detection" content="telephone=no,email=no">
    <meta name="screen-orientation" content="portrait">
    <meta name="x5-orientation" content="portrait">
    <meta name="keywords" content="RC語音,RaidCall,RC,RC直播,RC秀場,主播,遊戲實況,網路電視,直播節目,線上K歌,視訊直播,視訊聊天,視訊交友,直播平台">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
    <meta property="fb:app_id" content="1382678158693829"/>
    <meta property="og:site_name" content="RC娛樂—讓夢起飛，音為有你" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="<?php echo $ogUrl; ?>">
    <meta property="og:image" content="<?php echo $ogImage; ?>" />
    <meta property="og:title" content="<?php echo $ogTitle; ?>" />
    <meta property="og:description" content="<?php echo $ogDesc; ?>" />
	<script>
        //rem字体大小
        (function(doc, win) {
            "use strict";
            var docEl = doc.documentElement,
                resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
                recalc = function() {
                    var clientWidth = docEl.clientWidth > 720 ? 720 : docEl.clientWidth;
                    var htmlFontSize = 20;
                    var designWidth = 360;
                    if (!clientWidth) return;
                    docEl.style.fontSize = htmlFontSize * (clientWidth / designWidth) + 'px';
                    var reality = Number(docEl.style.fontSize.substr(0, docEl.style.fontSize.length - 2));
                    var theory = htmlFontSize * (clientWidth / designWidth);
                    if (reality != theory) {
                        docEl.style.fontSize = htmlFontSize * theory / reality * (clientWidth / designWidth) + 'px';
                    }
                    // console.log(window.navigator);
                    console.log("字体大小：" + docEl.style.fontSize);
                };
            if (!doc.addEventListener) return;
            win.addEventListener(resizeEvt, recalc, false);
            doc.addEventListener('DOMContentLoaded', recalc, false);
        })(document, window);
    </script>
    <script>
        // window.RC = null;
        // window.RaidPay = null;
        window.conf = {};
</script>
<link href="dist/index.d10c8f8b70280487ef49.css" rel="stylesheet"></head>
<body>
    <div id="xla-container" style="display:none">
        <?php include("../mod/xla.php") ?>
    </div>
    <div id="myApp"> </div>
<script type="text/javascript" src="dist/vendor.min.js?v=31867b4d90157f9e494e"></script><script type="text/javascript" src="dist/index.min.js?v=d10c8f8b70280487ef49"></script></body>
</html>