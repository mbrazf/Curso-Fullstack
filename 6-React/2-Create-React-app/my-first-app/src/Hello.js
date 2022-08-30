// Aqui criamos o primeiro component que exibe um Hello World
// o component também pode ser criado utilizando arrow functions
const HelloWorld = () => {
    return <h1>Hello World</h1>
}

/*  também podemos criar um component de classe

class HelloWorld extends React.Component{
    render(){
        return <h1>Hello World</h1>
    }
}
*/

// e aqui exportamos o component para ser utilizado em outro arquivo
export default HelloWorld;