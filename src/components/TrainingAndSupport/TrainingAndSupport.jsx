import React from 'react'
import ImageWithText from '../ImageWithText/ImageWithText'
import { TITLE, TEXT, buttonText, switchSide, imageURL } from './constants';

const TrainingAndSupport = () => {
  return (
    <div>
        <ImageWithText title={TITLE} text={TEXT} buttonText={buttonText} imageUrl={imageURL} switchSide={switchSide}/>
    </div>
  )
}

export default TrainingAndSupport