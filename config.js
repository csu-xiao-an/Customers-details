var _config = {
  translations: {
    edit: 'Edit',
    customer: 'Customer details',
    appointment: 'Appointments',
    placeholder: 'placeholder',
    close_visits: 'Close visits',
    add_phone: 'Add a phone',
    mobile: 'Mobile',
    add_email: 'Add an email',
    email: 'E-mail',
    add_adress: 'Add an address',
    adress: 'Adress',
    add_debt: 'Add debt',
    debt: 'Debt',
    save: 'Save',
    amount: 'Amount',
    description_debt: 'Description of debt',
    add_comment: 'Add comment',
    remarks: 'Remarks',
    item_count: 'Items',
    gallery: 'Gallery',
    add_media: 'Add media',
    source_arrival: 'Source of arrival',
    social_net: 'Add another social network',
    add_link: 'Add link',
    group_partner: 'Group partner',
    completion: 'Completion of the details by the customer',
    request_to_detail: 'Submit a request to complete details',
    send: 'Send',
    marketing_material: 'The customer allows sending marketing material',
    signature_added: 'Signature added successfully',
    btn_delete: 'Delete',
    btn_replace: 'Replace',
    procedures: 'procedures',
    all_visits: 'For all visits...',
    dates: {
      weekdays: {
        'Monday': 'Monday',
        'Tuesday': 'Tuesday',
        'Wednesday': 'Wednesday',
        'Thursday': 'Thursday',
        'Friday': 'Friday',
        'Saturday': 'Saturday',
        'Sunday': 'Sunday'
      },
      days: {
        'Yesterday': 'Yesterday ',
        'Tommorow': 'Tommorow ',
        'Today': 'Today '
      }
    }
  },
  urls: {
    main: 'http://customers-details-api.bewebmaster.co.il/clients/',
    gallery: './dist/media/galery/',
    groups: './dist/media/groups/',
    appointments: '/appointments',
    media: './dist/media/',
    home: '/'
  },
  data: {
    id: 123123,
    name: 'Ahuva Ben Shushan',
    birthdate: '2001-07-25',
    email: 'ahuva.ben.shushan@gmail.com',
    adress: 'Tel Aviv, Allenby str. 45',
    intent_x: 50.4016991,
    intent_y: 30.2525126,
    phone: '0545421321',
    vip: true,
    status: 'Status',
    currency: '₪',
    debt_step: 10,
    debts: [
      {
        id: 123123,
        sum: 20,
        desc: 'did not pay for a month',
        date: '13:51 | 7 July'
      }
    ],
    notes: [
      {text: 'sdfsdfsdf sdf sdf sd fsd fsd f', reminder: false},
      {text: 'sdfsdfsdf sdf sdf sd fsd fsd f', reminder: true, date: '2017-06-06 12:45'}
    ],
    gallery: [
      {
        name: '01.png',
        note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: '2017-08-09 00:00'
      },
      {
        name: '02.png',
        note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: '2017-08-09 01:00'
      },
      {
        name: '03.png',
        note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: '2017-08-09 02:00'
      },
      {
        name: '04.png',
        note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: '2017-08-09 03:00'
      },
      {
        name: '05.png',
        note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: '2017-08-09 04:00'
      },
      {
        name: '06.png',
        note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: '2017-08-09 05:00'
      },
      {
        name: '07.png',
        note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: '2017-08-09 06:00'
      },
      {
        name: '08.png',
        note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: '2017-08-09 07:00'
      },
      {
        name: '09.png',
        note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: '2017-08-09 08:00'
      },
      {
        name: '10.png',
        note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: '2017-08-09 09:00'
      },
      {
        name: '11.png',
        note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: '2017-08-09 10:00'
      },
      {
        name: '12.png',
        note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: '2017-08-09 11:00'
      },
      {
        name: '13.png',
        note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: '2017-08-09 12:00'
      },
      {
        name: '14.png',
        note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: '2017-08-09 13:00'
      },
      {
        name: '15.png',
        note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: '2017-08-09 14:00'
      },
      {
        name: '16.png',
        note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: '2017-08-09 15:00'
      },
      {
        name: '17.png',
        note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: '2017-08-09 16:00'
      },
      {
        name: '18.png',
        note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: '2017-08-09 17:00'
      },
      {
        name: '19.mp3',
        note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: '2017-08-09 17:00'
      },
      {
        name: '20.mp3',
        note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: '2017-08-09 17:00'
      }
    ],
    groups: [
      {
        id: '01',
        name: 'Were born this month',
        amount: '72'
      },
      {
        id: '02',
        name: 'Preferred Customers',
        amount: '17'
      },
      {
        id: '03',
        name: 'They did not pay',
        amount: '8'
      }
    ],
    approved_marketing: {
      status: true,
      sign: 'autograph.png'
    },
    recent_appoinments: [
      {
        id: 321321,
        date: '2017-08-09 15:00',
        procedures: [
          {
            id: 159159,
            name: 'manicure',
            price: 100,
            duration: 120
          },
          {
            id: 756756,
            name: 'hair coloring',
            price: 150,
            duration: 45
          }
        ]
      },
      {
        id: 456465,
        date: '2017-07-01 19:00',
        procedures: [
          {
            id: 778954,
            name: 'visit',
            price: 4100,
            duration: 120
          }
        ]
      },
      {
        id: 456465,
        date: '2017-07-29 18:00',
        procedures: [
          {
            id: 778954,
            name: 'chemistry',
            price: 1200,
            duration: 120
          }
        ]
      },
      {
        id: 456465,
        date: '2018-08-10 18:00',
        procedures: [
          {
            id: 778954,
            name: 'chemistry',
            price: 1200,
            duration: 120
          }
        ]
      },
      {
        id: 456465,
        date: '2018-01-01 18:00',
        procedures: [
          {
            id: 778954,
            name: 'chemistry',
            price: 1200,
            duration: 120
          }
        ]
      },
      {
        id: 456465,
        date: '2017-09-11 18:00',
        procedures: [
          {
            id: 778954,
            name: 'manicure',
            price: 700,
            duration: 120
          }
        ]
      },
      {
        id: 456465,
        date: '2016-07-21 18:00',
        procedures: [
          {
            id: 778954,
            name: 'hair coloring',
            price: 600,
            duration: 120
          }
        ]
      },
      {
        id: 456465,
        date: '2010-07-21 18:00',
        procedures: [
          {
            id: 778954,
            name: 'facial treatment',
            price: 400,
            duration: 120
          },
          {
            id: 778954,
            name: 'laser hair 3 treatments',
            price: 500,
            duration: 120
          },
          {
            id: 778954,
            name: 'laser hair 3 treatments',
            price: 100,
            duration: 120
          }
        ]
      }
    ]
  }
}
