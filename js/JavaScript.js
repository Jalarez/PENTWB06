window.onload = function() {

				//Example #1
                document.getElementById('verificar').onclick = function () {
                    
                    let string1 = new RegExp(document.getElementById('cad1').value);
                    let string2 = document.getElementById('cad2').value;

                    if(string1.test(string2)){
                        alert('La cadena 2 contiene a la cadena 1');
                    }
                    else{
                        alert('La cadena 2 no contiene a la cadena 1');
                    }
                }

                //Example #2

                let Cars = [];

                Car = class{
                    constructor(make, model, year){
                        this.make = make;
                        this.model = model;
                        this.year = year;
                    }
                }


                document.getElementById('registrar').onclick = function () {
                	
                    let marca = document.getElementById('marca').value;
                	let modelo = document.getElementById('modelo').value;
                    let año = document.getElementById('año').value;

                	let myCar = new Car(marca, modelo, año);
                    Cars.push(myCar);

                    console.log(Cars);
                	alert('Auto Registrado');

                }
            }