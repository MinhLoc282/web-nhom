import React from 'react'
import background from '../assets/background.png'

export const Home = () => {
  const myStyle={
    backgroundImage: `url(${background})`,
    minHeight:'100%',
    minWidth:'100%',
    position:'fixed',
    backgroundSize:'cover',
  }
  return (
    <div style={myStyle}></div>
  )
}
