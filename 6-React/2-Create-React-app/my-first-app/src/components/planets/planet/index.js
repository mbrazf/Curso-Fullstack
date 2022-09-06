// Aqui criamos um component Planet com as informações dos planetas

// Aqui importamos os components e os hooks
import GrayImg from "../../shared/gray_img";
import DescriptionWithLink from "../../shared/description_with_link";


// Aqui importamos o Link utilizado para navegar entre as páginas sem reload
import { Link } from "react-router-dom";

// Aqui convertemos o component de classe para component funcional
const Planet = (props) => {

  // Aqui uma renderização condicional
  let title;
  if (props.title_with_underline)
    title = (
      <h4>
        <u>{props.name}</u>
      </h4>
    );
  else title = <h4>{props.name}</h4>;

  //  Aqui retorna os components e elementos, e utilizamos o método map em satellites e para cada item iremos criar um li e criar uma chave para cada satellite baseado no seu índice

  // e utilizamos o Link que foi importado ele redireciona para outra página sem recarregar
  return (
    <div>
      <Link to={`/planet/${props.id}`}>{title}</Link>
      <DescriptionWithLink description={props.description} link={props.link} />
      <GrayImg img_url={props.img_url} gray={props.gray} />
    </div>
  );
};

export default Planet;