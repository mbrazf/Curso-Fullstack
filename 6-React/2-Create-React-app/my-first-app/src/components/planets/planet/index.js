// Aqui criamos um component Planet com as informações dos planetas



// Aqui importamos os components

import GrayImg from "../../shared/gray_img";

import DescriptionWithLink from "../../shared/description_with_link";




// Aqui o component Planet recebe as props como parâmetro, e nos elementos e components passamos o nome da prop que esperamos receber
const Planet = (props) => {
    return (
        <div>
            <h4>{props.name}</h4>
            <DescriptionWithLink description={props.description} link={props.link}/>
            <GrayImg img_url={props.img_url}/>
        </div>
    )
}

export default Planet;