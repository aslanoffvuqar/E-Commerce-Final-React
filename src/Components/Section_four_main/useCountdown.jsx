import { useState, useEffect } from 'react';

const useCountdown = (initialTime) => {
    const [timeLeft, setTimeLeft] = useState(initialTime);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime <= 1000) {
                    clearInterval(interval);
                    return 0;
                }
                return prevTime - 1000;
            });
        }, 1000);
        
        return () => clearInterval(interval);
    }, []);

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds, timeLeft };
};

export default useCountdown;
