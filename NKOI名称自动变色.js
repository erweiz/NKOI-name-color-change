// ==UserScript==
// @name         NKOI名称自动变色
// @namespace    http://oi.nks.edu.cn/
// @version      0.1
// @description  NKOI缤纷用户破解！[v0.1]
// @author       erweiz
// @match        *://oi.nks.edu.cn/*
// @match        *://42.247.7.121/*
// @grant        none
// ==/UserScript==
var blink_color = [0, 0, 0];
var toward_color = [0, 0, 0];
function to_hex_2(x) {
    return (parseInt(x / 16)).toString(16) + (x % 16).toString(16);
}
function changeColor(){
    var objs = document.getElementsByName("blink");
    if (objs.length == 0) {
        return;
    }
    if (blink_color[0] == toward_color[0] && blink_color[1] == toward_color[1] && blink_color[2] == toward_color[2]) {
        toward_color[0] = parseInt(Math.random() * 255.9);
        toward_color[1] = parseInt(Math.random() * 255.9);
        toward_color[2] = parseInt(Math.random() * 255.9);
    }
    var i = parseInt(Math.random() * 2.99);
    var j = toward_color[i] - blink_color[i];
    j = j > 16 ? 16 : j;
    j = j < -16 ? -16 : j;
    blink_color[i] += j;
    var color_str = "#" + to_hex_2(blink_color[0]) + to_hex_2(blink_color[1]) + to_hex_2(blink_color[2]);
    //console.log(color_str);
    for (var k = 0; k < objs.length; k ++) {
        objs[i].style.color = color_str;
    }
}
setInterval("changeColor()", 300);

function blink_init_function() {
    var objs = document.getElementsByName("if_blink");
    for (var i = objs.length - 1; i >= 0; i--) {
        objs[i].setAttribute("name", "blink");
    }
}
(document).ready(blink_init_function());