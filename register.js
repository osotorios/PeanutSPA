console.log("Registro");
let pets = []; //array
//crear consturctor
function Pet(clienteP,celularP,nombreP,generoP,razaP,rabiaP,servicioP ){
    this.cliente= clienteP;
    this.celular=celularP;
    this.nombre= nombreP;
    this.genero= generoP;
    this.raza= razaP;
    this.rabia= rabiaP;
    this.servicio= servicioP;
}

    let inputCliente=document.getElementById("txtCliente");
    let inputCelular=document.getElementById("txtCelular");
    let inputNombre=document.getElementById("txtNombre");
    let inputGenero=document.getElementById("txtGenero");
    let inputRaza=document.getElementById("txtRaza");
    let inputRabia=document.getElementById("vacRabia");
    let inputServicio=document.getElementById("selServicio");

function validacion(pet){
    let valida=true;  //todo bien

    //reset de errores
        inputCliente.classList.remove('error');
        inputCelular.classList.remove('error');
        inputNombre.classList.remove('error');
        inputGenero.classList.remove('error');
        inputRaza.classList.remove('error');
        inputRabia.classList.remove('error');
        inputServicio.classList.remove('error');

    if(pet.cliente == ""){
           inputCliente.classList.add('error');
            valida=false;
    }
    if(pet.celular == ""){
         inputCelular.classList.add('error');
         valida=false;
    }
    if(pet.nombre == ""){
         inputNombre.classList.add('error');
         valida=false;
    }
    if(pet.genero == ""){
         inputGenero.classList.add('error');
         valida=false;
    }  
    if(pet.raza == ""){
        inputRaza.classList.add('error');
        valida=false;
    }
    if(pet.rabia == ""){
        inputRabia.classList.add('error');
        valida=false;
    }
    if(pet.servicio == ""){
        inputServicio.classList.add('error');
         valida=false;
        } 
    
    return valida;

}
//crear function de registro
function Registro() {
    console.log("Registrando mascota ...");
    //obtener los valores de los inputs
    //crear objeto
    let newPet = new Pet (inputCliente.value,inputCelular.value,inputNombre.value,inputGenero.value,inputRaza.value,inputRabia.value,inputServicio.value);

    if(validacion(newPet)==true){
        
        
        console.log(newPet);
        pets.push(newPet);
        displayCards();
        //Limpiar
      limpiarForm();
    }
}
function limpiarForm(){
    inputCliente.value="";
    inputCelular.value="";
    inputNombre.value="";
    inputGenero.value="";
    inputRaza.value="";
    inputRabia.value="";
    inputServicio.value="";
}

function init(){
    console.log("Register");
    //objeto
    let pet1 = new Pet("Roberto Martinez", "686112233", "Peque","Macho","Chihuahua", "Si","Grooming");
    pets.push(pet1);
    let pet2 = new Pet("Fernando", "68611422", "Estrella","Hembra","Pitbul", "No","Vacuna");
    pets.push(pet2);
    let pet3 = new Pet("Rubio", "686113233", "Luna","Macho","Dobberman", "No","Grooming");
    pets.push(pet3);
    
    displayCards();
}

window.onload=init; //ejectua init cuando termina de renderizar el HTML

