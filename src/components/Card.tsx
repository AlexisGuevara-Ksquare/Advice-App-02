import { useEffect, useState } from "react";
import { Button } from "./Button";
import { TwitterButton } from "./TwitterButton";

type AdviceData = {
    slip: {
        advice: string;
    };
}

export const Card = () => {

    const [advice, setAdvice] = useState<string>('');

    // Change background color random whe new advice is loaded
    const changeBackground = () => {
    // Generate a random 6 character hex color value
    const hexVal = Math.floor(Math.random() * 0xffffff).toString(16);

    // Set the background color of the page to the generated color
    document.body.style.background = `#${hexVal}`;
    }

    // Function to get API info
    let randomAdvice = async() => {
        let response = await fetch('https://api.adviceslip.com/advice');
        let data: AdviceData = await response.json();
        console.log(data);
        setAdvice(data.slip.advice);
        changeBackground();
    }

    // useEffect so the advice load when app start
    useEffect(() => {
        randomAdvice();
    }, []);

    return (
    <div className="wrapper">
        <h1>Advice App</h1>
        {/* Container for text advice */}
        <div className="content">
            <p id="adviceContent">"{advice}"</p>
        </div>
        <hr />
        {/* Button wrapper with 2 Button components */}
        <div className="button-container">
            {/* Component Button so user can see another advice */}
            <Button content="Another One Please" onClick={randomAdvice} />
            {/* Component Button so user can tweet advice */}
            <TwitterButton content={<img width={20} height={20} src="https://seeklogo.com/images/T/twitter-logo-1DEF94C339-seeklogo.com.png" alt="Twitter logo" />} advice={advice}/>
        </div>
    </div>
  )
}

