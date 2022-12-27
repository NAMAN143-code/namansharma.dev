import React from 'react'
import {BsTwitter, BsInstagram, BsLinkedin} from 'react-icons/bs'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <a href='https://twitter.com/sharmanaman6'>
            <BsTwitter />
            </a>
        </div>
        <div>
          <a href='https://www.linkedin.com/in/naman-sharma-599b441a5/'>
            <BsLinkedin />
          </a>
        </div>
        <div>
          <a href='https://www.instagram.com/__naman__sharma___/'>
            <BsInstagram />
            </a>  
        </div>
    </div>
  )
}

export default SocialMedia