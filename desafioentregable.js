

let producto = prompt("Ingrese el producto que desea llevar");
let precio_producto = parseInt(prompt("Ingrese el precio del producto seleccionado "));
let metodo_pago = prompt("Ingresa el metodo de pago, (En efectivo tenes un 15% de descuento y con tarjeta un 10% de recargo)")

function precio_total(){

    if(metodo_pago == "efectivo"){
        let precio_efectivo = ((precio_producto * 15)/100);
        let precio_final = precio_producto - precio_efectivo;
        return("El precio final en efectivo es de : $" + precio_final)
    }
    else if ( metodo_pago == "tarjeta"){
        let precio_tarjeta = ((precio_producto * 10)/100);
        let precio_final = precio_producto + precio_tarjeta;
        return("El precio final con tarjeta es de : $" + precio_final)
    }
    else{
        console.log("Esta accion no se puede realizar. Ingrese efectivo o tarjeta");
    }
}
console.log(precio_total());