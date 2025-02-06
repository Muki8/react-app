export function convertirNumeroALetras(num) {
    const unidades = ["", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];
    const especiales = ["diez", "once", "doce", "trece", "catorce", "quince"];
    const decenas = ["", "", "veinte", "treinta", "cuarenta", "cincuenta", "sesenta", "setenta", "ochenta", "noventa"];
    const centenas = ["", "cien", "doscientos", "trescientos", "cuatrocientos", "quinientos", "seiscientos", "setecientos", "ochocientos", "novecientos"];
  
    if (num === 1000) return "mil";
    if (num < 10) return unidades[num];
    if (num < 16) return especiales[num - 10];
    if (num < 100) return decenas[Math.floor(num / 10)] + (num % 10 !== 0 ? " y " + unidades[num % 10] : "");
    return centenas[Math.floor(num / 100)] + (num % 100 !== 0 ? " " + convertirNumeroALetras(num % 100) : "");
  }
  