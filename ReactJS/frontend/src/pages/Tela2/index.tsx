import { Link } from "react-router-dom"
import { Conteiner, Button, Wrapper } from "./styles"

export const Tela2 = () => {
    return (
        <Conteiner>
            <Wrapper>
                <Link to='/tela1'><Button style={{background: 'darkblue'}}>Tela 1</Button> </Link>
                <Link to='/tela3'><Button style={{background: 'lighblue'}}>Tela 3</Button> </Link>
            </Wrapper>
        </Conteiner>
    )
}