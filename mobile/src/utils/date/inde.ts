import { startOfMonth, endOfMonth, format, parseISO, Locale } from 'date-fns'
import { ptBR } from 'date-fns/locale';



export function firstDayOfCurrentMonth(): Date {
  return startOfMonth(new Date())
}

export function lastDayOfCurrentMonth(): Date {
  return endOfMonth(new Date())
}

export function convertIsoDateToPtBr(
  date: string | undefined | null,
  time = false
): string {
  if (!date) return ''

  return format(parseISO(date), time ? `dd/MM/yyyy 'às' HH:mm` : 'dd/MM/yyyy')
}

export function convertIsoDateToTime(date: string | undefined | null): string {
  if (!date) return ''

  return format(parseISO(date), 'HH:mm')
}

export function convertDateToString(date: Date | undefined | null): string {
  if (!date) return ''

  return format(date, 'yyyy-MM-dd')
}

export function dayMonth(date: string | undefined | null){

  if (!date) return ''
  
  const formattedDate = format(
    parseISO(date), 
    "dd"
  );
  return  formattedDate
}

export function month(date: string | undefined | null, formatMonth: 'MM' | 'MMM' | 'MMMM' = 'MMM'){

  if (!date) return ''

  const formattedDate = format(
    parseISO(date), 
    formatMonth,
    { locale: ptBR }
  );
  return  formattedDate
}
