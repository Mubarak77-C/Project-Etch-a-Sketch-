console.log('hy');
// const input = document.querySelector("input");
// const inputUser=input.value; // ❌ Happens instantly when the page loads!
//defer load first html then js so input.value take as "" whenever load so check below code
// const actGrid= addEventListener("hover",(inputUSer)={

//## inputUSer in paramerter arropw func should empptuy ()->{}
//
// });

const input = document.querySelector("input");
const submitBtn= document.querySelector("#submit-btn");

submitBtn.addEventListener("click",()=>{
// 3. Grab the value INSIDE the function, right when the user clicks!
    // Also, wrap it in Number() or parseInt() because input values are strings by default
 const inputUser =  Number(input.value);

    if(inputUser<1 || inputUser>100){
        alert("Please Enter number from 1 to 100");
    }
    console.log(inputUser);
});


