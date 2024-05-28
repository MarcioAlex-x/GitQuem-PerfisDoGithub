import styles from './Header.module.css'

export default ({nome}) =>{
    
    return(
        <header className={styles.header}>
        <h1 className={styles.titulo}>{nome}</h1>
        <img className={styles.img} src={`https://github.com/${nome}.png`} alt="" />
        </header>
    )
}