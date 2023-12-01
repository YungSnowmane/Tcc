const codigomorse = {
    'A':'.-','B': '-...','C': '-.-.','D': '-..','E': '.','F': '..-.','G': '--.','H': '....','I': '..','J': '.---','K': '-.-','L': '.-..','M': '--','N': '-.','O': '---','P': '.--.','Q': '--.-','R': '.-.','S': '...','T': '-','U': '..-','V': '...-','W': '.--','X': '-..-','Y': '-.--','Z': '--..', '1':'.-----','1':'..---','3':'...--','4':'....-','5':'.....','6':'-....','7':'--...','8':'---..','9':'----.','0':'-----','1':'.----','2':'..---','3':'...--','4':'....-','5':'.....','6':'-....','7':'--...','8':'---..','9':'----.','0':'-----',',':'--..--','.':'.-.-.-','?':'..--..',';':'-.-.-.',':':'---...','-':'-....-','(':'-.--.',')':'-.--.-', ' ':'/' 
};
const codigomorseaocontrario = {}
    for(const chave in codigomorse){
        if (codigomorse.hasOwnProperty(chave)){
            codigomorseaocontrario[codigomorse[chave]] = chave;
        }
    }              
function codificar(){
    const texto = document.getElementById('cripto').value.toUpperCase(); 
    var novotexto = texto.replaceAll ("Á", "A").replaceAll ("À", "A").replaceAll ("Ã", "A").replaceAll ("Â", "A").replaceAll ("É", "E").replaceAll ("É", "E").replaceAll ("Ê", "E").replaceAll ("Í", "I").replaceAll ("Î", "I").replaceAll ("Ì", "I").replaceAll ("Ó", "O").replaceAll ("Ò", "O").replaceAll ("Õ", "O").replaceAll ("Ú", "U").replaceAll ("Ù", "U").replaceAll ("Û", "U").replaceAll ("Ç", "C").replaceAll ("Ñ", "N").replaceAll ("Ý", "Y");
    let morsecodigo = '';
    for (let i = 0; i < novotexto.length; i++) {
        const letra = novotexto[i];
        if (codigomorse[letra]){
            morsecodigo += codigomorse[letra] + ' ';
        }
    }
    document.getElementById('descripto').value = morsecodigo;
}   

function decodificar(){
    const inputMorse = document.getElementById('descripto').value;
    const morseArray = inputMorse.split(' ');
    let textodescripto = '';
    for(let i = 0; i< morseArray.length; i++) {
        const codigo = morseArray[i];
        if (codigomorseaocontrario[codigo]){
            textodescripto += codigomorseaocontrario[codigo];
        }
        else if (codigo === '/')
        {
            textodescripto += ' ';
        }
    }
    document.getElementById('cripto').value = textodescripto;
};
