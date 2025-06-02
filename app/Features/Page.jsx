import React from 'react'
import FeaturesBgImage from '../../public/features-bg.png'
const FeaturesPage = () => {
  return (
    <div className='w-full flex justify-center items-center my-12 h-auto'>
      <div className="w-[85%] flex justify-center items-center rounded-2xl bg-cover bg-center bg-[#242424] h-[250px]" 
      style={{backgroundImage : `url(${FeaturesBgImage.src})`}}>

      </div>
      
    </div>
  )
}

export default FeaturesPage
