
import { useState } from 'react'
import RepoList from './components/repoList/RepoList'
import Header from './components/teste/Header'

import style from './App.module.css'


const App = () => {
  
  const [usuario, setUsuario] = useState('')
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e) =>{
    setInputValue(e.target.value)
  }
  const handleSearch = () =>{
    setUsuario(inputValue)
  }



  return (
    <>
    <div  className={style.form}>   
      <p className={style.text}>Procure por um Usuário do Github</p>   
      <input className={style.input} 
      value={inputValue} 
      type="text" 
      onChange={handleInputChange}
      placeholder='Informe o nome' />
      <button className={style.btn} onClick={handleSearch}>Procurar</button>
    </div>
      
      {usuario.length >= 2 && (
        <>
          <Header  nome={usuario} />
          <RepoList nome={usuario} />
        </>
      )}
    </>
  )
}

export default App
