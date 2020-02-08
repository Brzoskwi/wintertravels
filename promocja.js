window.onload = rotate;

var promocje = new Array("oferta/rejs.jpg","oferta/spitsbergen.jpg","oferta/wyprawa.jpg","oferta/lodolamacz.jpg","oferta/murmansk.jpg");

function rotate(){
    var losowa = Math.floor(Math.random()*promocje.length);
    losowa--;
    
    if(losowa == 0){
        document.getElementById("promkajpg").src = promocje[losowa];
        document.getElementById("miejsce").innerHTML = "REJS";
        document.getElementById("mn").innerHTML = "2599 zł";
        document.getElementById("wk").innerHTML = "1599 zł";
    }
    else if(losowa == 1){
        document.getElementById("promkajpg").src = promocje[losowa];
        document.getElementById("miejsce").innerHTML = "Spitsbergen";
        document.getElementById("mn").innerHTML = "2500 zł";
        document.getElementById("wk").innerHTML = "2199 zł";
    }
    else if(losowa == 2){
        document.getElementById("promkajpg").src = promocje[losowa];
        document.getElementById("miejsce").innerHTML = "Wyprawa";
        document.getElementById("mn").innerHTML = "3399 zł";
        document.getElementById("wk").innerHTML = "3200 zł";
    }
    else if(losowa == 3){
        document.getElementById("promkajpg").src = promocje[losowa];
        document.getElementById("miejsce").innerHTML = "Lodołamacz";
        document.getElementById("mn").innerHTML = "6299 zł";
        document.getElementById("wk").innerHTML = "5999 zł";
    }
    else if(losowa == 4){
        document.getElementById("promkajpg").src = promocje[losowa];
        document.getElementById("miejsce").innerHTML = "Murmańsk";
        document.getElementById("mn").innerHTML = "1600 zł";
        document.getElementById("wk").innerHTML = "1400 zł";
    }
    setTimeout("rotate()",4000);
}