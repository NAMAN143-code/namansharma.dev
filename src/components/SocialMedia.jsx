import React from 'react'
import {BsTwitter, BsInstagram} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <a href='https://twitter.com/sharmanaman6'>
            <BsTwitter />
            </a>
        </div>
        <div>
          <a href='https://www.facebook.com/profile.php?id=100071801133372'>
            <FaFacebookF />
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