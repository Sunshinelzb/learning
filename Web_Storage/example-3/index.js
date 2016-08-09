/**
 *
 * @authors Sunshine  625592890@qq.com
 * @date    2016-07-10 17:13:16
 * @hello   hello world
 * @version $Id$
 */
function saveStorage() {
    var data = new Object;
    data.name = document.getElementById('name').value;
    data.email = document.getElementById('email').value;
    data.tel = document.getElementById('tel').value;
    data.memo = document.getElementById('memo').value;
    /*转换成JSON格式的文本数据*/
    var str = JSON.stringify(data);
    // console.log(str);
    localStorage.setItem(data.name, str);
    alert("数据已保存。");
}

function findStorage(id) {
    var find = document.getElementById('find').value;
    var str = localStorage.getItem(find);
    /*转换为JSON对象*/
    var data = JSON.parse(str);
    // console.log(data);
    var result = "姓名: " + data.name + '<br>';
    result += "EMAIL: " + data.email + '<br>';
    result += "电话号码: " + data.tel + '<br>';
    result += "备注: " + data.memo + '<br>';
    var target = document.getElementById(id);
    target.innerHTML = result;
}
