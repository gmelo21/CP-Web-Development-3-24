import { MdCancel } from "react-icons/md";
import { useParams, Link,useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";


const user=()=>{
    /*Hook-useParams- é utilizado para receber paramentros(codigo) pela rota */
    let {id} =useParams();

    /*Hook- useState- ele manipula o estado da variavel */
    const [users,setUsers]=useState({
        id,
        user:'',
        password:''
    });

    //Hook- useNavigate- redireciona para outro componente
    const navigate = useNavigate();

    //criando a função handleChange
    // (...)spreed- expande os valores antigos com o novo  isso sempre vai acontecer com array ou objeto
    // evento target- captura o que foi digitado em um campo
    //value{users.user} vai la no banco(json) e tras o user
    //value{users.password} vai la no banco(json) e tras a password
    const handleChange=(e)=>{
        setUsers({...users,[e.target.name]: e.target.value});
    }

    //criando uma variavel method ara post edit
    let metodo ="post"
    if(id){
        metodo="put"
    }

    //criando a função handleSubmit
    const handleSubmit=(e)=>{
        //Previne qualquer alteração na pagina (ex. Load)
        e.preventDefault();

    fetch(`http://localhost:5000/users/${id ? id: ''}` ,{
        method:metodo,
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(users),    
        //promises
    }).then(()=>{
        //direciona para o componente
        navigate("/user");
    })
    };




    return (
        <section className="user">
            <h1>Cadastro de Usuários</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="user"
                    value={users.user}
                    placeholder="Digite seu usuário"
                    /* O onChange é util em situações que é necessário reagir
                    em tempo real a cada alteração do input */
                    onChange={handleChange}   
                />

                <input
                    type="password"
                    name="password"
                    value={users.password}
                    placeholder="Digite sua password"
                    /* O onChange é util em situações que é necessário reagir
                    em tempo real a cada alteração do input */
                    onChange={handleChange}   
                />
                <button type="submit">Cadastrar</button>
                <Link to="/user">
                    {/* Chamando o icone do react  */}
                    <MdCancel />
                </Link>

            </form>

        </section>
    )
}
export default user