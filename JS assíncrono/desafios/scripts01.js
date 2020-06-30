/*var idade = parseInt(prompt('Digite sua idade: '), 10);

function checaIdade(idade) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (idade >= 18) {
        resolve()
      } else {
        reject()
      }
    }, 2000)
  })
}
checaIdade(idade)
  .then(function () {
    console.log("Maior que 18");
  })
  .catch(function () {
    console.log("Menos que 18");
  });
*/

//Com arrow Function

const idade = parseInt(prompt('Digite sua idade: '));
function checaIdade(idade) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (idade >= 18) {
        resolve();
      } else {
        reject();
      }
    }, 2000)
  })
};

checaIdade(idade)
  .then(() => {
    console.log("Maior de 18 anos");
  })
  .catch(() => {
    console.log("Menos de 18 anos");
  });
