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
          <a href='https://twitter.com/sharmanaman6'>
            <FaFacebookF />
          </a>
        </div>
        <div>
          <a href='https://twitter.com/sharmanaman6'>
            <BsInstagram />
            </a>  
        </div>
    </div>
  )
}

export default SocialMedia