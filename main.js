//Primer intento de un carrito de compras de productos de cosmética


//Variables
let user = prompt("Ingrese un nombre de usuario");
let pass = prompt("Escriba su contraseña");
let ingreso = false;
let pincelesBasic = 800;
let pincelesPro = 2000;
let brocha = 400;
let giftCard = 5000;
let paleta = 3500;
let carrito = 0;

if (user != "" && pass != ""){
    alert("Usuario creado correctamente👏🏾");
    ingreso = true;
}else {
    alert("Datos incorrectos🤦🏾‍♂️");
}

function saludo(usuario){
    alert("Bienvenido" + "|a 👋🏼" + " " + usuario);
}

if (ingreso){
    saludo(user)
    let entrada = prompt("Seleccione el producto que desea agregar a su 🛒: \n1-Set pinceles básico $800. \n2-Set pinceles pro $2000. \n3-Brocha para rubor $400. \n4-Giftcard válido por clase de automaquillaje $5000. \n5-Paleta de sombras+rubor+labial $3500. \n6-Ver 🛒 e iniciar compra. \nPara salir del 🛒 presione X .");

    while (entrada != "X" && entrada != "x") {
        switch (entrada) {
            case "1":
                let compra = parseFloat(prompt("Opción ingresada: Set de pinceles básico.\nIngrese la cantidad que desea comprar"));
                carrito = (carrito + pincelesBasic)* compra;
                alert("Set pinceles básico agregado correctamente\n Total: $ " + carrito);
                
                break;
            case "2":
                let compra2 = parseFloat(prompt("Opción ingresada: Set pinceles pro.\n Ingrese la cantidad que deseas comprar"));
                carrito = (carrito + pincelesPro)* compra2;
                alert("Set princeles pro agregado correctamente\n Total: $ " + carrito);
                break;  
            case "3":
                let compra3 = parseFloat(prompt("Opción ingresada: Brocha para rubor.\n Ingrese la cantidad que deseas comprar"));
                carrito = (carrito + brocha)* compra3;
                alert("Brocha para rubor agregada correctamente\n Total: $ " + carrito);
                break;        
            case "4":
                let compra4 = parseFloat(prompt("Opción ingresada: Giftcard válido por clase de automaquillaje.\n Ingrese la cantidad que deseas comprar"));
                carrito = (carrito + giftCard)* compra4;
                alert("Giftcard agregada correctamente\n Total: $ " + carrito);
                break;
            case "5":
                let compra5 = parseFloat(prompt("Opción ingresada: Paleta.\nIngrese la cantidad que deseas comprar"));
                carrito = (carrito + paleta)* compra5;
                alert("Paleta agregada correctamente\n Total: $ " + carrito);
                break;   
            case "6":
                alert("Total de la compra: $" + carrito);
                let iniciarCompra = prompt("Desea...: \n1)Pagar. \n2)Presione 0 para salir");
                    if (iniciarCompra != 0) {
                        alert("Aun no se como seguir! jejeje");
                    } else if (iniciarCompra == 0) {
                        alert("Vamos de nuevo al 🛒"); 
                    }
                break;
            default:
                alert("Error");
                break;
        }

        entrada = prompt("Selecciones el producto que desea agregar a su carrito: \n1-Set pinceles basico $800. \n2-Set pinceles pro $2000. \n3-Brocha para rubor $400. \n4-Giftcard valido por clase de automaquillaje $5000. \n5-Paleta de sombras+rubor+labial $3500. \n6-Ver carrito e iniciar compra. \nPara salir del carrito presione X .");
        
    }


} else{
    alert("Vuelva a intentarlo🤷🏾‍♂️")
}











