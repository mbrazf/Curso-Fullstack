// Aqui criamos um component para a imagem 

// importamos o css
import "./style.css"


// criamos o component com a imagem, ele recebe como parâmetro as props
// e na imagem chamamos a prop que irá conter a url da imagem.
const GrayImg = (props) => {
    return (
        <img className="gray-img" src={props.img_url} alt="Imagem do Planeta"/>
    )
}

export default GrayImg;