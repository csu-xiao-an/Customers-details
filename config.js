var _config = {
  translations: {
    edit: 'Edit',
    customer: 'Customer details',
    appointment: 'Appointments',
    close_visits: 'Close visits',
    mobile: 'Mobile',
    email: 'E-mail',
    adress: 'Adress',
    add_debt: 'Add debt',
    debt: 'Debt',
    save: 'Save',
    amount: 'Amount',
    description_debt: 'Description of debt',
    add_comment: 'Add comment',
    remarks: 'Remarks',
    photos_count: 'photos',
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
    default_photo: './dist/media/default',
    gallery: './dist/media/galery/',
    groups: './dist/media/groups/',
    appointments: '/appointments',
    photo: './dist/media/',
    map: './dist/media/',
    home: '/',
    main: 'http://customers-details-api.bewebmaster.co.il/clients/',
    add_photo: 'customers.bewebmaster.co.il/?id=',
    add_status: 'customers.bewebmaster.co.il/?id='
  },
  data: {
    id: 123123,
    name: 'Ahuva Ben Shushan',
    birthdate: '2001-07-25',
    email: 'ahuva.ben.shushan@gmail.com',
    adress: 'Tel Aviv, Allenby str. 45',
    intent_x: 40.761043,
    intent_y: -73.980545,
    phone: [
      '0545421321'
    ],
    vip: true,
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
    status: [
      {text: 'sdfsdfsdf sdf sdf sd fsd fsd f', reminder: false},
      {text: 'sdfsdfsdf sdf sdf sd fsd fsd f', reminder: true, date: '2017-06-06 12:45'}
    ],
    gallery: ['01', '02', '03', '04', '05', '06', '07', '08', '09',
      '10', '11', '12', '13', '14', '15', '16', '17', '18'],
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
