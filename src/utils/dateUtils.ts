import { differenceInDays, differenceInMonths, differenceInYears } from 'date-fns'

export const calculateDaysTogether = (startDate: Date): number => {
  return differenceInDays(new Date(), startDate)
}

export const calculateMonthsTogether = (startDate: Date): number => {
  return differenceInMonths(new Date(), startDate)
}

export const calculateYearsTogether = (startDate: Date): number => {
  return differenceInYears(new Date(), startDate)
}

export const calculateTimeApart = (apartDate: Date) => {
  const now = new Date()
  const difference = now.getTime() - apartDate.getTime()

  const days = Math.floor(difference / (1000 * 60 * 60 * 24))
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((difference / 1000 / 60) % 60)
  const seconds = Math.floor((difference / 1000) % 60)

  return {
    days,
    hours,
    minutes,
    seconds,
  }
}

export const calculateCountdown = (targetDate: Date) => {
  const now = new Date()
  const difference = targetDate.getTime() - now.getTime()

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isComplete: true,
    }
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24))
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((difference / 1000 / 60) % 60)
  const seconds = Math.floor((difference / 1000) % 60)

  return {
    days,
    hours,
    minutes,
    seconds,
    isComplete: false,
  }
}

export const formatDate = (date: Date, format: 'short' | 'long' = 'short'): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: format === 'long' ? 'long' : 'short',
    day: format === 'long' ? 'numeric' : '2-digit',
  }
  
  return new Intl.DateTimeFormat('vi-VN', options).format(date)
}
