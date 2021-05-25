import "./OtpSplit.css";
const OtpSplit=()=>{
    const keydown=(e,previous)=> {
        
        const key = e.key; 
if (key === "Backspace" ||  key==="Delete") {
    e.target.value="";
    document.getElementById(previous).focus();
}
      }
    function clickEvent(first,last){
        if(first.target.value.length){
            document.getElementById(last).focus();
        }
    }
  


    return (
        <div class="container">
		<h1>ENTER OTP</h1>
		<div class="userInput">
			<input type="text" id="ist" maxLength="1" onKeyUp={(e)=>clickEvent(e,'second')} autoFocus/>
			<input type="text" id="second" maxLength="1" onKeyDown={(e)=>keydown(e,"ist")} onKeyUp={(e)=>clickEvent(e,'third')} />
			<input type="text" id="third" maxLength="1" onKeyUp={(e)=>clickEvent(e,'fourth')}  onKeyDown={(e)=>keydown(e,"second")}/>
			<input type="text" id="fourth" maxLength="1" onKeyUp={(e)=>clickEvent(e,'fifth')}  onKeyDown={(e)=>keydown(e,"third")}/>
			<input type="text" id="fifth" maxLength="1"  onKeyDown={(e)=>keydown(e,"fourth")}/>
		</div>
		<button>CONFIRM</button>
	</div>
    )
}
export default OtpSplit;