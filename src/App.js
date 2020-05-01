import React from 'react'
import './App.css'

const App = () => {

  const randomColor = () => {
    let color = Math.floor(Math.random()*16777215).toString(16)
    /* sometimes the returned value does not have the 6 digits needed,
       so we do it again until it does */
    while (color.length<6) {
      color = Math.floor(Math.random()*16777215).toString(16)
    }

    let red = parseInt(color.substring(0,2),16)
    let green = parseInt(color.substring(2,4),16)
    let blue = parseInt(color.substring(4,6),16)
    let rgb = red*0.299 + green*0.587 + blue*0.114
    /* if (red*0.299 + green*0.587 + blue*0.114) > 186 use #000000 else use 
    #ffffff */
    if (rgb > 186) {
      return { backgroundColor: '#' + color }
    }
    else return {
      backgroundColor: '#' + color,
      color: '#ffffff'
    }
  }

  const links = document.links
  for (let i=0; i < links.length; i++) {
    let a = links[i]
    if (a.title !== '') {
      a.addEventListener('mouseover', createTip)
      a.addEventListener('mouseout',cancelTip)
    }
  }



  return (
    <div className='page'>
      <div className='container'>
        <h1>Contributors</h1>
        <div className='topbar'>
          <div className='topbar-item'>Leaderboard</div>
          <div className='topbar-item'>Past Leaders</div>
          <div className='topbar-item'>Top Members</div>
        </div>
        <div className='grid'>
          <div className='grid-item' id='first-item'>
            <a href='#' className='avatar' style={randomColor()}>J</a>
            <a href='#' className='username'>Apple Juice</a>
            <div className='score'>
              <div>Points
                <div className='points'>10,894</div>
              </div>
              <div>Posts
                <div className='posts'>753</div>
              </div>
            </div>
          </div>
          <div className='grid-item'>
            <div className='avatar' style={randomColor()}>A</div>
            <div className='username'>Plain Water</div>
            <div className='score'>
              <div>Points
                <div className='points'>2,345
                </div>
              </div>
              <div>Posts
                <div className='posts'>541</div>
              </div>
            </div>
          </div>
          <div className='grid-item'>
            <div className='avatar' style={randomColor()}>I</div>
            <div className='username'>Coffee</div>
            <div className='score'>
              <div>Points
                <div className='points'>1,333
                </div>
              </div>
              <div>Posts
                <div className='posts'>123</div>
              </div>
            </div>
          </div>
          <div className='grid-item'>
            <div className='avatar' style={randomColor()}>L</div>
            <div className='username'>Whiskey</div>
            <div className='score'>
              <div>Points
                <div className='points'>999
                </div>
              </div>
              <div>Posts
                <div className='posts'>59</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App