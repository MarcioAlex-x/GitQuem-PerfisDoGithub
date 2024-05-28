import { useEffect, useState } from "react"

import styles from './RepoList.module.css'

export default ({nome})=>{

    const [repo, setRepo] = useState([])

    useEffect(()=>{
        fetch(`https://api.github.com/users/${nome}/repos`)
            .then(response => response.json())
            .then(response => {
                setRepo(response)
            } )
    },[nome])

    return(
        <section className={styles.section}>
        <h2 className={styles.repositorios}>{repo.length} Repositórios</h2>
            <ul className={styles.lista}>
                {repo.map(({id,name,language,description, html_url}) =>(
                    <li className={styles.itemLista} key={id}>
                        <span><b>Nome: </b> {name} </span> <br />
                        <span><b>Linguagem: </b>{language}</span> <br />
                        <span>Descrição: {description } - </span> <br />
                        <a className={styles.link} href={html_url} target="_blank"><span>Acesse</span></a>
                    </li>
                ))}
                
            </ul>
        </section>
    )
}