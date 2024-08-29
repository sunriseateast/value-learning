let form=document.querySelector("form")
let guess_array=[]
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let lastResult=document.querySelector(".lastResult").innerHTML
    let input_value=Number(document.getElementById("guessField").value)
    if(input_value >=1 && input_value <=100){
        let ct_lresult=Number(lastResult)-1
        document.querySelector(".lastResult").innerHTML=ct_lresult
        if(ct_lresult >= 0){
            guess_array.push(input_value)
            document.querySelector(".guesses").innerHTML=guess_array
            let random=Math.round(Math.random()*100)+1
            if(random===input_value){
                document.querySelector(".lowOrHi").innerHTML=`Number Match`
            }else{
                document.querySelector(".lowOrHi").innerHTML=`Number Not Match`
            }
        }
        else{
            document.querySelector(".lastResult").innerHTML="limit reached"
        }
    }else{
        document.querySelector(".lowOrHi").innerHTML=`Insert value from 1 to 100`
    }

})
