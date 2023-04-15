import { useEffect, useState } from "react";

type AdviceData = {
    slip: {
        advice: string;
    };
}

export const Card = () => {

    const [advice, setAdvice] = useState<string>('');

    let randomAdvice = async() => {
        let response = await fetch('https://api.adviceslip.com/advice');
        let data: AdviceData = await response.json();
        console.log(data);
        setAdvice(data.slip.advice);
    }

    useEffect(() => {
        randomAdvice();
    }, []);

    return (
    <div className="wrapper">
        <h1>Advice App</h1>
        {/* Container for text advice */}
        <div className="content">
            <p id="adviceContent">{advice}</p>
        </div>
    </div>
  )
}
