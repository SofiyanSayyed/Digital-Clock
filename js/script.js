function clock(){
    let d = new Date()
    let h = d.getHours()
    let m = d.getMinutes()
    let s = d.getSeconds()

    let hours = document.getElementsByClassName("hour")[0]
    let minute = document.getElementsByClassName("minute")[0]
    let second = document.getElementsByClassName("second")[0]
    let ampm = document.getElementsByClassName("ampm")[0]
    
    hours.innerHTML = h
    minute.innerHTML = m
    second.innerHTML = s
    
    if(h>12){
        h = h - 12;
        ampm.innerHTML = "PM"
    }
   
    
    h = (h<10) ? hours.innerHTML = "0" + h : h;
    m = (m<10) ? minute.innerHTML = "0" + m : m;
    s = (s<10) ? second.innerHTML = "0" + s : s;
   
}
setInterval(clock, 100)