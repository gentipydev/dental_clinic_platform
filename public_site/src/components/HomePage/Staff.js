import React, { useState, useEffect, useRef } from 'react';
import './Staff.css';

const Staff = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [typedText, setTypedText] = useState('');
    const fullText = "Il dottor Loka, laureato in Odontoiatria a Tirana nel 2021, si è specializzato in chirurgia dentale in Italia.\nHa maturato esperienza nella sua clinica, con focus su chirurgia implantare e orale ricostruttiva.\n\nEsperto in tecnologie avanzate e tecniche minimamente invasive.\nIl dottor Loka partecipa regolarmente a corsi e congressi nel settore.\nLa sua filosofia è l'approccio olistico, offrendo trattamenti personalizzati per la salute orale.";
    const ref = useRef();

    useEffect(() => {
        let timer; // Define timer in the outer scope of useEffect to make it accessible in the cleanup function
    
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setIsVisible(true);
    
                let index = 0; // Initialize index to 0 to start from the first character
                timer = setInterval(() => { // Assign setInterval to timer here
                    setTypedText((prev) => prev + fullText[index]);
                    if (index < fullText.length - 1) {
                        index++;
                    } else {
                        clearInterval(timer); // Clear interval when the end of text is reached
                    }
                }, 20); // Adjust the speed by changing the interval
    
                observer.disconnect();
            }
        });
    
        observer.observe(ref.current);
    
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
            if (timer) clearInterval(timer); // Clear the interval when the component unmounts
        };
    }, [fullText]);
    
    

    return (
        <div className="staff-container" ref={ref}>
            <h2>Il nostro Staff</h2>
            <div className={`staff-member ${isVisible ? 'slide-in' : ''}`}>
                <img src="/images/joni.png" alt="Doctor" className="staff-image" />
                <div className="staff-description">
                    <h3>Dr. Joni Loka</h3>
                    <p>{typedText}</p>
                </div>
            </div>
            {/* Repeat the above div for each staff member */}
        </div>
    );
};

export default Staff;
