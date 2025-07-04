'use client';

import React, { useState, useEffect } from 'react';
import './slider.css';

export const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [imageError, setImageError] = useState({});
    const [autoPlay, setAutoPlay] = useState(true);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const [imageLoaded, setImageLoaded] = useState({});
    const [isTransitioning, setIsTransitioning] = useState(false);
    
    const sliderData = [
        {
            image: "https://images.unsplash.com/photo-1493946740644-2d8a1f1a6aff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
            fallbackGradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            heading: "360° Matrix Shot გადაღება",
            subheading: "პროფესიონალური 360° bullet-time ეფექტი - მიღებთ წრიულად მბრუნავი კამერით უნიკალურ ვიდეოს",
            cta: "დაგვიკავშირდით"
        },
        {
            image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
            fallbackGradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            heading: "Slow Motion 360° ვიდეო",
            subheading: "ღონისძიებებისთვის სპეციალური 360° ეფექტი - სტუმრები მიიღებენ ვიდეოს, რომელიც ტრიალებს მათ გარშემო",
            cta: "შეუკვეთეთ ახლავე"
        },
        {
            image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
            fallbackGradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
            heading: "Bullet Time ეფექტის სერვისი",
            subheading: "თქვენი ღონისძიების სტუმრებისთვის პროფესიონალური 360° კონტენტი ჰოლივუდის ფილმების სტილით",
            cta: "გაიგეთ მეტი"
        },
    ];

    // Preload all images
    useEffect(() => {
        sliderData.forEach((slide, index) => {
            const img = new Image();
            img.src = slide.image;
            img.onload = () => handleImageLoad(index);
            img.onerror = () => handleImageError(index);
        });
    }, []);

    useEffect(() => {
        if (!autoPlay) return;
        
        const interval = setInterval(() => {
            setCurrentSlide((prev) => 
                prev === sliderData.length - 1 ? 0 : prev + 1
            );
        }, 5000);
        return () => clearInterval(interval);
    }, [sliderData.length, autoPlay]);

    // Auto-resume autoplay after 10 seconds of inactivity
    useEffect(() => {
        if (autoPlay) return;
        
        const resumeTimer = setTimeout(() => {
            setAutoPlay(true);
        }, 10000); // 10 seconds
        
        return () => clearTimeout(resumeTimer);
    }, [autoPlay, currentSlide]);

    const nextSlide = () => {
        if (isTransitioning) return;
        setAutoPlay(false);
        setIsTransitioning(true);
        setCurrentSlide(currentSlide === sliderData.length - 1 ? 0 : currentSlide + 1);
        setTimeout(() => setIsTransitioning(false), 500);
    };

    const prevSlide = () => {
        if (isTransitioning) return;
        setAutoPlay(false);
        setIsTransitioning(true);
        setCurrentSlide(currentSlide === 0 ? sliderData.length - 1 : currentSlide - 1);
        setTimeout(() => setIsTransitioning(false), 500);
    };

    const handleCall = () => {
        window.location.href = "tel:+995555360360";
    };

    const handleImageError = (slideIndex) => {
        setImageError(prev => ({
            ...prev,
            [slideIndex]: true
        }));
    };

    const handleImageLoad = (slideIndex) => {
        setImageLoaded(prev => ({
            ...prev,
            [slideIndex]: true
        }));
    };

    // Touch/Swipe handlers
    const handleTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) {
            nextSlide();
        } else if (isRightSwipe) {
            prevSlide();
        }
    };

    // Mouse drag handlers for desktop
    const handleMouseDown = (e) => {
        setTouchEnd(null);
        setTouchStart(e.clientX);
    };

    const handleMouseMove = (e) => {
        if (touchStart === null) return;
        setTouchEnd(e.clientX);
    };

    const handleMouseUp = () => {
        if (!touchStart || !touchEnd) return;
        
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) {
            nextSlide();
        } else if (isRightSwipe) {
            prevSlide();
        }
        
        setTouchStart(null);
        setTouchEnd(null);
    };

    return (
        <div className="slider-wrapper">
            <div className="slider-container">
                <div 
                    className="slider-content"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    style={{ cursor: touchStart !== null ? 'grabbing' : 'grab' }}
                >
                    <div className="slider-image">
                        {imageError[currentSlide] ? (
                            <div 
                                className="slider-fallback"
                                style={{ 
                                    background: sliderData[currentSlide].fallbackGradient,
                                    width: '100%',
                                    height: '100%',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0
                                }}
                            />
                        ) : (
                            <img 
                                src={sliderData[currentSlide].image} 
                                alt="360° ვიდეო სერვისები"
                                style={{ 
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    opacity: imageLoaded[currentSlide] ? 1 : 0,
                                    transition: 'opacity 0.3s ease-in-out'
                                }}
                                onLoad={() => handleImageLoad(currentSlide)}
                                onError={() => handleImageError(currentSlide)}
                                loading={currentSlide === 0 ? 'eager' : 'lazy'}
                            />
                        )}
                        <div className="slider-overlay"></div>
                    </div>
                    
                    <div className={`slider-text ${isTransitioning ? 'transitioning' : ''}`}>
                        <h1>{sliderData[currentSlide].heading}</h1>
                        <p>{sliderData[currentSlide].subheading}</p>
                        <button className="slider-cta" onClick={handleCall}>
                            {sliderData[currentSlide].cta}
                        </button>
                    </div>
                </div>
                
                {sliderData.length > 1 && (
                    <div className="slider-controls">
                        <button className="slider-arrow prev" onClick={prevSlide}>❮</button>
                        <div className="slider-dots">
                            {sliderData.map((_, index) => (
                                <span 
                                    key={index} 
                                    className={`slider-dot ${index === currentSlide ? "active" : ""}`}
                                    onClick={() => {
                                        setAutoPlay(false);
                                        setCurrentSlide(index);
                                    }}
                                ></span>
                            ))}
                        </div>
                        <button className="slider-arrow next" onClick={nextSlide}>❯</button>
                    </div>
                )}
            </div>
        </div>
    );
};
