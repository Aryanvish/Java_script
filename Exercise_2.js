// snake water gun with cpu 
let user = prompt("Enter ,s ,w ,g")
let cpu1 = Math.floor(Math.random() * 3);
let cpu = ["s" , "w" , "g"][cpu1]

const match = (cpu,user)=>{
    if(cpu===user){
        return "No one"
    }
    else if(cpu==="s" && user==="w"){
        return "winner cpu"
    }
    else if(cpu==="w" && user==="s"){
        return "winner user"
    }
    else if(cpu==="s" && user==="g"){
        return " winner user"
    }
    else if(cpu==="g" && user==="s"){
        return " winner cpu"
    
    }
    else if(cpu==="g" && user==="w"){
        return " winner user"
    
    }
    else if(cpu==="w" && user==="g"){
        return " winner cpu"
    
    }
}
let result = match(cpu,user)
console.log("The winner is:" + result)