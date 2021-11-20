const startButton = document.querySelector(".box-1");

function startClick() {
    //* Alttaki yöntem çalışıyor ama ne kadar sağlıklı bilmiyorum
    //. document.getElementById("img1").src = "resources/light_on.png"

    //* Alttaki de çalışıyor, sanırım bu daha iyi
    document.querySelector('#light1').src = "resources/light_on.png";
}

function stopClick() {
    //. document.getElementById("img1").src = "resources/light_off.png"
    document.querySelector('#light1').src = "resources/light_off.png";
}