

function displayCards(){
    //declaracion de variables
    const DIV = document.getElementById("mascotas");
    total= 0;
    let card= "";

    //recorrer el arreglo pets[]
    for(let i=0;i<pets.length;i++){

       // console.log(pets[i].cliente);
       card +=`
        <div class="card">
        <p> Cliente: ${pets[i].cliente}</p>
        <p> Celular: ${pets[i].celular}</p>
        <p> Nombre mascota: ${pets[i].nombre}</p>
        <p> Genero: ${pets[i].genero}</p>
        <p> Raza: ${pets[i].raza}</p>
        <p> Rabia: ${pets[i].rabia}</p>
        <p> Servicio: ${pets[i].servicio}</p>
        </div>
       `;
       total += i;
       
      
    }
    

// *Set an initial value for the counter
    //*crear el template de la tarjeta*//

    //insertar la tarjeta en el HTML
    DIV.innerHTML=card;
}