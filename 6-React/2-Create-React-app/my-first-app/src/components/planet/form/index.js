// Aqui importamos os recursos e hooks utilizados
import { Fragment , useState} from 'react'


// Aqui criamos um state inicial com um objeto com os itens que serão adicionados no form
const initialState = {
        name: ' ',
        
}

// Aqui criamos o component Form
const Form = (props) => {

    // Aqui criamos um state fields com o método setFields que recebe o objeto initialState com os itens que serão adicionados ao form
    const [fields, setFields] = useState( initialState )

    // Aqui criamos uma função que recebe o event como parâmetro e altera o state 
    // pegamos todos os fields/campos do input  utilizando o spread, e passamos o value digitado nos fields para o name
    const handleFieldsChange = e => setFields({
        ...fields,
        [e.currentTarget.name]: e.currentTarget.value
    })


    // Aqui criamos outra função nela acessamos as props e o método addSatellite criado no Component Planet que irá adicionar os satélites digitados no input ao clicar no botão, e utilizamos o e.preventDefault() para evitar o reload da página ao clicar no botão submit, e abaixo chamamos o método setFields para alterar o state e passamos para ele a variável initialState e alteramos o state para vazio ou seja após enviar o form ele será limpo
    const handleSubmit = e => {
        props.addSatellite(fields)
        e.preventDefault()
        setFields(initialState)
    }


    // Aqui os elementos do input, no input chamamos o método onChange que chama a função criada acima e no form chamamos o evento onSubmit que chama a função handleSubmit
    // Agora podemos adicionar vários inputs e no campo value acessamos o state fields que contém o objeto com os itens e a propriedade desejada, e ai basta alterar o id, o name e seu value
    return(
        <Fragment>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Satellite Name: </label>
                    <input id="name" type="text" name="name" value={fields.name} onChange={handleFieldsChange}/>
                </div>
                <br />
                <input type="submit" />
            </form>
        </Fragment>
    )
}

// Aqui exportamos o component
export default Form;