var config = {
  isRtL: false,
  max_services_shown_without_cat: 15,
  user: {
    // admin, senior, junior, readonly, untrusted
    permission_level: 'admin',
    business_id: 123,
    worker_id: 1
  },
  plugins_list: ['gallery', 'depts', 'punch_cards', 'colors_beautech'],
  colors_beautech: [
    {
      name: 'שורש גוונים',
      date: '2017-12-30T19:52:08.195Z',
      services: [
        {
          name: 'שורש',
          colors: [
            {
              color_number: 7.61,
              color_quantity: '20גר',
              brand: 'Inoa Supreme',
              oxy_percent: '9%',
              oxy_quantity: '10 גר',
              comments: 'להרבב עם אבקת הבהרה של 15%'
            },
            {
              color_number: 6.60,
              color_quantity: '15גר',
              brand: 'Inoa Supreme',
              comments: 'הרעה יחסית ערוכה שלא נכנסת בשתי'
            },
            {
              color_number: 5.1,
              color_quantity: '10גר',
              brand: 'Rischesse'
            }
          ]
        },
        {
          name: 'קצוות',
          colors: [
            {
              color_number: 7.61,
              color_quantity: '20גר',
              brand: 'High Rischesse',
              oxy_percent: '9%',
              oxy_quantity: '10 גר'
            },
            {
              color_number: 5.1,
              color_quantity: '10גר',
              brand: 'Rischesse'
            }
          ]
        }
      ],
      comments: 'sdfad',
      waiting_time: 'adfasd'
    },
    {
      name: 'asdfasdf',
      date: '2018-02-10T19:52:08.195Z',
      services: [
        {
          name: 'שורש',
          colors: [
            {
              color_number: 7.21,
              color_quantity: '2dd',
              brand: 'Supdreme',
              oxy_percent: '7%',
              oxy_quantity: '10 גר',
              comments: 'להרבב עם אבקת הבהרה של 15%'
            },
            {
              color_number: 6.60,
              color_quantity: '15גר',
              brand: 'Inoa Supreme',
              comments: 'הרעה יחסית ערוכה שלא נכנסת בשתי'
            },
            {
              color_number: 5.1,
              color_quantity: '10גר',
              brand: 'Rischesse'
            }
          ]
        },
        {
          name: 'asdfasd',
          colors: [
            {
              color_number: 7.61,
              color_quantity: '20גר',
              brand: 'High Rischesse',
              oxy_percent: '9%',
              oxy_quantity: '10 גר'
            },
            {
              color_number: 5.1,
              color_quantity: '10גר',
              brand: 'Rischesse'
            }
          ]
        }
      ],
      comments: 'dasdf',
      waiting_time: 'adfasdfa'
    },
    {
      name: 'test',
      date: '2057-12-30T19:52:08.195Z',
      services: [
        {
          name: 'lol',
          colors: [
            {
              color_number: 7.61,
              color_quantity: '20גר',
              brand: 'Inoa Supreme',
              oxy_percent: '9%',
              oxy_quantity: '10 גר',
              comments: 'להרבב עם אבקת הבהרה של 15%'
            },
            {
              color_number: 6.60,
              color_quantity: '15גר',
              brand: 'Inoa Supreme',
              comments: 'הרעה יחסית ערוכה שלא נכנסת בשתי'
            },
            {
              color_number: 5.1,
              color_quantity: '10גר',
              brand: 'Rischesse'
            }
          ]
        },
        {
          name: 'lal',
          colors: [
            {
              color_number: 7.61,
              color_quantity: '20גר',
              brand: 'High Rischesse',
              oxy_percent: '9%',
              oxy_quantity: '10 גר'
            },
            {
              color_number: 5.1,
              color_quantity: '10גר',
              brand: 'Rischesse'
            }
          ]
        }
      ],
      comments: 'asdfasdf',
      waiting_time: 'asdfasdfasdfasdf'
    }
  ],
  punch_cards: [
    {
      id: 10,
      service_name: 'aSpa',
      service_id: 15,
      service_count: 10,
      sum: 480,
      date: '2017-01-01',
      uses: [
        {
          id: 1,
          date: '2017-01-01T12:00:00Z'
        },
        {
          id: 1,
          date: '2017-01-01T12:00:00Z'
        },
        {
          id: 1,
          date: '2017-01-01T12:00:00Z'
        },
        {
          id: 1,
          date: '2017-01-01T12:00:00Z'
        }
      ]
    },
    {
      id: 2,
      service_name: 'пд в Spa',
      service_id: 15,
      service_count: 6,
      sum: 750,
      date: '2017-01-01',
      uses: [
        {
          id: 1,
          date: '2017-01-01T12:00:00Z'
        },
        {
          id: 1,
          date: '2017-01-01T12:00:00Z'
        },
        {
          id: 1,
          date: '2017-01-01T12:00:00Z'
        },
        {
          id: 1,
          date: '2017-01-01T12:00:00Z'
        },
        {
          id: 1,
          date: '2017-01-01T12:00:00Z'
        },
        {
          id: 1,
          date: '2017-01-01T12:00:00Z'
        }
      ]
    },
    {
      id: 300,
      service_name: 'по3од в Spa',
      service_id: 15,
      service_count: 3,
      sum: 150,
      date: '2017-01-01',
      uses: [
        {
          id: 1,
          date: '2017-01-01T12:00:00Z'
        },
        {
          id: 1,
          date: '2017-01-01T12:00:00Z'
        },
        {
          id: 1,
          date: '2017-01-01T12:00:00Z'
        }
      ],
      expiration: '2017-12-31'
    },
    {
      id: 4,
      service_name: 'под в Spa',
      service_id: 15,
      service_count: 15,
      sum: 50,
      date: '2017-01-01',
      uses: [
        {
          id: 1,
          date: '2017-01-01T12:00:00Z'
        },
        {
          id: 1,
          date: '2017-01-01T12:00:00Z'
        },
        {
          id: 1,
          date: '2017-01-01T12:00:00Z'
        },
        {
          id: 1,
          date: '2017-01-01T12:00:00Z'
        }
      ]
    },
    {
      id: 5,
      service_name: 'поход в Spa',
      service_id: 15,
      service_count: 5,
      sum: 250,
      date: '2017-01-01',
      uses: [
        {
          id: 1,
          date: '2017-01-01T12:00:00Z'
        },
        {
          id: 1,
          date: '2017-01-01T12:00:00Z'
        },
        {
          id: 1,
          date: '2017-01-01T12:00:00Z'
        },
        {
          id: 1,
          date: '2017-01-01T12:00:00Z'
        }
      ],
      expiration: '2017-11-31'
    }
  ],
  translations: {
    language: 'en',
    edit: '',
    profile: 'Personal Info',
    name: 'Name',
    phone: 'Phone',
    gender: 'Gender',
    birthday: 'Birthday',
    summary: 'summary',
    agreement: 'Agreement to send advertising',
    customer: 'Customer details',
    appointment: 'Appointments',
    added_to_favorites: 'Added to favorites',
    placeholder: 'placeholder',
    close_visits: 'Close visits',
    add_phone: 'Add a phone',
    close_queue: 'Close Queue',
    add_new_queue: 'Add New Queue',
    mobile: 'Mobile',
    add_email: 'Add an email',
    email: 'Email',
    add_adress: 'Add an address',
    adress: 'Address',
    add_debt: 'Add New Debt',
    debts: 'Debts',
    save: 'Save',
    amount: 'Amount',
    description_debt: 'Description of debt',
    description_notes: 'Description',
    reminder: 'Set a reminder',
    add_note: 'Add Note',
    remember: 'Remember',
    notes: 'Notes',
    item_count: 'Items',
    gallery: 'Gallery',
    files: 'Files',
    add_media: 'Add media',
    // add_traffic_source: 'Add traffic source',
    // traffic_source: 'Traffic source',
    recommended_by: 'Recommended by:',
    add_social_net: 'Add a social media link',
    social_net: 'Social media link',
    add_link: 'Add link',
    group_partner: 'Group partner',
    // completion: 'Filling up customer`s details',
    request_to_detail: 'Send a link to the customer',
    send: 'Send',
    sent: 'Sent',
    permitted: 'The client have permitted sending ads',
    not_permitted: 'The client haven`t permitted sending ads',
    signature_added: 'Signature added successfully',
    add_signature: 'Add client`s signature',
    save_signature: 'Save signature',
    clear: 'Clear',
    btn_delete: 'Remove',
    btn_replace: 'Change',
    services: 'services',
    all_visits: 'For all visits...',
    url: 'Url',
    customer_pl: 'Customer',
    show_more_fields: 'Show more fields',
    male: 'Male',
    female: 'Female',
    other: 'Other',
    worker: 'Worker',
    services_timeline: 'Services',
    hours: 'h',
    note: 'Note',
    meeting: 'Meeting by call',
    photo: 'Photo',
    share_title: 'Web Fundamentals',
    share_text: 'Check out Web Fundamentals — it rocks!',
    appointment_creted: 'Appointment created at {time}',
    photo_creted: 'Photo created at {time}',
    appointment_at: 'Appointment at',
    debts_t: 'Debts',
    other_t: 'Other',
    dept_created: 'Debt created at {time}',
    dept_modified: 'Debt was updated at {time}',
    dept_deleted: 'Debt was repaid at {time}',
    dept: 'Dept',
    punch_cards_adding: 'Add punch cards',
    punch_topnav: 'Punch "{client_name}"',
    punch: 'Punch',
    punch_cards: 'Punch cards',
    punch_create: 'Punch was created: {name}, {count} uses',
    punch_use: 'Punch was used: {name}, {countCur}/{count} uses',
    punch_end: 'Punch end: {name}',
    is_valid: 'Is valid until ',
    left: 'Left',
    days: 'days',
    use: 'Use',
    delete_punch: 'Delete punch',
    delete_use: 'Delete use',
    delete: 'Delete',
    punch_questions: 'Are you sure you want to delete this punch?',
    use_questions: 'Are you sure you want to delete this use?',
    from: ' from {count}',
    used: 'Used ',
    color_card_topnav: 'Colors "{client_name}"',
    new_punch: 'New punch',
    serch_proc: 'Search procedure',
    punch_service: 'Punch for {service_name}',
    number_of_uses: 'Num of uses:',
    discount: 'Discount(%):',
    total: 'Total:',
    subscription_period: 'Add subscription period',
    price_single: 'Single service with discount:',
    valid_until: 'Valid until',
    valid_until_adding: 'Punch is valid until',
    cancel: 'Cancel',
    next: 'Next',
    dates: {
      months: {
        0: 'January',
        1: 'February',
        2: 'March',
        3: 'April',
        4: 'May',
        5: 'June',
        6: 'July',
        7: 'August',
        8: 'September',
        9: 'October',
        10: 'November',
        11: 'December'
      },
      weekdays: {
        0: 'Sunday',
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday'

      },
      days: {
        '-1': 'Yesterday',
        '1': 'Tommorow',
        '0': 'Today'
      },
      last_appointent: {
        in_days: 'In {count} days',
        days_ago: '{count} days ago',
        in_month: 'In {count} month',
        month_ago: '{count} month ago',
        in_years: 'In {count} years',
        years_ago: '{count} years ago',
        next_year: 'Next year',
        last_year: 'Last year',
        in_weeks: 'In {count} weeks',
        weeks_ago: '{count} weeks ago',
        last: 'Last'
      }
    },
    notes_list: [
      {value: 'hours', label: 'Hours'},
      {value: 'days', label: 'Days'},
      {value: 'weeks', label: 'Weeks'},
      {value: 'months', label: 'Months'}
    ],
    source_list: [
      {value: 'ads', label: 'Ads'},
      {value: 'fb_page', label: 'fb_page'},
      {value: 'family', label: 'family'},
      {value: 'friends', label: 'friends'},
      {value: 'recommendation', label: 'recommendation'}
    ],
    social_list: [
      {value: 'facebook', label: 'facebook'},
      {value: 'instagram', label: 'instagram'},
      {value: 'linkedin', label: 'linkedin'},
      {value: 'twitter', label: 'twitter'},
      {value: 'pinterest', label: 'pinterest'},
      {value: 'google', label: 'google'},
      {value: 'vk', label: 'vk'},
      {value: 'website', label: 'website'}
    ]
  },
  urls: {
    adress: 'https://maps.googleapis.com/maps/api/geocode/json?address={query}&language={language}',
    timeline_events: '/customers-details/clients/123/timeline/{event}?start={ds}&end={de}',
    punch_cards_req: '/customers-details/clients/{client_id}/punch_cards',
    signature: '/customers-details/clients/{client_id}/signature',
    gallery_sharing_base_url: 'https://api.bewebmaster.co.il/',
    media_url: '/customers-details/clients/{client_id}/media',
    fill: '/customers-details/clients/{client_id}/filling-up',
    social: '/customers-details/clients/{client_id}/social',
    notes: '/customers-details/clients/{client_id}/notes',
    dept: '/customers-details/clients/{client_id}/dept',
    clients: '/customers-details/clients/{client_id}',
    add_client_url: '/add-client/clients?q={query}',
    punch_cards_adding: '/punch_cards/adding',
    appointment: '/creating-appointment/',
    main: 'https://api.bewebmaster.co.il',
    worker_img: '/worker/{worker_id}.jpg',
    punch_cards_get: '/catalog/services',
    colors_beautech: '/colors_beautech',
    groups_img: './dist/media/groups/',
    soc_net: './dist/media/soc_net/',
    recommended_by: 'recommended_by',
    gallery: './dist/media/galery/',
    punch_cards: '/punch_cards',
    isFavorite: 'isFavorite',
    permit_ads: 'permit_ads',
    media: './dist/media/',
    timeline: '/timeline',
    groups: '/groups/',
    address: 'address',
    status: 'status',
    source: 'source',
    gender: 'gender',
    phone: 'phone',
    email: 'email',
    home: '/'
  },
  data: {
    id: 123123,
    name: 'Ahuva Ben Shushan',
    birthdate: '1990-03-30',
    email: 'ahuva.ben.shushan@gmail.co',
    adress: 'Tel Aviv, Allenby str. 45',
    intent_x: 50.4016991,
    intent_y: 30.2525126,
    phone: '0545421321',
    isFavorite: true,
    details_link_active: false,
    permit_ads: false,
    signature: './dist/media/autograph.png',
    status: 'Status',
    // source: 'ads',
    gender: 'Male',
    currency: '₪',
    debt_step: 10,
    max_side: 1000,
    timeout: 500,
    hot_links: [
      {label: '/dist/media/ic_hair_d.svg', url: '/colors_beautech'},
      // {label: 'Punch cards', url: '/punch_cards'},
      {label: '/dist/media/ic_timeline.svg', url: '/timeline'},
      // {label: 'Gallery', url: '#gallery'},
      {label: '/dist/media/ic_debts.svg', url: '#depts'},
      {label: '/dist/media/ic_subscription.svg', url: '#notes'}
    ],
    debts: [
      {
        id: 123123,
        sum: 20,
        desc: 'did not pay for a month',
        date: '2017-07-07 13:01'
      }
    ],
    notes: [
      {
        id: 123123,
        text: 'sdfsdfsdfdsfd',
        date: '2017-11-29T03:58:49.129Z'
      },
      {
        id: 123123,
        text: 'sdfsdfsdf sdf sdf f',
        date: '2017-10-29T03:58:49.129Z',
        reminder_date: '2017-12-29T03:58:49.129Z'
      }
    ],
    groups: [
      {
        id: 1,
        name: 'Were born this month',
        amount: '72'
      },
      {
        id: 2,
        name: 'Preferred Customers',
        amount: '17'
      },
      {
        id: 3,
        name: 'They did not pay',
        amount: '8'
      },
      {
        id: 1,
        name: 'Were born this month',
        amount: '72'
      },
      {
        id: 2,
        name: 'Preferred Customers',
        amount: '17'
      },
      {
        id: 3,
        name: 'They did not pay',
        amount: '8'
      }
    ],
    soc_media: [
      {
        id: 1,
        type: 'facebook',
        url: 'https://www.facebook.com/bewebmaster/'
      },
      {
        id: 2,
        type: 'instagram',
        url: 'https://www.instagram.com/bewebmaster/'
      },
      {
        id: 3,
        type: 'linkedin',
        url: 'https://www.linkedin.com/bewebmaster/'
      },
      {
        id: 4,
        type: 'twitter',
        url: 'https://www.twitter.com/bewebmaster/'
      },
      {
        id: 5,
        type: 'pinterest',
        url: 'https://www.pinterest.com/bewebmaster/'
      },
      {
        id: 6,
        type: 'vk',
        url: 'https://www.vk.com/bewebmaster/'
      }
    ],
    gallery: [
      {
        id: 123123,
        name: '01.png',
        note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: '2017-12-18T02:09:54.486Z'
      },
      {
        id: 123123,
        name: '02.png',
        note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: '2017-12-18T02:09:54.486Z'
      },
      {
        id: 123123,
        name: '03.png',
        note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: '2017-12-18T02:09:54.486Z'
      },
      {
        id: 123123,
        name: '04.png',
        note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: '2017-12-18T02:09:54.486Z'
      },
      {
        id: 123123,
        name: '05.png',
        note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: '2017-12-18T02:09:54.486Z'
      },
      {
        id: 123123,
        name: '06.png',
        note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: '2017-12-18T02:09:54.486Z'
      },
      {
        id: 123123,
        name: '07.png',
        note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: '2017-12-18T02:09:54.486Z'
      },
      {
        id: 123123,
        name: '08.png',
        note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: '2017-12-18T02:09:54.486Z'
      },
      {
        id: 123123,
        name: 'video.mp4',
        note: 'Lorem tur adipisicing elit',
        date: '2017-12-18T02:09:54.486Z'
      },
      {
        id: 123123,
        name: '09.png',
        note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: '2017-12-18T02:09:54.486Z'
      },
      {
        id: 123123,
        name: '10.png',
        note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: '2017-12-18T02:09:54.486Z'
      },
      {
        id: 123123,
        name: 'document.pdf',
        note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: '2017-12-18T02:09:54.486Z'
      },
      {
        id: 123123,
        name: '11.png',
        note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: '2017-12-18T02:09:54.486Z'
      },
      {
        id: 123123,
        name: '12.png',
        note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: '2017-12-18T02:09:54.486Z'
      },
      {
        id: 123123,
        name: '13.png',
        note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: '2017-12-18T02:09:54.486Z'
      },
      {
        id: 123123,
        name: '14.png',
        note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: '2017-12-18T02:09:54.486Z'
      },
      {
        id: 123123,
        name: '15.png',
        note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: '2017-12-18T02:09:54.486Z'
      },
      {
        id: 123123,
        name: '16.png',
        note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: '2017-12-18T02:09:54.486Z'
      },
      {
        id: 123123,
        name: '17.png',
        note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: '2017-12-18T02:09:54.486Z'
      },
      {
        id: 123123,
        name: '18.png',
        note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: '2017-12-18T02:09:54.486Z'
      },
      {
        id: 123123,
        name: '19.mp3',
        note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: '2017-12-18T02:09:54.486Z'
      },
      {
        id: 123123,
        name: '20.mp3',
        note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: '2017-12-18T02:09:54.486Z'
      }
    ],
    recent_appoinments: [
      {
        id: 321321,
        date: '2017-09-26 15:00',
        services: [
          {
            id: 159159,
            name: 'manicure',
            price: 100,
              color: 'red',
            duration: 120
          },
          {
            id: 756756,
            name: 'hair coloring',
            price: 150,
              color: 'blue',
            duration: 45
          }
        ]
      },
      {
        id: 456465,
        date: '2017-09-27 19:00',
        services: [
          {
            id: 778954,
            name: 'visit',
              color: 'green',
            price: 4100,
            duration: 120
          }
        ]
      },
      {
        id: 456465,
        date: '2017-09-28 18:00',
        services: [
          {
            id: 778954,
            name: 'chemistry',
              color: 'red',
            price: 1200,
            duration: 120
          }
        ]
      },
      {
        id: 456465,
        date: '2017-09-23 18:00',
        services: [
          {
            id: 778954,
            name: 'chemistry',
              color: 'green',
            price: 10,
            duration: 120
          }
        ]
      },
      {
        id: 456465,
        date: '2018-01-01 18:00',
        services: [
          {
            id: 778954,
            name: 'chemistry',
              color: 'green',
            price: 1200,
            duration: 120
          }
        ]
      },
      {
        id: 456465,
        date: '2017-09-11 18:00',
        services: [
          {
            id: 778954,
            name: 'manicure',
              color: 'green',
            price: 700,
            duration: 120
          }
        ]
      },
      {
        id: 456465,
        date: '2016-07-21 18:00',
        services: [
          {
            id: 778954,
            name: 'hair coloring',
              color: 'green',
            price: 600,
            duration: 120
          }
        ]
      },
      {
        id: 456465,
        date: '2010-07-21 18:00',
        services: [
          {
            id: 778954,
            name: 'facial treatment',
              color: 'green',
            price: 400,
            duration: 120
          },
          {
            id: 778954,
            name: 'laser hair 3 treatments',
              color: 'blue',
            price: 500,
            duration: 120
          },
          {
            id: 778954,
            name: 'laser hair 3 treatments',
              color: 'red',
            price: 100,
            duration: 120
          }
        ]
      }
    ]
  }
}
