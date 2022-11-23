export function getDayName(dateStr)
{
   return new Date(dateStr).toString().split(' ')[0]      
}

export function getDay(dateStr)
{
   return new Date(dateStr).getDate();
}

export function formatAMPM(dateStr) {
    const date = new Date(dateStr);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    const strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

  export function diff_hours(dt2, dt1) 
  {
 
   let diff =(dt2.getTime() - dt1.getTime()) / 1000;
   diff /= (60 * 60);
   return Math.abs(Math.round(diff));
   
  }

  export function formatToCalendarDate(dt){
     const date = new Date(dt).toISOString();
      return date.replace(/(?!\w|\s)./g, '')
        .replace(/\s+/g, ' ')
        .replace(/^(\s*)([\W\w]*)(\b\s*$)/g, '$2');
    }

