import { useState } from 'react';
import Botao from '../Botao/index.js';
import CampoTexto from '../CampoTexto/index.js';
import ListaSuspensa from '../ListaSuspensa/index.js';
import './Formulario.css'

const Formulario = () =>{
    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const [nome, setNome] = useState("")
    const [cargo, setCargo] = useState("")
    const [imagem, setImagem] = useState("")
    const [time, setTime] = useState("")

    const AoSalvar = (event) => {
        event.preventDefault()
        console.log("Formulário Enviado! =>", nome, cargo, imagem, time)
    }

    return(
        <section className='formulario'>
            <form onSubmit={AoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto aoAlterado={valor => setNome(valor)} obrigatorio={true} label='Nome' placeholder='Digite seu nome'></CampoTexto>
                <CampoTexto aoAlterado={valor => setCargo(valor)} obrigatorio={true} label='Cargo' placeholder='Digite seu cargo'></CampoTexto>
                <CampoTexto aoAlterado={valor => setImagem(valor)} label='Imagem' placeholder='Informe o endereço da imagem'></CampoTexto>
                <ListaSuspensa aoAlterado={valor => setTime(valor)} obrigatorio={true} label='Time' itens={times}></ListaSuspensa>
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario;