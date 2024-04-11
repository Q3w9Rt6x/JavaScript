document.addEventListener('DOMContentLoaded',function(){
    let btn = document.getElementById('btn');
    let result = document.getElementById('result');
    let timer;
    let count = 0;
    btn.addEventListener('click',function(){
        timer = setInterval(function(){
            count++;
            result.innerHTML = count + "秒経過";
        },1000);
    });

    let startBtn = document.getElementById('startBtn');
    let stopBtn = document.getElementById('stopBtn');
    let result2 = document.getElementById('result2');
    let count2 = 0;
    let timer2;
    startBtn.addEventListener('click',function(){
        timer2 = setTimeout(function(){
            result2.innerHTML = "1秒後に実行";
        },1000);
    });
});