/**
 *
 * @authors Sunshine  625592890@qq.com
 * @date    2016-07-10 17:13:16
 * @hello 	hello world
 * @version $Id$
 */
function $(id) {
    return document.getElementById(id);
}
//sessionStorage示例，临时保存
function saveStorage(id) {
    var target = $(id);
    var str = target.value;
    sessionStorage.setItem("message", str);
}

function loadStorage(id) {
    var target = $(id);
    var msg = sessionStorage.getItem("message");
    target.innerHTML = msg;
}
//localStorage示例，永久保存
function saveStorage(id) {
    var target = $(id);
    var str = target.value;
    localStorage.setItem("message", str);
}

function loadStorage(id) {
    var target = $(id);
    var msg = localStorage.getItem("message");
    target.innerHTML = msg;
}
