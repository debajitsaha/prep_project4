function time()
{
    const date=new Date();
    let hrs= date.getHours();
    let mins = date.getMinutes();
    let secs= date.getSeconds();
    if(hrs>5&&hrs<=8){
        document.querySelector('.midtext').innerHTML="GRAM SOME HEALTHY BREAKFAST "
    }else if(hrs>=6&&hrs<12)
    {
        document.querySelector('.midtext').innerHTML="LET'S HAVE SOME LUNCH !!"
    }else if(hrs>=12&&hrs<16)
    {
        document.querySelector('.midtext').innerHTML="LET'S HAVE SOME LUNCH !!"
    }
    else if(hrs>=16&&hrs<20)
    {
        document.querySelector('.midtext').innerHTML="LET'S HAVE SOME LUNCH !!"
    }else{
        document.querySelector('.midtext').innerHTML="CLOSE YOUR EYES AND GO TO SLEEP" 
    }
let ampm=document.querySelector('.ampm')
if(hrs<=12)
{
    ampm.innerHTML="AM"
    
}
else{
    hrs-=12;
    ampm.innerHTML="PM"
    
}
document.getElementById('hours').innerHTML=hrs
document.getElementById('minute').innerHTML=mins
document.getElementById('second').innerHTML=secs

}
setInterval(()=>
{
    time()
},1000)