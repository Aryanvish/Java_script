let n='';
for(let m=0;m<8;m=m+1){
    let ver ='';
    for(let l=0;l<8;l=l+1){
        if((m+l)%2===0){
            ver=ver+"#";

        }else{
            ver=ver+'';

        }
    }
    n+=ver+'\n';
    }
    console.log(n);