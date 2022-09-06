// Aqui criamos outro component para a tela de NotFound

import { Link } from 'react-router-dom'

const NotFoundScreen = () => {
    return (
        <div>
            <h3>Página não encontrada</h3>
            <Link to='/ '> Voltar para Home</Link>
        </div>
    )
}

export default NotFoundScreen