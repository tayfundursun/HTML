
// GREETINGS
function greet(){
  let info = document.querySelector(".info")
  let userName = prompt("Adınızı girin.")
  userName = userName.charAt(0).toUpperCase() + userName.slice(1)

  info.innerHTML = `Selam, <u>${userName}</u>! Hoş geldin!`
}

// CLOCK-FUNCTION
setInterval(function startTime() {
  let TIME = new Date()
  let day = TIME.getDay()
  let hour = TIME.getHours()
  let min = TIME.getMinutes()
  var sec = TIME.getSeconds()

  switch(day){
    case 1:
    day = "Pazartesi"
    break

    case 2:
    day = "Salı"
    break

    case 3:
    day = "Çarşamba"
    break

    case 4:
    day = "Perşembe"
    break

    case 5:
    day = "Cuma"
    break

    case 6:
    day = "Cumartesi"
    break

    case 7:
    day = "Pazar"
    break        
  }


  hour = hour < 10 ? "0" + hour : hour
  min = min < 10 ? "0" + min : min
  sec = sec < 10 ? "0" + sec : sec

  let clock = document.querySelector("#clock")
  clock.innerHTML = `Şu anda saat ${hour}:${min}:${sec} geçiyor ve günlerden ${day}.`
  
}, 1000)

greet()
startTime()