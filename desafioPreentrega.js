/*La entrada del usuario y la bienvenida */ 
let usuario = prompt("Bienvenido/a a nuestra tienda online. Ingrese su nombre");
console.log("Bienvenido/a a nuestra tienda Sr/a : ", usuario)
console.log("A continuacion la lista de nuestros productos :")


//El objeto con las propiedades :

class Producto{
        constructor(nombre, precio, talle, color, codigo){
            this.nombre = nombre;
            this.precio = precio;
            this.talle = talle ;
            this.color = color;
            this.codigo = codigo;
        }

};
//El arreglo del objeto
let lista_productos = [];
lista_productos.push(new Producto("Falda", 2000, " L ", " blanco ", 0));
lista_productos.push(new Producto("Saco ", 1500, " M ", " rojo ", 1));
lista_productos.push(new Producto("Jean", 4000, " M ", " azul ", 2));
lista_productos.push(new Producto("Medias", 3500, " S ", " marron ", 3));
lista_productos.push(new Producto("Campera", 10000, " XL ", " verde ", 4));
lista_productos.push(new Producto("Gorra", 3000, " M ", " negro ", 5));

for(let Producto of lista_productos ){
    console.log("Nombre : ", Producto.nombre , "Precio : ", Producto.precio , "Talle : ", Producto.talle , "Color : ", Producto.color ,  "Codigo : " , Producto.codigo);
}
let desea_algo_mas = "S"
let carrito = [];
while(desea_algo_mas == "S" ){
    let codigo_de_producto = prompt("Seleccione el codigo del producto que desea llevar")
    console.log("El producto selecionado es :" , lista_productos[codigo_de_producto] )
    carrito.push(lista_productos[codigo_de_producto]);
    

    desea_algo_mas = prompt("Desea algo mas ? Responda S/N");
 
}

console.log("Los productos seleccionados son: ");
carrito.forEach((element)=>{
    console.log(element);
});


let precio_producto = carrito.reduce((acc, el) => acc + el.precio, 0)
console.log("El precio total es : " , precio_producto);

let metodo_pago = prompt("Ingrese el metodo de pago : A (efectivo con 10% de descuento) o B (tarjeta con 15% de recargo)");
function precio_total(){

    if((metodo_pago == "A") || (metodo_pago == "a") ){
        let precio_efectivo = ((precio_producto * 15)/100);
        let precio_final = precio_producto - precio_efectivo;
        return("El precio final en efectivo es de : $" + precio_final)
    }
    else if((metodo_pago == "B") || (metodo_pago == "b")){
        let precio_tarjeta = ((precio_producto * 10)/100);
        let precio_final = precio_producto + precio_tarjeta;
        return("El precio final con tarjeta es de : $" + precio_final)
    }
    else{
        console.log("Esta accion no se puede realizar. Ingrese A o B");
    }
}
console.log(precio_total());
let desicion = prompt("Desea comprarlo ? Responda S/N");
if((desicion == "S")){
    console.log("Perfecto que lo disfrutes, gracias por su apoyo. Hasta pronto")
    
}
else if((desicion == "N")){
    console.log("No hay problema, lo esperamos para la proxima.")
}
else{
    console.log("Esta accion no se puede realizar vuelva a intentarlo")
};