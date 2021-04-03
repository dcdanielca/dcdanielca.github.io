window.onload = function(){
    new Typed('#typed-strings',{
        strings: [
            'Desarrollo de Software ^1000', 
            'Bases de datos ^1000', 
            'Redes ^1000', 
            'Computación en la Nube ^1000', 
            'Ciencia de los Datos ^1000', 
            'Analítica ^1000', 
            'Inteligencia Artificial ^1000', 
        ],
        backSpeed: 30,
        typeSpeed: 50,
        loop: true, 
        loopCount: Infinity,
    });
    AOS.init()
}
