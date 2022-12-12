import React, {useState, SetStateAction, useEffect} from "react";


const Timer = (props) =>{
    const startTime = props.formData.practiceTime;
    const [minute, setMinute] = useState(startTime);
    const [second, setSecond] = useState('00');
    const [counter, setCounter] = useState(startTime * 60);
    const [isActive, setIsActive] = useState(false);


    function stopTimer() {
        setIsActive(false);
        setCounter(startTime * 60);
        setSecond('00');
        setMinute(startTime)
      }    

        useEffect(() => {
          let intervalId;
      
          if (isActive) {

            if(counter <= 0){
                setIsActive(false);
                stopTimer();
            }
            intervalId = setInterval(() => {

              
                
              const secondCounter = counter % 60;
              const minuteCounter = Math.floor(counter / 60);
      
              const computedSecond = String(secondCounter).length === 1 ? `0${secondCounter}`: secondCounter;
              const computedMinute = String(minuteCounter).length === 1 ? `0${minuteCounter}`: minuteCounter;
      
              setSecond(computedSecond);
              setMinute(computedMinute);
      
              setCounter(counter => counter - 1);
            }, 1000);
          }
      
          return () => clearInterval(intervalId);
        }, [isActive, counter])

        

    return(
        
    <div className="timeBox">
      <div className="time">
        <span className="minute">{minute}</span>
        <span>:</span>
        <span className="second">{second}</span>
      </div>
      <div className="buttons">
        <button onClick={() => setIsActive(!isActive)} className="start">
        {isActive ? "Pause": "Start"}
        </button>
        <button onClick={stopTimer}className="reset">Reset</button>
      </div>
    </div>
    )
}
export default Timer;