import React from 'react'
import './App.css'

const App = () => {
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
          <div className='grid-item' id='first-item'>Usercard
            <div>Avatar</div>
            <div>Username</div>
            <div>Points</div>
            <div>Posts</div>
          </div>
          <div className='grid-item'>Usercard
            <div>Avatar</div>
            <div>Username</div>
            <div>Points</div>
            <div>Posts</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App