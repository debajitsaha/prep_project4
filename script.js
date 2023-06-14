function time()
{
    const date=new Date();
    let hrs= date.getHours();
    let mins = date.getMinutes();
    let secs= date.getSeconds();
    if(hrs>=6&&hrs<12)
    {
        document.querySelector('.midtext').innerHTML="GRAB SOME HEALTHY BREAKFAST"
    }else if(hrs>=12&&hrs<16)
    {
        document.querySelector('.midtext').innerHTML="STOP YAWNING,GET SOME TEA... ITS JUST EVENING!"
    }
    else if(hrs>=16&&hrs<20)
    {
        document.querySelector('.midtext').innerHTML=""
    }else {
        document.querySelector('.midtext').innerHTML="CLOSE YOUR EYES AND GO TO SLEEP" 
    }
let ampm=document.querySelector('.ampm')
if(hrs<12)
{
    ampm.innerHTML="AM"
    
}else if(hrs==12)
{
    ampm.innerHTML="PM"
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

////second part of functionality of wepage
// let gdmorning=document.getElementById('wakeup')
// let gdafternoon=document.querySelector('select')
// let gdevening=document.getElementById('gdevening')
// let gdnight=document.getElementById('gdevening')
let gdmorning=document.querySelectorAll('select')
let printText=document.querySelector('.goodmorning')
let images=document.getElementById('img')
printText.innerHTML="GOOD MORNING"
function checkTime(){
    let time=new Date()
    let hrs=time.getHours();
    console.log(hrs)
    if(parseInt(gdmorning[0].value)===hrs)
    {
        printText.innerHTML="GOOD MORNING!!"   
        images.src="./Component 30 – 1.svg"
    }else if(parseInt(gdmorning[1].value)===hrs)
    {
        printText.innerHTML="GOOD AFTERNOON!! TAKE SOME SLEEP"   
        images.src="./Component 31 – 1.svg"
    }else if(parseInt(gdmorning[2].value)===hrs){
        printText.innerHTML="GOOD EVENING!! "   
        images.src="./lunch_image.png"
    }else if(parseInt(gdmorning[3].value)===hrs)
    {
        printText.innerHTML="GOOD NIGHT!! "   
        images.src="./Component 32 – 1.svg"
    }

    let selectIndex=gdmorning[0].selectedIndex
    let tergetIndex=gdmorning[0].options[selectIndex]
 document.getElementById('wakeupTime').innerHTML=tergetIndex.innerHTML;
 let selectIndex1=gdmorning[1].selectedIndex
 let tergetIndex1=gdmorning[1].options[selectIndex1]
document.getElementById('lunchtime').innerHTML=tergetIndex1.innerHTML;
   
let selectIndex2=gdmorning[2].selectedIndex
let tergetIndex2=gdmorning[2].options[selectIndex2]
document.getElementById('naptime').innerHTML=tergetIndex2.innerHTML;
let selectIndex3=gdmorning[3].selectedIndex
let tergetIndex3=gdmorning[3].options[selectIndex3]
document.getElementById('nightTime').innerHTML=tergetIndex3.innerHTML;
}
