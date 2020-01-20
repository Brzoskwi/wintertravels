var slider = new Array("oferta/murmansk.jpg", "oferta/rejs.jpg", "oferta/spitsbergen.jpg", "oferta/port.jpg", "oferta/lodolamacz.jpg", "oferta/icecap.jpg", "oferta/ciesnina.jpg", "oferta/island.jpg")

var aktualne = 0;

function prev(){
    if(aktualne == 0){
        aktualne = slider.length;
    }
    aktualne--;
    
    if(aktualne == 0 ){
        document.getElementById("ofertysl").src = slider[aktualne];
        document.getElementById("slider_miejsce").innerHTML = "Murmańsk";
        document.getElementById("slider_mn").innerHTML = "2500 zł";
        document.getElementById("slider_wk").innerHTML = "2199 zł";
    }
    else if(aktualne == 1){
        document.getElementById("ofertysl").src = slider[aktualne];
        document.getElementById("slider_miejsce").innerHTML = "Rejs po Arktyce";
        document.getElementById("slider_mn").innerHTML = "6299 zł";
        document.getElementById("slider_wk").innerHTML = "5999 zł";
    }
    else if(aktualne == 2){
        document.getElementById("ofertysl").src = slider[aktualne];
        document.getElementById("slider_miejsce").innerHTML = "Spitsbergen";
        document.getElementById("slider_mn").innerHTML = "1600 zł";
        document.getElementById("slider_wk").innerHTML = "1400 zł";
    }
    else if(aktualne == 3){
        document.getElementById("ofertysl").src = slider[aktualne];
        document.getElementById("slider_miejsce").innerHTML = "Port Lockroy";
        document.getElementById("slider_mn").innerHTML = "3399 zł";
        document.getElementById("slider_wk").innerHTML = "3200 zł";
    }
    else if(aktualne == 4){
        document.getElementById("ofertysl").src = slider[aktualne];
        document.getElementById("slider_miejsce").innerHTML = "Lodołamaczem po Biegunie";
        document.getElementById("slider_mn").innerHTML = "5000 zł";
        document.getElementById("slider_wk").innerHTML = "4000 zł";
    }
    else if(aktualne == 5){
        document.getElementById("ofertysl").src = slider[aktualne];
        document.getElementById("slider_miejsce").innerHTML = "IceCap";
        document.getElementById("slider_mn").innerHTML = "2145 zł";
        document.getElementById("slider_wk").innerHTML = "2000 zł";
    }
    else if(aktualne == 6){
        document.getElementById("ofertysl").src = slider[aktualne];
        document.getElementById("slider_miejsce").innerHTML = "Cieśnina Bransfielda";
        document.getElementById("slider_mn").innerHTML = "3000 zł";
        document.getElementById("slider_wk").innerHTML = "2500 zł";
    }
    else if(aktualne == 7){
        document.getElementById("ofertysl").src = slider[aktualne];
        document.getElementById("slider_miejsce").innerHTML = "Deception Island";
        document.getElementById("slider_mn").innerHTML = "2700 zł";
        document.getElementById("slider_wk").innerHTML = "1500 zł";
    }
}

function next(){
    aktualne++;
    if(aktualne == slider.length){
        aktualne = 0;
    }
    if(aktualne == 0 ){
        document.getElementById("ofertysl").src = slider[aktualne];
        document.getElementById("slider_miejsce").innerHTML = "Murmańsk";
        document.getElementById("slider_mn").innerHTML = "2500 zł";
        document.getElementById("slider_wk").innerHTML = "2199 zł";
    }
    else if(aktualne == 1){
        document.getElementById("ofertysl").src = slider[aktualne];
        document.getElementById("slider_miejsce").innerHTML = "Rejs po Arktyce";
        document.getElementById("slider_mn").innerHTML = "6299 zł";
        document.getElementById("slider_wk").innerHTML = "5999 zł";
    }
    else if(aktualne == 2){
        document.getElementById("ofertysl").src = slider[aktualne];
        document.getElementById("slider_miejsce").innerHTML = "Spitsbergen";
        document.getElementById("slider_mn").innerHTML = "1600 zł";
        document.getElementById("slider_wk").innerHTML = "1400 zł";
    }
    else if(aktualne == 3){
        document.getElementById("ofertysl").src = slider[aktualne];
        document.getElementById("slider_miejsce").innerHTML = "Port Lockroy";
        document.getElementById("slider_mn").innerHTML = "3399 zł";
        document.getElementById("slider_wk").innerHTML = "3200 zł";
    }
    else if(aktualne == 4){
        document.getElementById("ofertysl").src = slider[aktualne];
        document.getElementById("slider_miejsce").innerHTML = "Lodołamaczem po Biegunie";
        document.getElementById("slider_mn").innerHTML = "5000 zł";
        document.getElementById("slider_wk").innerHTML = "4000 zł";
    }
    else if(aktualne == 5){
        document.getElementById("ofertysl").src = slider[aktualne];
        document.getElementById("slider_miejsce").innerHTML = "IceCap";
        document.getElementById("slider_mn").innerHTML = "2145 zł";
        document.getElementById("slider_wk").innerHTML = "2000 zł";
    }
    else if(aktualne == 6){
        document.getElementById("ofertysl").src = slider[aktualne];
        document.getElementById("slider_miejsce").innerHTML = "Cieśnina Bransfielda";
        document.getElementById("slider_mn").innerHTML = "3000 zł";
        document.getElementById("slider_wk").innerHTML = "2500 zł";
    }
    else if(aktualne == 7){
        document.getElementById("ofertysl").src = slider[aktualne];
        document.getElementById("slider_miejsce").innerHTML = "Deception Island";
        document.getElementById("slider_mn").innerHTML = "2700 zł";
        document.getElementById("slider_wk").innerHTML = "1500 zł";
    }
}