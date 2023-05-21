class Clock{
   
    $date
    constructor(min,sec){
       
        this.$date = new Date(2023,1,1,0,min,sec)
    }

    getSecond(){
       return this.$date.getSeconds();
    }

    getMinute(){
        return this.$date.getMinutes();
    }

    setSecond(second) {
        this.$date.setSeconds(second)
    }

    setMinute(minute) {
        this.$date.setMinutes(minute)
    }




    handleStartBtn = null;
    start(){
      this.intervalId = setInterval(() =>{
        this.date.setSeconds(this.date.getSeconds() + 1)
      })

    }
   
    


    stop(){
    clearInterval(handleStartBtn)
       this.setSecond(0);
       this.setMinute(0)
     console.log(index)

    }

    changeGUI() {
        const li = document.
    }


}

//--------Create Data------------
const clockList = [
    {"index"new Date(2023,1,1,0,2,3)},
    new Date(2023,1,1,0,2,3),
    new Date(2023,1,1,0,2,59),
    new Date(2023,1,1,0,2,0),
    new Date(2023,1,1,0,6,3)

]
//-------start-------
const start = setInterval(function(index){
    const element = clockList.filter(ind => ind == 0);
    console.log(element);
    element.getSecond
})
//-----code font end---------

const ol = document.getElementById('clock-list')
function setFontend

for (let index = 0; index < clockList.length;index++){
    const element = clockList[index];

    const li = document.createElement('li');

let time = element.getMinute() + ":" +element.getSecond();

const startbtn = document.createElement('button');
startbtn.innerHTML = "Start";
startbtn.addEventListener("click",element.start(index));

const stopbtn = document.createElement('button');
stopbtn.innerHTML = "Stop";
stopbtn.addEventListener("click",element.stop(index));


li.innerHTML = time
li.appendChild(startbtn)
li.appendChild(stopbtn)
ol.appendChild(li);

}


//-----stop all ---------
function stopAll() {
    for (let index = 0; index < clockList.length; index++)
 clockList[index] = new Clock(0,0)
}
 setFontend