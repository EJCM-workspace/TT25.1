import { Link } from "react-router-dom"
import { Conteiner, Button, Wrapper } from "./styles"

export const Tela1 = () => {
    return (
        <Conteiner>
            <Wrapper>
                <Link to='/tela2'><Button style={{background: 'white'}}>Tela 2</Button></Link>
                <Link to='/tela3'><Button style={{background: 'lightblue'}}>Tela 3</Button></Link>
            </Wrapper>
        </Conteiner>
    )
}