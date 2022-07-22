testingArrow = {
    name: "Escola de Javascript",
    normalFunction: function(){
      console.log(this.name)
    },
    arrowFunction: () => {
      console.log(this.name)
    }
  }
  testingArrow.normalFunction()
  testingArrow.arrowFunction()
  
  // A função padrão ela obedece ao escopo do objeto, então ela é chamada dentro do contexto de onde foi criada
  
  // A Arrow Function sempre vai estar inserida no contexto de onde ela é chamada

  // Uma função padrão tem um próprio this que no exemplo o this se refere ao objeto testingArrow, já a Arrow Function não tem seu próprio this, então ao chamarmos o this na arrow function irá retornar um objeto vazio, ou um objeto window que corresponde ao contexto do navegador.




