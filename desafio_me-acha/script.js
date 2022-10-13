const botaoBuscar = document.querySelector("#buscar");
const CEP_ = document.querySelector("#numeroCep");


let dadosCEP = async function(cep){
    let URL = `https://viacep.com.br/ws/${cep}/json/`;
    let dadosFetch = await fetch(URL);
    let dadosJSON = await dadosFetch.json();

    for(let campo in dadosJSON){
        if(document.querySelector(`#${campo}`)){
            document.querySelector(`#${campo}`).value = dadosJSON[campo];
        }
    }
}
botaoBuscar.addEventListener('click', function(e){
    dadosCEP(CEP_.value);
    e.preventDefault();
})