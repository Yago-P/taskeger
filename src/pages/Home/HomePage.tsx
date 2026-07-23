import './Home.css'
import Header from '../../components/Header/Header'


function HomePage() {
  
  return (
    <>
      <Header />
      
      <main>

        <div className='container-welcome'>
          <h1>Seja Bem-Vindo ao Taskeger!</h1>

        </div>
        
        <section className='section-content'>
          <div className='vision-phrase'>
            <h2>"Clareza e Organização é a chave de uma boa Execução."</h2>

          </div>

          <div className='about-us'>
            <h2>Sobre Nós</h2>
            <p>O Taskeger foi criado com o intuito de facilitar a organização de tarefas, seja individuais ou em equipes.</p>

          </div>

        </section>

      </main>
  

      

  
    </>
  )
}

export default HomePage