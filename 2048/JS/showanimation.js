/**
 *
 * @authors Sunshine  625592890@qq.com
 * @date    2016-07-27 17:56:58
 * @hello 	hello world
 * @version $Id$
 */

function showNumberWithAnimation(i, j, randNumber) {
    var numberCell = $("#number-cell-" + i + "-" + j);

    numberCell.css({
        "background-color": getNumberBackgroundColor(randNumber),
        "color": getNumberColor(randNumber)
    });
    numberCell.text(randNumber);

    numberCell.animate({
        width: "100px",
        height: "100px",
        top: getPosTop(i, j),
        left: getPosLeft(i, j)
    }, 100);
}

function showMoveAnimation(fromx, fromy, tox, toy) {
    var numberCell = $("#number-cell-" + fromx + "-" + fromy);
    numberCell.animate({
        top: getPosTop(tox, toy),
        left: getPosLeft(tox, toy)
    }, 200);
}

function updateScore(score) {
	$("#score").text(score);
}
