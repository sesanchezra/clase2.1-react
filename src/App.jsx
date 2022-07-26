import { useEffect, useState } from 'react'
import './App.css'

const colors = ["#845EC2", "#D65DB1", "#FF6F91", "#FF9671", "#FFC75F", "#F9F871"];

function App() {

  const [isShow, setIsShow] = useState(false)

  const [counter, setCounter] = useState(0)

  const [color, setColor] = useState('black');

  

  const randomIndexColor = (colors) =>{
    return Math.floor(Math.random()* colors.length)
  }

  const showPassword = () => {
    setIsShow(!isShow)
  }

  const plusOne = () => {
    setCounter(counter + 1)
  }

  useEffect(() => {
    setColor(colors[randomIndexColor(colors)])
    
  }, [])

  // Link guía: https://dribbble.com/shots/15889044-Login-Register-Mobile-App

  return (
    <div className="App">
      <div className='text-header'>
        <h2>Hello Again</h2>
        <p>Welcome back you've been missed</p>
      </div>
      <div className='sign-in'>
        <input type="text" placeholder='username' />
        <div className='sign-in-password'>
          <input
            type={isShow ? 'text' : 'password'}
            placeholder='password'
          />
          <button className='show' onClick={showPassword}>
            {isShow ?
              <ion-icon name="eye-off-outline"></ion-icon>
            : 
              <ion-icon name="eye-outline"></ion-icon>
            }
          </button>
        </div>

        <button className='reset-password'>reset password</button>
        <button className='log-in'>Sign in</button>
      </div>
      <hr />
      <div className='social-signin'>
        <ion-icon name="logo-google"></ion-icon>
        <ion-icon name="logo-apple"></ion-icon>
        <ion-icon name="logo-facebook"></ion-icon>
      </div>

      <hr />

      <div className='counter'>
        <h2 style={{color: `${color}`}}>{counter}</h2>
        <button onClick={plusOne}>Increase</button>
      </div>


    </div>
  )
}

export default App
