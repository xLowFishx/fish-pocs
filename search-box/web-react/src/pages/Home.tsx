import Spacer from '@app/components/Spacer'
import MainLogo from '@app/components/MainLogo'
import SwapiSearcher from '@app/features/swapi-searcher/SwapiSearcher'

function HomeStyles() {
  return <style href="center" precedence='component'>
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
}

export default function Home() {
  return (
    <>
      <HomeStyles />
      <Spacer />
      <section id="center">
        <MainLogo />
        <SwapiSearcher />
      </section>
      <Spacer />
    </>
  )
}
