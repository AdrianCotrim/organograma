import { useState } from 'react';
import Botao from '../Botao/index.js';
import CampoTexto from '../CampoTexto/index.js';
import ListaSuspensa from '../ListaSuspensa/index.js';
import './Formulario.css'

const Formulario = (props) =>{

    const [nome, setNome] = useState("")
    const [cargo, setCargo] = useState("")
    const [imagem, setImagem] = useState("")
    const [time, setTime] = useState("")

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return(
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto aoAlterado={valor => setNome(valor)} obrigatorio={true} label='Nome' placeholder='Digite seu nome'></CampoTexto>
                <CampoTexto aoAlterado={valor => setCargo(valor)} obrigatorio={true} label='Cargo' placeholder='Digite seu cargo'></CampoTexto>
                <CampoTexto aoAlterado={valor => setImagem(valor)} label='Imagem' placeholder='Informe o endereço da imagem'></CampoTexto>
                <ListaSuspensa aoAlterado={valor => setTime(valor)} obrigatorio={true} label='Time' itens={props.times}></ListaSuspensa>
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario;