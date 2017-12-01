// import {timelineGetService} from 'project-services'

export default f => {
  let arr = []
  const appointments = {
    name: 'appointments',
    data: [
      {
        id: 123123,
        date: '2001-07-07 13:01',
        added_date: '1992-07-07 13:01',
        worker_id: 123123,
        worker_name: 'Teller',
        note: 'Aasfasfa Fsdfasd as asdf',
        address: 'Tel Aviv, Allenby str. 45',
        procedures: [
          {
            id: 123123,
            name: 'asdaaasdfas',
            duration: 10,
            price: 100,
            color: 'green'
          },
          {
            id: 123123,
            name: 'testttad',
            duration: 2,
            price: 1200,
            color: 'red'
          },
          {
            id: 123123,
            name: 'LOremmasdfasdasdfasdf',
            duration: 3,
            price: 142,
            color: 'yellow'
          }
        ]
      }
    ],
    is_end: false
  }
  // todo if(plugin.GALLERY)
  const gallery = {
    name: 'gallery',
    data: [
      {
        id: 123123,
        name: '01.png',
        note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: '2010-07-07 13:01'
      },
      {
        id: 123123,
        name: '05.png',
        date: '2017-07-07 13:01'
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
        date: '2001-09-07 13:01',
        desc: 'asdfasdfasdfasdfasdf'
      }
    ],
    is_end: false
  }
  const notes = {
    name: 'notes',
    data: [
      {
        id: 123123,
        text: 'Sampletesadf asdfa asdfasdsf asasdfasdfad asdasdfasdffas',
        date: '2007-12-12 12:12'
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
        date: '2017-12-12 12:12'
      }
    ],
    is_end: false
  }
  if (f.appointment) arr.push(appointments)
  if (f.other) arr.push(notes, sms)
  if (f.gallery) arr.push(gallery)
  if (f.depts) arr.push(depts)
  if (arr.length > 0) {
    arr = arr.reduce((arr, item) =>
      arr.concat(item.data.map(i => { i.field_name = item.name; return i })), []).sort((a, b) => moment(b.date) - moment(a.date))
    arr[0].separator = true
    arr.reduce((pI, cI) => {
      if (moment(pI.date).format('YYYY-MM-DD') !== moment(cI.date).format('YYYY-MM-DD')) { cI.separator = true }
      return cI
    })
  }
  return arr
}
