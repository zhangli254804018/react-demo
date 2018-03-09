// import _ from 'lodash'
import { format_time , getQueryString } from './filters.js'
export const hasClass = (obj, cls) => {
    var obj_class = obj.className, //获取 class 内容.
        obj_class_lst = obj_class.split(/\s+/); //通过split空字符将cls转换成数组.
    var x = 0;
    for (x in obj_class_lst) {
        if (obj_class_lst[x] == cls) { //循环数组, 判断是否包含cls
            return true;
        }
    }
    return false;
}

export const addClass = (obj, cls) => {
    var obj_class = obj.className, //获取 class 内容.
        blank = (obj_class != '') ? ' ' : ''; //判断获取到的 class 是否为空, 如果不为空在前面加个'空格'.
    var added = obj_class + blank + cls; //组合原来的 class 和需要添加的 class.
    obj.className = added; //替换原来的 class.
}

export const removeClass = (obj, cls) => {
    var obj_class = ' ' + obj.className + ' '; //获取 class 内容, 并在首尾各加一个空格. ex) 'abc    bcd' -> ' abc    bcd '
    obj_class = obj_class.replace(/(\s+)/gi, ' '); //将多余的空字符替换成一个空格. ex) ' abc    bcd ' -> ' abc bcd '
    var removed = obj_class.replace(' ' + cls + ' ', ' '); //在原来的 class 替换掉首尾加了空格的 class. ex) ' abc bcd ' -> 'bcd '
    removed = removed.replace(/(^\s+)|(\s+$)/g, ''); //去掉首尾空格. ex) 'bcd ' -> 'bcd'
    obj.className = removed; //替换原来的 class.
}

export const TransferString = (content) => {
    var string = content;
    try {
        string = string.replace(/\r\n/ig, "<br>")
        string = string.replace(/\n/ig, "<br>");
        string = string.replace(/\\n/ig, "<br>");
    } catch (e) {
        // alert(e.message);  
    }
    return string;
}

export const  addEvent = (element, evnt, funct) => {
    if (element.attachEvent) // IE < 9
        return element.attachEvent('on' + evnt, funct);
    else
        return element.addEventListener(evnt, funct, false);
}

export const sharefacebook = function(callback, url, title, description, picture) {
    var vm = this;
    var href = url || window.location.href || 'http://rcshow.tv/activity/6th/index.php?from=share';
    var redirect_uri = href + '&callback';
    if (conf.token) {
        redirect_uri = href + '&callback&type=' + conf.type + '&kind=' + conf.kind + '&uid=' + conf.uid + '&singerUid=' + conf.suid + '&token=' + conf.token + '&nstat=' + conf.nstat;
    }
    var link = 'http://rcshow.tv/appNew/share/fb.php?href=' + encodeURIComponent(href) + '&redirect_uri=' + encodeURIComponent(redirect_uri);
    FB.ui({
        method: 'share',
        href: href,
        layout: 'box_count',
        mobile_iframe: true,
        // title: title,
        // description: description,
        // picture: picture
    }, function (response) {
        if (response !== undefined) {
            // vm.rca('web', '6th/live', 'share', 'RC語音2017頒獎盛典', link, function () {
            //     Util.alert('分享成功');
            //     callback && callback()
            // });
        } else {
            // Util.alert('分享失敗');
        }
    })
    return false;
}