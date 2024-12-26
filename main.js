const words = ["space", "house", "plant", "apple", "brain"];

const row1 = document.querySelectorAll(".row1");
const row2 = document.querySelectorAll(".row2");
const row3 = document.querySelectorAll(".row3");
const row4 = document.querySelectorAll(".row4");
const row5 = document.querySelectorAll(".row5");

const submit = document.getElementById("submit");

const inputs = document.getElementsByTagName("input");

const rowlist = document.querySelectorAll("rowlist");

const reloading = document.getElementById("reload")

disableFields(0)
const val = Math.floor(Math.random()*words.length);
const rand_opt = words[val];
// console.log(rand_opt);

let resultant = ""


submit.addEventListener("click", ()=>{
    inputValues(rand_opt);
    let idx = getIndex()
    // console.log(idx)
    disableFields(idx)

    console.log(resultant)
    if(idx === inputs.length){
        if(rand_opt.split('').sort().join('')===resultant.split('').sort().join('')){
            alert("You won the game")
        }else{
            alert("You lost the game")
        }
    }
})


reloading.addEventListener("click", ()=>{
    location.reload()
})



function inputValues(data){
    let j=0
    for(let i=0;i<inputs.length;i++){
        //   console.log(inputs[i].value)
        if(!inputs[i].disabled && inputs[i].value === data[j]){
            // console.log(data[j])
            inputs[i].style.backgroundColor = "green"
            resultant += inputs[i].value
            j++
        }else if(!inputs[i].disabled && data.includes(inputs[i].value)){
            inputs[i].style.backgroundColor = "yellow"
            j++
        }else if(!inputs[i].disabled && !data.includes(inputs[i].value)){
            inputs[i].style.backgroundColor = "grey"
            j++
        }
    }




    // for(let i=0;i<data.length;i++){

    //     for(let k=i;k<input.length;k++){
    //         // console.log(input[k].querySelector("input").value);
    //         if(data[i] === input[i].querySelector("input").value){
    //             input[k].querySelector("input").style.backgroundColor = "green";
    //             result +=input[k].querySelector("input").style.backgroundColor = "green";
    //         }else if(data[i] == input[k].querySelector("input").value){
    //             input[k].querySelector("input").style.backgroundColor = "yellow";
    //         }else{
    //             input[k].querySelector("input").style.backgroundColor = "grey";
    //         }
    //     }
    // }
}


function disableFields(index){
    for(let i=0;i<inputs.length;i++){
        if(i === index){
            inputs[i].disabled = false;
            inputs[i].focus();
        }else if(i>index && i<index+5){
            inputs[i].disabled = false;
        }else{
            inputs[i].disabled = true;
        }
    }
}

for(let i=0;i<inputs.length;i++){
    inputs[i].addEventListener("input", (e)=>{
        if(e.target.value && i<inputs.length){
            inputs[i+1].focus()
        }else{
            inputs[i-1].focus()
        }
    })
}

function getIndex(){
    let i=0
    for(i=0;i<inputs.length;i++){
        if(!inputs[i].disabled && i<inputs.length){
            return i+5
        }
    }
    return null

}
