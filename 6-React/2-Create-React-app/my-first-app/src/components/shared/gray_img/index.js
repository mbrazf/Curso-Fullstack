// Aqui criamos um component para a imagem 

// importamos o css
import "./style.css"


// criamos o component com a imagem, ele recebe como parâmetro as props
// e na imagem chamamos a prop que irá conter a url da imagem.

// Aqui na classe verificamos se algum elemento tiver a props.gray  irá aplicar a classe que deixa a imagem preto e branco se não irá aplicar a classe que deixa a cor colorida
const GrayImg = (props) => {
    return (
        <img className={props.gray  ? 'gray-img' : 'color-img'} src={props.img_url} alt="Imagem do Planeta"/>
    )
}

export default GrayImg;