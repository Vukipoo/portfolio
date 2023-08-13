import React from 'react'
import './index.scss'
import { ReactComponent as CrazyCatLogo } from '../../assets/images/CrazyCatLogo.svg'
import { ReactComponent as TicTacToeLogo } from '../../assets/images/TicTacToeLogo.svg'
import { ReactComponent as MonsterLogo } from '../../assets/images/MonsterLogo.svg'
import { ReactComponent as TeslaLogo } from '../../assets/images/TeslaLogo.svg'
// import { ReactComponent as CrazyCatLogo } from '../../assets/CrazyCatLogo.svg'
// import { ReactComponent as CrazyCatLogo } from '../../assets/CrazyCatLogo.svg'


const Portfolio = () => {
  return (
    <div className = 'portfolio-container'>
    <div className = 'crazy-cat'>
    <a href="https://vukipoo.github.io/monsters-rolodex/" class="fill-div"></a>
      <h2>Crazy Cat Clothing</h2>
      <CrazyCatLogo className='crazy-cat-logo'/>
    </div>
    <div className = 'tic-tac-toe-ai'>
    <a href="https://vukipoo.github.io/monsters-rolodex/" class="fill-div"></a>
      <h2>Tic Tac Toe against AI</h2>
    <TicTacToeLogo className = 'tic-tac-toe-logo'/>
    </div>
    <div className = 'monsters-rolodex'>
    <a href="https://vukipoo.github.io/monsters-rolodex/" class="fill-div"></a>
    <h2>Monsters Rolodex</h2>
    <MonsterLogo className ='monster-logo'/>
    </div>
    <div className = 'tesla-clone'>
    <a href="https://vukipoo.github.io/monsters-rolodex/" class="fill-div"></a>
      <h2>Tesla Clone</h2>
    <TeslaLogo className='tesla-logo'/>
    </div>
    </div>
  )
}

export default Portfolio