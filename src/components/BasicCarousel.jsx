import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const BasicCarousel = () => {
    const [currentIndex,setCurrentIndex] = useState(0)

    const images = [
        'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=500',
        'https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=500',
        'https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&w=500',
        'https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=500',
        'https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=500'
    ]

    const nextSLide = ()=> {
        setCurrentIndex((prev) => (prev+1) % images.length)
    }
    const prevSLide = ()=> {
        setCurrentIndex((prev) => (prev-1 + images.length ) % images.length)
    }


    return (
        <>
            <h3>Basic 3D Carousel </h3>
            <div className="flex items-center justify-center min-h-screen h-full  p-8 bg-black">
                <div className="relative p-8">
                    <div className="carousel-container" style={{perspective:'1000px'}}>
                        <div className="carousel-track" 
                        style={{
                            transform:`rotateY(${-currentIndex*72}deg)`,
                            transformStyle:'preserve-3d',
                            transition:'transform .8s cubic-bezier(.4,0.0,.2,1)'
                        }}
                        >
                            {
                                images.map((image, index) => (
                                    <div className="carousel-item"
                                    style={{
                                        position:'absolute',
                                        width:'300px', //adjust as u want 
                                        height:'300px', //adjust as u want,
                                        transform:`rotateY(${index*72}deg) translateZ(250px)`,
                                        transformOrigin:'center center'
                                    }}
                                    >
                                        <div className='relative w-full h-full rounded-xl overflow-hidden shadow-2xl border border-white/20'>
                                            <img src={image} alt={`Basic Slide ${index + 1}`} className='w-full h-full object-cover' />
                                            <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent'></div>
                                            <div className='absolute bottom-4 left-4 text-white'>
                                                <h3 className='text-xl font-bold'>Image {`Basic Slide ${index + 1}`}</h3>
                                                <p className='text-sm opacity-80'>basic 3D Carousel</p>
                                            </div>
                                        </div>

                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <button 
                onClick={prevSLide}
                className='absolute left-4 top-1/2 transform translate-y-1/2 z-10 bg-white-12 hover:bg-white/30 backdrop-blur-sm rounded-full p-3'>
                    <ChevronLeft className='w-6 h-6 text-white'/>
                </button>
                 <button 
                 onClick={nextSLide}
                 className='absolute right-4 top-1/2 transform translate-y-1/2 z-10 bg-white-12 hover:bg-white/30 backdrop-blur-sm rounded-full p-3'>
                    <ChevronRight className='w-6 h-6 text-white'/>
                </button>
            </div>
        </>
    )
}

export default BasicCarousel