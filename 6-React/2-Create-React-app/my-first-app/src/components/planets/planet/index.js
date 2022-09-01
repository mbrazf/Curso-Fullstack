// Aqui criamos um component Planet com as informações dos planetas


// Aqui importamos os components
import GrayImg from "../../shared/gray_img";
import DescriptionWithLink from "../../shared/description_with_link";


// Aqui iremos fazer a mesma coisa que o exemplo anterior mas de uma forma mais direta
// dentro do return criamos o título e uma ul e dentro da ul criamos o array e utilizamos diretamente o método map nele e para cada elemento do array será criado um li 



const Planet = (props) => {

    let title;
    if(props.title_with_underline)
        title = <h4><u>{props.name}</u></h4>
    else 
        title = <h4>{props.name}</h4>

    return (
        <div >
            {title}
            <DescriptionWithLink description={props.description} link={props.link}/>
            <GrayImg img_url={props.img_url} gray={props.gray}/>
            <hr />
        </div>
    )
}

export default Planet;