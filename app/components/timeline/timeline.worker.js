export default () => {
  const appointments = {
    name: 'appointments',
    data: [
      {
        id: 123123,
        date: '1991-07-07 13:01',
        added_date: '',
        is_deleted: '',
        worker_id: '',
        worker_name: '',
        procedures: [
          {
            id: 123123,
            name: 'teller',
            duration: '',
            price: 12,
            color: 'red'
          }
        ]
      }
    ],
    is_end: false
  }
  const gallery = {
    name: 'gallery',
    data: [
      {
        id: 123123,
        name: 'tel',
        date: '2001-07-07 13:01'
      }
    ],
    is_end: false
  }
  const depts = {
    name: 'depts',
    data: [
      {
        id: 123123,
        sum: 12,
        date: '2001-09-07 13:01'
      }
    ],
    is_end: false
  }
  const notes = {
    name: 'notes',
    data: [
      {
        id: 123123,
        text: 'sdafasdf',
        date: '2017-12-12 12:12'
      }
    ],
    is_end: false
  }
  const sms = {
    name: 'sms',
    data: [
      {
        id: 123123,
        text: 'adsfadfa',
        date: '1995-07-07 13:01'
      }
    ],
    is_end: false
  }
  return [appointments, gallery, depts, notes, sms].reduce((arr, item) =>
    arr.concat(item.data.map(i => { i.field_name = item.name; return i })), []).sort((a, b) => moment(a.date) - moment(b.date))
}
