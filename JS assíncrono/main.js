//Requisições AJAX

/*
var xhr = new XMLHttpRequest(); // Da acesso a funcionalidade do AJAX

xhr.open('GET',' https://api.github.com/users/diego3g')
xhr.send(null); // Para envio de prarâmentros

xhr.onreadystatechange = function() {
  //O 4 siguinifica quando a variável voltar para a gente e for verdade ele printa na tela 
  if (xhr.readyState === 4) {
    //O JSON.parse converte em um objeto.
    console.log(JSON.parse(xhr.responseText));
  }
}
*/

//Promises

/*
var minhaPromise = function () {
  //O resolve é a função que a gente vai usar dentro da Promise,quando o resultado que a gente obteve não foi de sucesso
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.github.com/users/diego3g');
    xhr.send(null);

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200)
          resolve(JSON.parse(xhr.responseText));
      } else {
        reject('Erro na requisição');
      }
    }
  });
}

minhaPromise()
  //Resolve
  //O .then vai ser executado quando a gente chamar o resolve na promise. Se de 200 ele vai executar essa função
  .then(function (response) {
    console.log(response);
  })
  //Reject
  //Vai executar essa caso de errado no caso diferente de 200
  .catch(function (error) {
    console.warn(error);
  });
*/

//Utilizando o Axios

axios.get('https://api.github.com/users/diego3g')
  .then(function (response) {
    console.log(response);
  })        
  .catch(function(error) {
    console.warn(error); 
  });
