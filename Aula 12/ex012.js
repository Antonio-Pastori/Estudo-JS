var agora = new Date()
console.log(agora)
var hora = agora.getHours()
console.log(`Agr são ${hora} horas`)
if (hora < 12 && hora > 5) {
    console.log("Bom Dia!")
}else if(hora > 12 && hora < 19){
    console.log("Boa Tarde!")
}else if(hora > 19 && hora < 24){
    console.log("Boa Noite!")
}else{
    console.log("Vai dormir vagaba!")
}