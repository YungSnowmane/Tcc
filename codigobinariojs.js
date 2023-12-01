function codificar(){
  const texto = document.getElementById('cripto').value;
  let resulta ='';
  for(let i = 0; i < texto.length; i++){
    resulta += texto[i].charCodeAt(0).toString(2) + " ";
  }
document.getElementById('descripto').value = resulta.trim();
}
function decodificar() {
  const text = document.getElementById('descripto').value;
  let resul ='';
    const binarioArray = text.split(" ");
    for(let i = 0; i < binarioArray.length; i++){   
      resul += String.fromCharCode(parseInt(binarioArray[i], 2));
    }
    document.getElementById('cripto').value = resul.trim();
  }
  