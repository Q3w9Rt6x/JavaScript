document.addEventListener('DOMContentLoaded',function(){
    var ele = document.getElementById('nice')
    ele.addEventListener('click',function(){
        alert('いいね！');
    });

    ele.addEventListener('click',function(){
        document.getElementsByTagName('img').item(0).src="nice.png";
    });

var weather = document.getElementById('weather');
weather.addEventListener('mouseover',function(){
    weather.style.color = "red";
});

});