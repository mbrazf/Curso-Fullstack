// Criamos o component que irá conter a descrição do planeta

import { Fragment } from "react";


// O component recebe props, e nos elementos passamos as props que esperamos receber do outro component

// Aqui utilizamos o conditional rendering, verificamos se o elemento recebe a props.link, se recebe exibe o component normalmente com o link se não exibe o component sem o link e com o texto underline

const DescriptionWithLink = (props) => {

    if(!props.description)
    return null;



    if(props.link){
        return (
            <Fragment>
                <p>{props.description}</p>
                <p>
                    <a href={props.link}>{props.link}</a>
                </p>
            </Fragment>
        )
    } else {
        return (
            <Fragment>
                <p><u>{props.description}</u></p>
            </Fragment>
        )
    }
}

export default DescriptionWithLink;