import React from 'react'
import './index.scss'
import { ReactComponent as CrazyCatLogo } from '../../assets/images/CrazyCatLogo.svg'
// import { ReactComponent as TicTacToeLogo } from '../../assets/images/TicTacToeLogo.svg'
import { ReactComponent as MonsterLogo } from '../../assets/images/MonsterLogo.svg'
// import { ReactComponent as CrazyCatLogo } from '../../assets/CrazyCatLogo.svg'
// import { ReactComponent as CrazyCatLogo } from '../../assets/CrazyCatLogo.svg'

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <div className="crazy-cat">
        <a
          href="https://vukipoo.github.io/clothing-store-2.0/"
          class="fill-div"
        ></a>
        <h2>Crazy Cat Clothing</h2>
        <CrazyCatLogo className="crazy-cat-logo" />
      </div>
     
      <div className="monsters-rolodex">
        <a
          href="https://vukipoo.github.io/monsters-rolodex/"
          class="fill-div"
        ></a>
        <h2>Monsters Rolodex</h2>
        <MonsterLogo className="monster-logo" />
      </div>
      <div className="stoic-quote-generator">
        <a
          href="https://vukipoo.github.io/stoic-quote-machine/"
          class="fill-div"
        ></a>
        <h2>Stoic Quote Generator</h2>
        <MonsterLogo className="stoic-quote-logo" />
      </div>
      <div className="stoic-quote-generator">
        <a
          href="https://vukipoo.github.io/stoic-quote-machine/"
          class="fill-div"
        ></a>
        <h2>Stoic Quote Generator</h2>
        <MonsterLogo className="stoic-quote-logo" />
      </div>{' '}
      <div className="stoic-quote-generator">
        <a
          href="https://vukipoo.github.io/stoic-quote-machine/"
          class="fill-div"
        ></a>
        <h2>Stoic Quote Generator</h2>
        <MonsterLogo className="stoic-quote-logo" />
      </div>{' '}
      <div className="stoic-quote-generator">
        <a
          href="https://vukipoo.github.io/stoic-quote-machine/"
          class="fill-div"
        ></a>
        <h2>Stoic Quote Generator</h2>
        <MonsterLogo className="stoic-quote-logo" />
      </div>{' '}
      <div className="stoic-quote-generator">
        <a
          href="https://vukipoo.github.io/stoic-quote-machine/"
          class="fill-div"
        ></a>
        <h2>Stoic Quote Generator</h2>
        <MonsterLogo className="stoic-quote-logo" />
      </div>
      <div className="stoic-quote-generator">
        <a
          href="https://vukipoo.github.io/stoic-quote-machine/"
          class="fill-div"
        ></a>
        <h2>Stoic Quote Generator</h2>
        <MonsterLogo className="stoic-quote-logo" />
      </div>
      <div className="tic-tac-toe-ai">
        <a
          href="https://vukipoo.github.io/clothing-store-2.0/"
          class="fill-div"
        ></a>
        <h2>Tic Tac Toe against AI</h2>
        <h1 className="tic-tac-toe-logo">Comming Soon</h1>
      </div>
    </div>
  )
}

export default Portfolio
