class MeuErro extends Error{
  constructor(message){
    super(message)
    this.name = "Meu erro"
  }
}

class NerdIF {
  constructor(estudante, cosplay, nota_cosplay) {
    this.estudante = estudante;
    this.cosplay = cosplay;
    this.nota_cosplay = nota_cosplay;
  }

  retornarAtributos() {
    try{
    return this.atributos()
    }catch(error){
      return error
    }
  }

  atributos() {
    if (this.estudante != "" && this.cosplay != "" && this.nota_cosplay != ""){
      return this.estudante + " " + this.cosplay + " " + this.nota_cosplay
  }
  else {
      throw new MeuErro("Não deixe algum atributo em branco")
  }
  }
}

const aluno = new NerdIF("", "Homem-Aranha", 9.5);
console.log(aluno.retornarAtributos())

/*
console.log(atributos.estudante); 
console.log(atributos.cosplay);   
console.log(atributos.nota_cosplay);
*/

