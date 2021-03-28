function silinder() {
    var jariSilinder = (document.getElementById("jari-jari").value);
    var tinggiSilinder = (document.getElementById("tinggi").value);
    var phi = 3.14;
        
    jariSilinder = parseInt(jariSilinder);
    tinggiSilinder = parseInt(tinggiSilinder);
    document.getElementById("luas").innerHTML = Math.round(2 * phi * jariSilinder * (jariSilinder + tinggiSilinder));
    document.getElementById("volume").innerHTML = Math.round(phi * jariSilinder * jariSilinder * tinggiSilinder);
}

function kerucut() {
    var jariKerucut = (document.getElementById("jari-jari").value);
    var garisPelukisKerucut = (document.getElementById("garis").value);
    var tinggiKerucut = (document.getElementById("tinggi").value);
    var phi = 3.14;
        
    jariKerucut = parseInt(jariKerucut);
    garisPelukisKerucut = parseInt(garisPelukisKerucut);
    tinggiKerucut = parseInt(tinggiKerucut);
    document.getElementById("luas").innerHTML = Math.round((jariKerucut + garisPelukisKerucut) * (phi * jariKerucut));
    document.getElementById("volume").innerHTML = Math.round((phi * jariKerucut * jariKerucut * tinggiKerucut)/3);
}

function bola() {
    var jariBola = (document.getElementById("jari-jari").value);
    var phi = 3.14; 
    
    jariBola = parseInt(jariBola);
    document.getElementById("luas").innerHTML = Math.round(4 * phi * jariBola * jariBola);
    document.getElementById("volume").innerHTML = Math.round((4 * phi * jariBola * jariBola * jariBola)/3);
}