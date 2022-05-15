let arr=[];
const btn = document.querySelectorAll(".btn");

let random = Math.floor(Math.random()*(4-0)+0);
let output=[];
let glow;
let game = false;

function glowButton(glow){
    console.log("jalao");
    btn[glow].style.border="10px dashed black";
    setTimeout(()=>{
        btn[glow].style.border="10px solid black";
    },1000);
}

function newGlow()
{
    arr.push(Math.floor(Math.random()*(4-0)+0));
    glow=arr[arr.length-1];
    glowButton(glow);
    output=[];
}

for(let i=0;i<btn.length;i++)
{
    btn[i].addEventListener('click',()=>{
        if(arr.length==0)
        {
            arr.push(i);
            console.log("first");
            arr.push(Math.floor(Math.random()*(4-0)+0));
            glow=arr[arr.length-1];
            glowButton(glow);
            game=true;
        }
        else if(arr.length>=output.length)
        {
            
            output.push(i);
            console.log(arr,output);
            
            for(let j=0;j<output.length;j++)
            {
                if(arr[j]!=output[j])
                {
                    console.log("galat"+arr[j], output[j]);
                    game=false;
                }
            }
            if(game==true&&arr.length==output.length)
            {
                console.log("naya jalao");
                setTimeout(newGlow(),2000);
            }
            // console.log("out");            
        }
        else if(game){
            
            
        }
        
        
        // console.log(arr);
        //console.log(Math.floor(Math.random()*(4-0))+0);
    })
}







