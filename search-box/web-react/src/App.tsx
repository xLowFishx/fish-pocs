import './App.css'
import Spacer from './components/Spacer'
import MainLogo from './components/MainLogo'

function App() {
  return (
    <>
      <style href="center" precedence='component'>
        {`
          #center {
            display: flex;
            flex-direction: column;
            gap: 25px;
            place-content: center;
            place-items: center;
            flex-grow: 1;

            @media (max-width: 1024px) {
              padding: 32px 20px 24px;
              gap: 18px;
            }
          }
        `}
      </style>

      <Spacer />
        <section id="center">
          <MainLogo />
          <div>
            <h1>Search Box</h1>
          </div>
          <input type='text'></input>
        </section>
      <Spacer />
    </>
  )
}

export default App
