// Criamos o component que irá conter a descrição do planeta

import { Fragment } from "react";


// O component recebe props, e nos elementos passamos as props que esperamos receber do outro component
const DescriptionWithLink = (props) => {
    return (
        <Fragment>
            <p>{props.description}</p>
            <p>
                <a href={props.link}>{props.link}</a>
            </p>
        </Fragment>

    )
}

export default DescriptionWithLink;