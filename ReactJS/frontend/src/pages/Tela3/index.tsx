import { Link } from "react-router-dom"
import { Conteiner, Button, Wrapper } from "./styles"

export const Tela3 = () => {
    return (
        <Conteiner>
            <Wrapper>
                <Link to='/tela1'><Button style={{background: 'darkblue'}}>Tela 1</Button></Link>
                <Link to='/tela2'><Button style={{background: 'white'}}>Tela 2</Button></Link>
            </Wrapper>
        </Conteiner>
    )
}