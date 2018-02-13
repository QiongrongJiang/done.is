import moment from 'moment'

export const formatdate = function (value) {
  if (value.length) {
    // format value as YYYYMMDD
    let date = value.join('')

    let now = moment().startOf('date')
    let diff = moment(date).diff(now, 'days')

    let md = moment(date).format('MMM D') // month + day, eg., Feb 2

    if ( diff > 7 || diff < -1 ) {
      return moment(date).startOf('day').fromNow() + ', ' + md
    } else if (diff === 0) {
      return 'Today, ' + md
    } else if (diff === -1) {
      return 'Yesterday, ' + md
    } else if (diff === 1) {
      return 'Tomorrow, ' + md
    }  else {
      return moment(date).format('ddd') + ', ' + md
    }
  } else {
    return "No due date"
  }
}

export const formatshortdate = function (value) {
  if (value.length) {
    // format value as YYYYMMDD
    let date = value.join('')

    let now = moment().startOf('date')
    let diff = moment(date).diff(now, 'days')

    let md = moment(date).format('MMM D')

    switch (diff) {
      case 0:
        return 'Today'
        break;
      case -1:
        return 'Yesterday'
        break;
      case 1:
        return 'Tomorrow'
        break;
      default:
        return md
    }
  } else {
    return "No due date"
  }
}