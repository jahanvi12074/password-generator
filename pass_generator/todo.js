const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "1234567890"
const symbolSet = "~!@#$%^&*()_+/"

const passBox = document.getElementById("pass-box")
const totalChar = document.getElementById("total-char")
const upperInput = document.getElementById("upper-case")
const lowerInput = document.getElementById("lower-case")
const numberInput = document.getElementById("Numbers")
const symbolInput = document.getElementById("symbols")
document.getElementById("btn").addEventListener(
    "click",
    function() {
        let ans = generate_pass()
        console.log(ans)
        passBox.innerHTML = ans;
    }
)   
 generate_pass=()=>{
    let str = ""
    if(upperInput.checked) {
        str += upperSet
    }
    if(lowerInput.checked) {
        str += lowerSet
    }
    if(numberInput.checked) {
        str += numberSet
     }
    if(symbolInput.checked) {
        str += symbolSet
    }
    let n = str.length - 1
    let req=totalChar.value
    let ans=""
    while(req--)
    {
        ans += str[Math.floor(Math.random()*n)]
    }
    return ans;
 }