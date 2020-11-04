window.addEventListener("load",inicio,true);

function inicio(){
    document.getElementById("mensaje").addEventListener("keypress", 
        function(){
        this.value = this.value.toUpperCase();
    }, true);
    
    document.getElementById("cifrar").addEventListener("click",
        function(){  
        var texto = document.getElementById("mensaje").value;
        var mover = 3;               
        document.getElementById("mensaje2").value = cifrar(texto, mover);
    },true);
    document.getElementById("descifrar").addEventListener("click",
        function(){  
        var texto = document.getElementById("mensaje").value;
        var mover = 3;                             
        document.getElementById("mensaje2").value = descifrar(texto, mover);
    },true);
}

function cifrar(texto, mover) {
    if (!texto) 
    return ''; 
    var letras = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    mover = mover; 
    return texto.replace(/[A-Z]/ig, c => letras[(letras.indexOf(c) + mover) ]);
}

function descifrar(texto, mover) {
    if (!texto) 
    return ''; 
    var letras = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    mover = mover; 
    return texto.replace(/[A-Z]/ig, c => letras[(letras.indexOf(c) - mover) ]);
}