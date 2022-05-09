/* const precioOriginal = 120;
const descuento = 18; */

const coupons = [
    "Cupon10",
    "Cupon20",
    "Cupon50"
];

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;

    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
   const inputPrice = document.getElementById("InputPrice");
   const priceValue = inputPrice.value; 

   const inputCoupon = document.getElementById("InputCoupon");
   const couponValue = inputCoupon.value; 

   const precioConDescuento = calcularPrecioConDescuento(priceValue, couponValue);

   const resultP = document.getElementById("ResultP");
   console.log(resultP);
   resultP.innerText = "El precio con descuento es : $" + precioConDescuento;
}

                                                                                                             

//console.log({
    //precioOriginal,
    //descuento,
    //porcentajePrecioConDescuento,
    //precioConDescuento
//})