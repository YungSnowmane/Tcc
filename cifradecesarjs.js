const botaocript = document.querySelector('#botaocriptografar');
const botaodecifra = document.querySelector('#botaodescriptografar');
const chave = document.querySelector('#chave');

const lista = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

let resul = '';

botaocript.addEventListener('click', () => {
    const textarea = document.querySelector('#cripto');
    const valor = Number(chave.value);
    for (let letra of textarea.value){ 
        letra = letra.toLowerCase();
        var novaletra = letra.replaceAll ("á", "a").replaceAll ("à", "a").replaceAll ("ã", "a").replaceAll ("â", "a").replaceAll ("é", "e").replaceAll ("è", "e").replaceAll ("ê", "e").replaceAll ("í", "i").replaceAll ("î", "i").replaceAll ("ì", "i").replaceAll ("ó", "o").replaceAll ("ò", "o").replaceAll ("õ", "o").replaceAll ("ú", "u").replaceAll ("ù", "u").replaceAll ("û", "u").replaceAll ("ç", "c").replaceAll ("ñ", "n").replaceAll ("ý", "y");
        if(!lista.includes(novaletra)){
            continue
        }
        const index = lista.findIndex((item)=>item===novaletra);
        let indexNovaLetra = index + valor;
        if(indexNovaLetra > 25) {
            indexNovaLetra -=26;
        }
        resul += lista[indexNovaLetra];
        document.getElementById('descripto').value = resul;
    }
    resul = '';
})
botaodecifra.addEventListener('click', () => {
    const textarea = document.querySelector('#descripto');
    const valor = Number(chave.value);
    for (let letra of textarea.value){
        if(!lista.includes(letra)){
            continue
        }
        const index = lista.findIndex((item)=>item===letra);
        let indexNovaLetra = index - valor;
        if(indexNovaLetra < 0) {
            indexNovaLetra +=26;
        }
        resul += lista[indexNovaLetra];
        document.getElementById('cripto').value = resul;
    }
    resul = '';
})