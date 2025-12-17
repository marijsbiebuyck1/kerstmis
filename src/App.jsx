import './App.css'
import Button from './components/Button.jsx'
import SecondaryButton from './components/SecondaryButton.jsx'
import illustratie from './assets/illustratie.svg'
import achtergrond from './assets/achtergrond.svg'

function App() {
  return (
    <div className="hero" style={{ backgroundImage: `url(${achtergrond})` }}>
      <div className="hero-inner">
        <h1 className="title">Allo!</h1>

        <img src={illustratie} alt="Illustratie" className="illustration" />

        <p className="lead">Ik wil m'n cadeautje:</p>

        <div className="buttons">
          <Button label="Opendoen" onClick={() => alert('Opengemaakt!')} />
          <SecondaryButton label="Niet opendoen #saai" onClick={() => alert('Misschien later')} />
        </div>

      </div>
    </div>
  )
}

export default App
