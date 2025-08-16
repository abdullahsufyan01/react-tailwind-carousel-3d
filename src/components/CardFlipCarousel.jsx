import React, { useState } from 'react'
import { Heart, Share, Star } from 'lucide-react';

const CardFlipCarousel = () => {

    const [currentIndex, setCurrentIndex] = useState(0)
    const [hoveredCard, setHoveredCard] = useState(null)

    const cards = [
        {
            front: 'https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&w=500',
            title: 'Mountain Adventure',
            subtitle: 'Explore the peak',
            backTtle: 'Adventure Details',
            backContent: 'Exprerience breathtaking mointain view and challenging hiking trails.',
            rating: '4.8',
            price: '$299'
        },
        {
            front: 'https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=500',
            title: 'Ocean Paradise',
            subtitle: 'Dive into serenity',
            backTitle: 'Paradise Details',
            backContent: 'Crystal clear waters and pristine beaches await your discovery.',
            rating: 4.9,
            price: '$399'
        },
        {
            front: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=500',
            title: 'Forest Escape',
            subtitle: 'Nature\'s embrace',
            backTitle: 'Escape Details',
            backContent: 'Immerse yourself in the tranquil beauty of ancient forests.',
            rating: 4.7,
            price: '$199'
        },
        {
            front: 'https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=500',
            title: 'Desert Oasis',
            subtitle: 'Golden horizons',
            backTitle: 'Oasis Details',
            backContent: 'Discover hidden gems in the vast expanse of golden dunes.',
            rating: 4.6,
            price: '$349'
        },
        {
            front: 'https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=500',
            title: 'City Lights',
            subtitle: 'Urban exploration',
            backTitle: 'City Details',
            backContent: 'Experience the vibrant energy of metropolitan adventures.',
            rating: 4.5,
            price: '$249'
        },
        

    ]

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % cards.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
    };
    return (
        <>
            <div className="flex items-center justify-center min-h-screen p-8">
                <div className="relative" style={{ perspective: "1500px" }}>
                    <div className="flex justify-center items-center"
                        style={{
                            transform: `rotateY(${-currentIndex * 60}deg)`,
                            transformStyle: 'preserve-3d',
                            transition: 'transform 1s cubic-bezier(0.4, 0.0, 0.2, 1)'
                        }}
                    >
                        {
                            cards.map((card, index) => (
                                <div className="absolute"
                                    key={index}
                                    style={{
                                        transform: `rotateY(${index * 60}deg) translateZ(350px)`,
                                        transformStyle: 'preserve-3d'
                                    }}
                                    onMouseEnter={() => setHoveredCard(index)}
                                    onMouseLeave={() => setHoveredCard(null)}
                                >
                                    <div className="relative w-80 h-96"
                                        style={{
                                            transformStyle: 'preserve-3d',
                                            transition: 'transform 0.6s',
                                            transform: hoveredCard === index ? 'rotateY(180deg)' : 'rotateY(0deg)'
                                        }}
                                    >
                                        {/* front side  */}
                                        <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/20"
                                            style={{ backfaceVisibility: "hidden" }}
                                        >
                                            <img src={card.front} alt={card.title}
                                                className='w-full h-full object-cover'
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                                            <div className="absolute bottom-6 left-6 text-white">
                                                <h3 className='text-2xl font-bold mt-2'>{card.title}</h3>
                                                <p className='text-sm opacity-80'>{card.subtitle}</p>
                                                <div className="flex items-center mt-2">
                                                    {
                                                        [...Array(5)].map((_, index) => (
                                                            <Star
                                                                key={index}
                                                                className={` w-4 h-4 ${index < Math.floor(card.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'
                                                                    }`}
                                                            />
                                                        ))
                                                    }
                                                    <span className='ml-2 text-sm'>
                                                        {card.rating}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="absolute top-6 right-6">
                                                <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                                                    <Heart className='w-5 h-5 text-white' />
                                                </div>
                                            </div>
                                        </div>


                                        {/* back side  */}
                                        <div className="absolute inset-0 w-full h-full rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 p-6 text-white shadow-2xl"
                                            style={{
                                                backfaceVisibility: 'hidden',
                                                transform: 'rotateY(180deg)'
                                            }}
                                        >
                                            <div className="flex-flex-col h-full justify-between">
                                                <div>
                                                    <h2 className="text-2xl font-bold mb-4">
                                                        {card.backTitle}
                                                    </h2>
                                                    <p className='text-white/90 mb-6 leading-relaxed'>{card.backContent}</p>
                                                    <div className="flex items-center justify-between mb-4">
                                                        {
                                                            [...Array(5)].map((_, index) => (
                                                                <Star
                                                                    key={index}
                                                                    className={` w-4 h-4 ${index < Math.floor(card.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'
                                                                        }`}
                                                                />
                                                            ))
                                                        }
                                                        <span className='ml-2 text-sm'>
                                                            {card.rating}
                                                        </span>
                                                    </div>
                                                    <span className='text-2xl font-bold'>
                                                        {card.price}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex space-x-3">
                                                <button className="flex-1 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg py-3 px-4 transition-all duration-300 flex items-center justify-center">
                                                    <Share className="w-4 h-4 mr-2" />
                                                    Share
                                                </button>
                                                <button className="flex-1 bg-white hover:bg-white/90 text-purple-600 rounded-lg py-3 px-4 font-semibold transition-all duration-300">
                                                    Book Now
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
                        <button
                            onClick={prevSlide}
                            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
                        >
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={nextSlide}
                            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
                        >
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardFlipCarousel