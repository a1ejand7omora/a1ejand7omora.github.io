let  cantidad,inicio,salida,salida1,salida2,salida3,salida4,divsalida;
let  conversion = 0;
let  valorout;


const form = document.querySelector('form');


function leerdatos() {
    cantidad = Number(document.getElementById('inputcantidad').value);
    inicio = document.getElementById('inputdesde').value;
    divsalida = document.getElementById('inputdivsalida').value;
    salida = document.getElementById('total').value;
        
    
        if(inicio==='dolar'){
            if(divsalida==='dolar'){
            salida=cantidad
            document.getElementById('total').value = salida;
            }
            else if(divsalida==='pesocolombiano'){
                salida= cantidad*3768 
                document.getElementById('total').value = salida;
                } 
                if(divsalida==='pesomexicano'){
                    salida=cantidad*20.18
                    document.getElementById('total').value = salida;
                }

                if(divsalida==='euro'){
                    salida=cantidad*0.86
                    document.getElementById('total').value = salida;
                }
                
                if(divsalida==='libraesterlina'){
                    salida=cantidad*0.73
                    document.getElementById('total').value = salida;
                }
            
        }
        else if(inicio==='pesocolombiano'){
            if(divsalida==='pesocolombiano'){
            salida1=cantidad
            document.getElementById('total').value = salida1;
            }
            else if(divsalida==='dolar'){
                salida1= cantidad*0.00026 
                document.getElementById('total').value = salida1;
                } 
                if(divsalida==='pesomexicano'){
                    salida1=cantidad*0.0053
                    document.getElementById('total').value = salida1;
                }

                if(divsalida==='euro'){
                    salida1=cantidad*0.00023
                    document.getElementById('total').value = salida1;
                }
                
                if(divsalida==='libraesterlina'){
                    salida1=cantidad*0.00019
                    document.getElementById('total').value = salida1;
                }
        }
         
        else if(inicio==="pesomexicano"){
            if(divsalida==='pesomexicano'){
            salida2=cantidad
            document.getElementById('total').value = salida2;
        }
            else if(divsalida==='dolar'){
            salida2= cantidad*0.050
            document.getElementById('total').value = salida2;
            } 
            if(divsalida==='pesocolombiano'){
                salida2=cantidad*186.70
                document.getElementById('total').value = salida2;
            }

            if(divsalida==='euro'){
                salida2=cantidad*0.043
                document.getElementById('total').value = salida2;
            }
            
            if(divsalida==='libraesterlina'){
                salida2=cantidad*0.036
                document.getElementById('total').value = salida2;
            }
        }

        else if(inicio==="euro"){
            if(divsalida==='euro'){
            salida3=cantidad
            document.getElementById('total').value = salida3;
            }
            else if(divsalida==='dolar'){
            salida3= cantidad*1.16
            document.getElementById('total').value = salida3;
            } 

            if(divsalida==='pesocolombiano'){
                salida3=cantidad*4387.16
                document.getElementById('total').value = salida3;
            }

            if(divsalida==='pesomexicano'){
                salida3=cantidad*23.49
                document.getElementById('total').value = salida3;
            }
            
            if(divsalida==='libraesterlina'){
                salida3=cantidad*0.85
                document.getElementById('total').value = salida3;
            }
        }

        else if(inicio==="libraesterlina"){
            if(divsalida==='libraesterlina'){
            salida4=cantidad
            document.getElementById('total').value = salida4;
            }

            else if(divsalida==='dolar'){
            salida4=cantidad*1.38
            document.getElementById('total').value = salida4;
            } 

            if(divsalida==='pesocolombiano'){
                salida4=cantidad*5187.76
                document.getElementById('total').value = salida4;
            }

            if(divsalida==='pesomexicano'){
                salida4=cantidad*27.78
                document.getElementById('total').value = salida4;
            }
            
            if(divsalida==='euro'){
                salida4=cantidad*1.18
                document.getElementById('total').value = salida4;
            }
        }
}



form.addEventListener('submit', (e) => {
    e.preventDefault()
    leerdatos()
    
})


