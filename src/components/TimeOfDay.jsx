export default 
function TimeOfDay() {
  const date = new Date()
  const hour = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()
  let newMin;

  if (minutes.length < 2) {
    newMin = "0" + minutes
  } else {
    newMin = minutes
  
  }

  const time = `${hour}:${newMin}.${seconds}`

  return (<h2>Klokken er: {time}</h2>)
}