function sayMe(num){
    if(num>0) {
        console.log(num)
         alert('este numero es positivo')
    }else if (num < 0) {
        alert("este numero es negativo") 

    }else if (num === 0) {
        alert('el numero 0')

    }else if (num === null) {
        alert("el numero es nulo")
        
    }else if(num === undefined) {
         alert(num)
         alert('valor vacio')
    }
}
function hervirAgua(){
    for(var temperatura = 0; temperatura <= 100; temperatura++){    
        console.log(temperatura + "Grados")
        if(temperatura === 100){
        alert("El agua ya esta lista")
        }
    }
}
function conteoPersonal(){
    for(var asistencia = 1; asistencia <= 10; asistencia++){
        console.log(asistencia + "Persona")
        if(asistencia === 10){
        alert("Personal completo")
        }
    }
}