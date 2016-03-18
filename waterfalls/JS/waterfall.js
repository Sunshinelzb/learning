var dataInit = {
    'data': [{
        'src': './Images/1.jpeg'
    }, {
        'src': './Images/2.jpeg'
    }, {
        'src': './Images/3.jpeg'
    }, {
        'src': './Images/4.jpeg'
    }, {
        'src': './Images/5.jpeg'
    }, {
        'src': './Images/6.jpeg'
    }]
};

function waterfall(parent, sclass) {
    var oParent = document.getElementById(parent);
    var aBox = document.getElementsByClassName(sclass);
    var boxwidth = aBox[0].offsetWidth; //获取盒子的宽度
    var documentwidth = document.documentElement.clientWidth; //页面宽度
    var cnum = Math.floor(documentwidth / boxwidth); //列数
    oParent.style.width = boxwidth * cnum + 'px'; //父容器的宽度
    var aBoxHeight = new Array();
    for (var i = 0; i < aBox.length; i++) {
        if (i < cnum) {
            aBox[i].style.top = 0 + 'px';
            aBox[i].style.left = boxwidth * i + 'px';
            aBoxHeight.push(aBox[i].offsetHeight);
        } else {
            var minHeight = Math.min.apply(null, aBoxHeight);
            var minIndex = getIndex(aBoxHeight, minHeight);
            aBox[i].style.position = 'absolute';//给盒子设置绝对定位
            aBox[i].style.top = minHeight + 'px';
            aBox[i].style.left = aBox[minIndex].offsetLeft + 'px';
            aBoxHeight[minIndex] += aBox[i].offsetHeight; //插入之后改变最小盒子的宽度
        }
    }
}
//返回最小高度那个盒子的下标
function getIndex(arr, value) {
    for (var i in arr) {
        if (arr[i] == value) return i;
    }
}
window.onload = function() {
        waterfall('main', 'box');
    }
    //当滚动页面的时候架子啊图片
function checkScrollside(sClass) {
    var aBox = document.getElementsByClassName(sClass);
    //最后一个盒子的上边距和自身 的高度
    var lastImgIn = aBox[aBox.length - 1].offsetTop + Math.floor(aBox[aBox.length - 1].offsetHeight / 2);
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var documentHeight = document.documentElement.clientHeight || document.body.clientHeight;
    return (lastImgIn < scrollTop + documentHeight);
}
window.onscroll = function() {
        if (checkScrollside('box')) {
            var oParent = document.getElementById('main');
            for (var i = 0; i < dataInit.data.length; i++) {
                // 创建div并插入
                var oBox = document.createElement('div');
                oBox.className = 'box';
                var oPic = document.createElement('div');
                oPic.className = 'pic';
                var oImg = document.createElement('img');
                oImg.src = dataInit.data[i].src;
                oPic.appendChild(oImg);
                oBox.appendChild(oPic);
                oParent.appendChild(oBox);
            }
            //运行下waterfall函数，重载布局
            waterfall('main', 'box');
        }
    }
    //当串口变化时，改变列数，重载页面布局
window.onresize = function() {
    waterfall('main', 'box');
}
