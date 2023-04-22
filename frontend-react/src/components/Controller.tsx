import { useState, useEffect } from "react"
import Button from "./Button";
import BetBox from "./BetBox";
import axios from "axios";

function Controller() {

    //State of the button
    //Parses into other components
    const[hasWon, setHasWon] = useState(false)
    const [betDirection, setBetDirection] = useState("up")
    const[isLoading, setIsLoading] = useState(false)
    const [valStored, setValStored] = useState(0)

    //Fetching data async
    const handlePlaceBet = async () => { 
    
        setIsLoading(true)
    
        let isWinner = false;
        const url = "https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new"
        await axios.get(url).then((res) => {
            if(res.status == 200) // API worked
            {
                const val = res.data;
                setValStored(val)                
                if(val >=50 && betDirection == "up") 
                isWinner = true;
                else if(val < 50 && betDirection == "down")
                isWinner = true;
            }
            else console.error("Couldn't fetch data, ERROR.")
        }).catch((err) => { console.log(err.data, err.message)})
        
        setHasWon(isWinner) //Returns if the player has won
        setIsLoading(false)
    };

    useEffect( () => {
        console.log(hasWon)
    }, [hasWon])


    return(
        <div className="w-full md:w-[850px lg:w-[1200px]  mx-auto px-5 py-12">
            <Button runFunction={handlePlaceBet}/>
            <BetBox betDirection={betDirection} setBetDirection = {setBetDirection} isLoading = {isLoading} hasWon = {hasWon} valStored = {valStored}/>
        </div>
    );
}

export default Controller