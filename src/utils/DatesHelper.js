export const formatTimeFrom = (dateValue, duration) => {
  const regex = /\d{2}:\d{2}/
  const timeStart = dateValue.match(regex)
  const timeStartArr = timeStart[0].split(':')
  const {
    minutes: minutesDuration, 
    hours: hoursDuration
  } = formatMinutes(duration)

  const durationMinutes = hoursDuration*60 + minutesDuration
  const timeStartMinutes = +timeStartArr[0]*60 + +timeStartArr[1]
  const totalTimeMinutes = durationMinutes + timeStartMinutes
  const {
    minutes,
    hours
  } = formatMinutes(totalTimeMinutes)
  const formattedMinutes = `0${minutes}`.substring(-1, 2)
  const formattedHours = `0${hours}`.substring(-1, 2)
  return `${timeStart} - ${formattedHours}:${formattedMinutes}`
}

export const formatMinutes = timeMinutes => {
  const hours = timeMinutes / 60
  let rhours = Math.floor(hours)
  const minutes = (hours - rhours) * 60
  const rminutes = Math.round(minutes)
  if (rhours >=24) {
    rhours -= 24
  }
  return {
    minutes: rminutes,
    hours: rhours,
  }
}
