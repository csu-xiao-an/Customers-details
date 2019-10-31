var config = {
  isRTL: false,
  baseUrl: '/en/clients/{client_id}',
  interval_days: 28,
  min_data_length: 300,
  in_future: 60,
  max_services_shown_without_cat: 15,
  notes_height_limit: 5,
  def_count_of_uses: 10,
  default_value_of_discount: 10,
  increment_by: 10,
  decrement_by: 10,
  locale: 'en',
  language: 'en',
  user: {
    // admin, senior, junior, readonly, untrusted
    business_logo: 'public/business_data/1/logo.jpg',
    business_name: 'Beauty and cosmetics salons',
    business_address: '11301 West Olympic Boulevard, Apt.100',
    permission_level: 'admin',
    business_id: 123,
    worker_id: 1
  },
  // plugins_list: [],
  plugins_list: ['multiple_workers', 'gallery', 'debts', 'punch_cards', 'colors_beautech', 'notes'],
  menu: [
    {text: 'calendar', link: '/en/calendar', icon: 'calendar.jpg'},
    {text: 'clients_list', link: '/en/clients_list', icon: 'clients_list.jpg'},
    {text: 'reminders', link: '/en/reminders', icon: 'reminders.jpg'},
    {text: 'groups', link: '/en/groups', icon: 'groups.jpg'},
    {text: 'services', link: '/en/services', icon: 'services.jpg'},
    {text: 'support', link: '/en/support', icon: 'support.jpg'},
    {text: 'suggest_feature', link: '/en/suggest_feature', icon: 'suggest_feature.jpg'},
    {text: 'rate_us', link: '/en/rate_us', icon: 'rate_us.jpg'},
    {text: 'logout', link: '/e n/logout', icon: 'logout.jpg'}
  ],
  translations: {
    menu: {
      calendar: 'Calendar',
      clients_list: 'Clients list',
      reminders: 'Reminders',
      groups: 'Groups',
      services: 'Services',
      support: 'Support',
      suggest_feature: 'Suggest a feature',
      rate_us: 'Rate us',
      logout: 'Log out'
    },
    hot_links: {
      timeline: 'Timeline',
      notes: 'Notes',
      colors_beautech: 'Hair Dyeing',
      debts: 'Debts',
      gallery: 'Gallery',
      punch_cards: 'Punch cards',
      add_first_punch_card: 'Add a first punch card',
      add_first_note: 'Add a first note',
      add_first_debt: 'Add a first debt',
      add_first_item_gallery: 'Add a first item in gallery',
      add_first_event: 'Add a first appointment'
    },
    colors_beautech: {
      date: 'date',
      colors: 'Colors',
      brand: 'Brand:',
      series: 'Series:',
      color: 'Color:',
      quantity: 'Quantity:',
      comments: 'Comments:',
      oxygen: 'Oxygen',
      concentration: 'Concentration:',
      percentage: '%',
      waiting_time: 'Waiting time:',
      back: 'Back',
      next: 'Next'
    },
    punch_cards: {
      expiration_label: { // Expiry date 31/07/2019 within 69 days
        expiry_date: 'Expiry date',
        within: 'within',
        days: 'days'
      },
      preview_invalid_label: {
        expired: 'Expired',
        used: 'Used'
      },
      used_count_label: { // Used: 8 of 10
        used: 'Used: ',
        of: 'of'
      },
      procedures_list: {
        title: 'New Punch Card',
        choose_service: 'Choose service ',
        search_service: 'Please enter a service',
        duration_minutes: 'mm'
      },
      use_del_popup: {
        card_del_question: 'Are you sure you want to delete this punch card ?',
        use_del_question: 'Are you sure you want to delete the latest use?',
        confirm: 'Confirm',
        cancel: 'Cancel'
      },
      unprocessable_del_popup: {
        notification: 'Punch card is used, we cannot delete it without affecting the history',
        confirm: 'ok'
      },
      expiration_popup: {
        notification: 'Pls set an expiration date in future',
        confirm: 'I got it'
      },
      punch_card_created: '{name}. Punch was created, {count} uses',
      punch_card_used: '{name}. Punch was used {countCur} / {count} uses',
      punch_card_canceled: '{name}. Punch was canceled',
      top_title: 'Punch cards ({punch_cards_count})',
      empty_punch_cards: 'Add a new punch-card',
      select_punch_card: 'Select a punch-card',
      used_punch_card_btn: 'No more uses',
      add_expiry_date: 'Add expiry date',
      number_of_uses: 'Number of uses:',
      use_btn_label_expired: 'Expired',
      add_new_punch_card_btn: 'Next',
      cancel_new_punch_card_btn: 'Cancel',
      type_discount: 'Type discount',
      price_single: 'Cost at once:',
      add_discount: 'Add discount',
      delete_btn_label: 'Delete',
      use_btn_label: 'Use',
      total: 'Total cost:',
      days_left: ' in {days} days ',
      days_ago: '{days} days ago',
      ends: 'Ends'
    },
    media: {
      title: 'Gallery',
      files: 'Files',
      media_delete: 'Delete',
      share_title: 'Web Fundamentals',
      share_text: 'Check out Web Fundamentals — it rocks!',
      add_media: 'Add New File',
      confirm_del_media: 'Are you sure to delete this file?',
      confirm_del_media_multiple: 'Are you sure to delete these files?',
      cancel_media: 'Cancel',
      confirm_del: 'Confirm'
    },
    media_modal: {
      add_note: 'Add note',
      save: 'Save',
      confirm_del_media: 'Are you sure to delete this file?',
      cancel: 'Cancel',
      confirm_del: 'Confirm'
    },
    gallery_popup: {
      title: 'Gallery',
      add_caption: 'Add a caption...',
      submit: 'Submit'
    },
    personal_info_editing: {
      title: 'You will can`t find a customer without customer name in the customer list. Please enter customer name',
      agree: 'Got it!',
      title_incorrect_mail: 'Email address {email} is not correct',
      title_incorrect_phone: 'Phone number {phone_number} is not correct',
      not_found_title: 'Phone number is not filled. Reminders or notifications won\'t be sent to this client',
      skip: 'Skip',
      save: 'Save',
      enter_phone_number: 'Do you want to enter a phone number?',
      phone_number: 'type client\'s phone number',
      add_phone_number: 'Add phone number'
    },
    personal_info: {
      title: 'Personal Info',
      edit_label_btn: 'Edit',
      back_label_btn: 'Back',
      done_label_btn: 'Done',
      name_label: 'Name',
      name_label_error: '*Please, enter your name',
      empty_name_label: 'Add name',
      phone_label: 'Phone',
      phone_label_error: '*Please, enter your phone number',
      empty_phone_label: 'Add phone number',
      email_lable: 'Email',
      empty_email_label: 'Add an email',
      address_lable: 'Address',
      empty_address_label: 'Add an address',
      gender_label: 'Gender',
      gender: {
        male: 'Male',
        female: 'Female',
        select_gender: 'Select gender'
      },
      birthday_label: 'Birthday',
      add_birth_label: 'Add Birthdate',
      send_link: {
        sent_label: 'Sent',
        title: 'Send a link to the customer'
      }
    },
    hero: {
      status_label: 'Status',
      status_placeholder: 'Pls enter a client status',
      vip_lable: 'VIP',
      favorites_label: 'Added to favorites',
      favorites_label_left: 'The client was removed from VIP group'

    },
    birthdate_info: {
      birthdate_was_ago: 'was {count} days ago',
      birthdate_in_days: 'in {count} days',
      years_old: '{count} years old'
    },
    notes: {
      title: 'Notes',
      subtitle: 'Description',
      reminder_date_label: 'Reminder date:',
      left_to_reminder_day: 'Time left:',
      back_label_btn: 'Back',
      in_label: 'In',
      del_btn: 'Delete',
      success_btn: 'success',
      placeholder: 'Description',
      reminder_label: 'Set a reminder',
      add_note_label: 'Add Note'
    },
    debts: {
      title: 'Debts',
      edit_sum_title: 'Debt:',
      subtitle: 'Description',
      back_label_btn: 'Back',
      del_btn: 'Delete',
      success_btn: 'success',
      add_debt_label: 'Add New Debt',
      placeholder: 'Description of debt'
    },
    appointments: {
      summary_label: 'summary',
      title: 'Closest Queue',
      add_new_lable: 'Add New Queue'
    },
    timeline: {
      registration_date: 'The user was registered in: {registration_date}',
      appointment: {
        note_label: 'Note:',
        location_label: 'Address:',
        appointment_created: 'Ordered in: ',
        canceled_lable: 'canceled',
        employer_label: 'Employer:',
        procedures_label: 'Procedures:'
      },
      debts: {
        debt_add: 'The debt is add: {time}',
        debt_edited: 'The debt is edited: {time}',
        debt_closed: 'The debt is closed: {time}'
      },
      filter_btn: {
        debts_btn: 'Debts',
        note_btn: 'Notes',
        sms_btn: 'Sms',
        queues_btn: 'Queues',
        punch_cards_btn: 'Punch_cards',
        gallery_btn: 'Gallery'
      }
    },
    del_сustomer_popup: {
      question: 'Are you sure to delete the client {client_name}',
      cancel: 'No',
      confirm: 'Yes'
    },
    agreement: {
      agreement_label: 'Agreement to send advertising'
    },
    social_network: {
      title: 'Social Links',
      save_label_btn: 'Save',
      add_link_lable: 'Add New Link',
      url_label: 'Url'
    },
    groups: {
      title: 'Groups',
      add_group_lable: 'Add New Group'
    },
    signature: {
      added_label: 'Signature added successfully',
      permitted: 'The client have permitted sending ads',
      not_permitted: 'The client haven`t permitted sending ads',
      save_btn: 'Save signature',
      cancel_btn: 'Clear',
      delete_btn: 'Remove',
      edit_btn: 'Change'
    },
    client_page_btn: {
      show_more_fields: 'Show All Fields',
      delete_customer: 'Delete customer'
    },
    datepicker: {
      placeholder: {
        year: 'Year',
        month: 'Month',
        day: 'Day'
      }
    },
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
      {value: 'days', label: 'Days'},
      {value: 'hours', label: 'Hours'},
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
      {value: 'facebook', label: 'Facebook'},
      {value: 'instagram', label: 'Instagram'},
      {value: 'linkedin', label: 'LinkedIn'},
      {value: 'twitter', label: 'Twitter'},
      {value: 'pinterest', label: 'Pinterest'},
      {value: 'google', label: 'Google'},
      {value: 'vk', label: 'VK'},
      {value: 'website', label: 'Website'}
    ]
  },
  urls: {
    add_address: `https://api.bewebmaster.co.il/settings/maps-api-key?token=${token}`,
    error_page: 'https://api.bewebmaster.co.il/error_page',
    vanilla_sharing: 'https://unpkg.com/vanilla-sharing',
    address: 'https://maps.googleapis.com/maps/api/geocode/json?address={query}&language={language}',
    preview_pdf: 'https://docs.google.com/viewer?url={url}embedded=true',
    timeline_events: '/customers-details/clients/123/timeline/{event}?start={ds}&end={de}',
    get_punch_cards_list: '/customers-details/clients/{client_id}/punch_cards',
    multi_del_url: '/customers-details/clients/{client_id}/media/{media_ids}',
    media_del: '/customers-details/clients/{client_id}/media/{media_id}',
    punch_cards_req: '/customers-details/clients/{client_id}/punch_cards',
    punch_card_del: '/customers-details/clients/{client_id}/punch_cards/{punch_card_id}/use/{use_id}',
    signature: '/customers-details/clients/{client_id}/signature',
    gallery_sharing_base_url: 'https://api.bewebmaster.co.il',
    media_url: '/customers-details/clients/{client_id}/media',
    fill: '/send-filling-up',
    client_page_url: '/clients/{id}',
    waze: 'https://waze.com/ul?q={address}',
    google_maps: 'https://maps.google.com/?q=',
    social: '/customers-details/clients/{client_id}/social',
    notes: '/customers-details/clients/{client_id}/notes',
    debt: '/customers-details/clients/{client_id}/debt',
    clients: '/customers-details/clients/{client_id}',
    add_client_url: '/add-client/clients?q={query}',
    punch_cards_adding: '/punch_cards/adding',
    calendar_link: '/calendar/',
    note_with_reminder: '/reminders/',
    appointment: '/creating-appointment/',
    main: 'https://api.bewebmaster.co.il',
    worker_img: '/worker/{worker_profile_img}',
    punch_cards_get: '/catalog/services',
    single_punch: '/punch_cards/{punch_card_id}',
    // colors_beautech: '/colors_beautech',
    colors_beautech: '/colors_beautech',
    groups_img: './dist/media/groups/',
    groups_img_default: 'default.svg',
    soc_net: './dist/media/soc_net/',
    recommended_by: 'recommended_by',
    defaultClientImg: 'default.jpg',
    defaultPathToClientImg: './dist/media/',
    referrer_patern: /(clients)\/\d+/,
    gallery: './dist/media/galery/',
    url_pdf: '/public/',
    client_data: './dist/clients/',
    customers_list: '/en/clients',
    punch_cards: '/punch_cards',
    menu_icons: 'dist/menu/',
    isFavorite: 'isFavorite',
    media: './dist/media/',
    timeline: '/timeline',
    groups: '/groups/',
    login: '/en/login',
    source: 'source',
    gender: 'gender',
    phone: 'phone',
    email: 'email',
    home: '/'
  },
  data: {
    id: 123123,
    name: 'Ahuva Ben Shushan',
    birthdate: '07-04',
    birthyear: '1994',
    registration_date: '2018-12-15',
    email: 'ahuva.ben.shushan@gmail.com',
    address: 'בת ים, ויצמן, 18',
    intent_x: 50.4016991,
    intent_y: 30.2525126,
    // phone: [],
    phone: ['9379992'],
    isFavorite: false,
    details_link_active: false,
    permit_ads: false,
    signature: './dist/media/autograph.png',
    status: 'The re is something about ZHU',
    profile_image: '24.jpg',
    // source: 'ads',
    gender: 'male',
    currency: '₪',
    debt_step: 10,
    max_side: 1000,
    reminders_default_period_amount: 1,
    reminders_default_date_period: 'Days',
    timeout: 500,
    hot_links: [
      {name: 'timeline', img: '/dist/media/ic_timeline.svg', url: '/timeline'},
      {name: 'punch_cards', img: '/dist/media/notes.svg', url: '/punch_cards', plugin_name: 'punch_cards'},
      {name: 'gallery', img: '/dist/media/icon_delete_selected.svg', url: '#gallery', plugin_name: 'gallery'},
      {name: 'notes', img: '/dist/media/edit.png', url: '#notes'},
      {name: 'debts', img: '/dist/media/ic_debts.svg', url: '#debts', plugin_name: 'debts'},
      {name: 'appointments', img: '', url: ''},
      {name: 'colors_beautech', img: '/dist/media/ic_hair_d.svg', url: '/colors_beautech', plugin_name: 'colors_beautech'},
    ],
    debts: [
      {
        id: 1,
        sum: 20,
        desc: 'did not pay for a month',
        date: '2015-07-07 13:20'
      },
      {
        id: 2,
        sum: 22,
        desc: 'did not pay for a month',
        date: '2016-07-07 13:01'
      },
      {
        id: 3,
        sum: 20,
        desc: 'did not pay for a month',
        date: '2017-07-07 13:01'
      }
    ],
    notes: [
      {
        id: 18,
        text: `New Notesdededed
        qdwedewedwedewd
        qewdewdewdewdew
        wedewdewd
        wedwedewd`,
        date: '2017-11-29T03:58:49'
      },
      {
        id: 56,
        text: `New Notesdededed
        qdwedewedwedewdц 
        цццццццц цццццццц ццц ццц ц ццц`,
        date: '2017-10-29T03:58:49.129Z',
        reminder_date: '2019-10-14T23:58:49'
      }
    ],
    groups: [
      {
        id: 1,
        name: 'Birthday',
        amount: '723',
        image_path: 'ic_birth.svg'
      },
      {
        id: 2,
        name: 'VIP',
        amount: '17',
        image_path: 'ic_vip.svg'
      },
      {
        id: 3,
        name: 'Debitores',
        amount: '3',
        image_path: 'ic_debitores.svg'
      }
    ],
    soc_media: [
      {
        id: 1,
        type: 'facebook',
        name: 'Ahuva Ben Shushan',
        url: 'https://www.facebook.com/bewebmaster/'
      },
      {
        id: 2,
        type: 'instagram',
        name: '@ahuva',
        url: 'https://www.instagram.com/bewebmaster/'
      },
      {
        id: 3,
        type: 'linkedin',
        name: 'Ahuva Ben Shushan',
        url: 'https://www.linkedin.com/bewebmaster/'
      },
      {
        id: 4,
        type: 'twitter',
        name: 'Ahuva Ben Shushan',
        url: 'https://www.twitter.com/bewebmaster/'
      },
      {
        id: 5,
        type: 'pinterest',
        name: 'Ahuva Ben Shushan',
        url: 'https://www.pinterest.com/bewebmaster/'
      },
      {
        id: 6,
        type: 'vk',
        name: 'Ahuva Ben Shushan',
        url: 'https://www.vk.com/bewebmaster/'
      }
    ],
    gallery: [
      {
        id: 1,
        name: 'ras.docx',
        note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: '2017-12-18T02:09:54.486Z'
      },
      {
        id: 22,
        name: 'witcher.pdf',
        // note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: '2017-12-18T02:09:54.486Z'
      },
      {
        id: 2,
        name: '02.png',
        note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: '2017-12-18T02:09:54.486Z'
      },
      {
        id: 3,
        name: '03.png',
        // note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: '2017-12-18T02:09:54.486Z'
      },
      {
        id: 33,
        name: '04.png',
        note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: '2017-12-18T02:09:54.486Z'
      },
      {
        id: 4,
        name: '05.png',
        note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: '2017-12-18T02:09:54.486Z'
      },
      {
        id: 5,
        name: '06.png',
        note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: '2017-12-18T02:09:54.486Z'
      },
      {
        id: 6,
        name: '07.png',
        note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: '2017-12-18T02:09:54.486Z'
      },
      {
        id: 7,
        name: '08.png',
        note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: '2017-12-18T02:09:54.486Z'
      },
      {
        id: 8,
        name: 'video.mp4',
        note: 'Lorem tur adipisicing elit',
        date: '2017-12-18T02:09:54.486Z'
      },
      // {
      //   id: 9,
      //   name: '09.png',
      //   note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      //   date: '2017-12-18T02:09:54.486Z'
      // },
      // {
      //   id: 10,
      //   name: '10.png',
      //   note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      //   date: '2017-12-18T02:09:54.486Z'
      // },
      // {
      //   id: 11,
      //   name: 'document.pdf',
      //   note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      //   date: '2017-12-18T02:09:54.486Z'
      // },
      // {
      //   id: 12,
      //   name: '11.png',
      //   note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      //   date: '2017-12-18T02:09:54.486Z'
      // },
      // {
      //   id: 13,
      //   name: '12.png',
      //   note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      //   date: '2017-12-18T02:09:54.486Z'
      // },
      // {
      //   id: 14,
      //   name: '13.png',
      //   note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      //   date: '2017-12-18T02:09:54.486Z'
      // },
      // {
      //   id: 15,
      //   name: '14.png',
      //   note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      //   date: '2017-12-18T02:09:54.486Z'
      // },
      // {
      //   id: 16,
      //   name: '15.png',
      //   note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      //   date: '2017-12-18T02:09:54.486Z'
      // },
      // {
      //   id: 17,
      //   name: '16.png',
      //   note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      //   date: '2017-12-18T02:09:54.486Z'
      // },
      // {
      //   id: 18,
      //   name: '17.png',
      //   note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      //   date: '2017-12-18T02:09:54.486Z'
      // },
      // {
      //   id: 19,
      //   name: '18.png',
      //   note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      //   date: '2017-12-18T02:09:54.486Z'
      // },
      // {
      //   id: 20,
      //   name: '19.mp3',
      //   note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      //   date: '2017-12-18T02:09:54.486Z'
      // },
      {
        id: 21,
        name: '20.mp3',
        note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: '2017-12-18T02:09:54.486Z'
      }
    ],
    // recent_appointments
    recent_appointments: [
      {
        id: 321321,
        start: '2019-09-01 15:00',
        end: '2019-09-01 19:00',
        total_price: '250',
        worker_id: 1,
        services: [
          {
            id: 159159,
            name: 'manicure',
            color: 'red'
          },
          {
            id: 756756,
            name: 'hair coloring',
            color: 'blue'
          }
        ]
      },
      {
        id: 456465,
        start: '2019-09-02 15:00',
        end: '2019-09-02 15:30',
        total_price: '4100',
        worker_id: 1,
        services: [
          {
            id: 778954,
            name: 'visit',
            color: 'green'
          }
        ]
      },
      {
        id: 456465,
        start: '2020-01-01 15:00',
        end: '2020-01-01 15:30',
        total_price: '1200',
        worker_id: 1,
        services: [
          {
            id: 778954,
            name: 'chemistry',
            color: 'red'
          }
        ]
      },
      {
        id: 456465,
        start: '2025-01-02 15:00',
        end: '2025-01-02 15:30',
        total_price: '10',
        worker_id: 1,
        services: [
          {
            id: 778954,
            name: 'chemistry',
            color: 'green'
          }
        ]
      },
      {
        id: 456465,
        start: '2025-01-03 15:00',
        end: '2025-01-03 15:30',
        total_price: '1200',
        worker_id: 1,
        services: [
          {
            id: 778954,
            name: 'chemistry',
            color: 'green'
          }
        ]
      },
      {
        id: 456465,
        start: '2025-01-04 15:00',
        end: '2025-01-04 15:30',
        total_price: '700',
        worker_id: 1,
        services: [
          {
            id: 778954,
            name: 'manicure',
            color: 'green'
          }
        ]
      },
      {
        id: 456465,
        start: '2025-01-05 15:00',
        end: '2025-01-05 15:30',
        total_price: '600',
        worker_id: 1,
        services: [
          {
            id: 778954,
            name: 'hair coloring',
            color: 'green'
          }
        ]
      },
      {
        id: 456465,
        start: '2025-01-06 15:00',
        end: '2025-01-06 15:30',
        total_price: '600',
        worker_id: 1,
        services: [
          {
            id: 778954,
            name: 'hair coloring',
            color: 'green'
          }
        ]
      },
      {
        id: 456465,
        start: '2025-01-07 15:00',
        end: '2025-01-07 15:30',
        total_price: '1000',
        worker_id: 1,
        services: [
          {
            id: 778954,
            name: 'facial treatment',
            color: 'green'
          },
          {
            id: 778954,
            name: 'laser hair 3 treatments',
            color: 'blue'
          },
          {
            id: 778954,
            name: 'laser hair 3 treatments',
            color: 'red'
          }
        ]
      }
    ],
    colors_beautech: [
      {
        id: 139,
        type: 'Highlights',
        company: 'WELLA SP',
        series: 'ILLUMINA',
        date: '2018-09-28',
        comments: 'The client loved the color much, not to change the formula!',
        waiting_time: 'usually 35 minutes',
        colors: [{
          id: 2022,
          color: '4',
          dosing: '15g',
          comments: 'not too much'
        },
        {
          id: 2023,
          color: '5/7',
          dosing: '45g'
        }
        ],
        oxy: [{
          percent: '9%',
          dosing: '1-1'
        },
        {
          percent: '6%'
        }
        ]
      },
      {
        id: 139139,
        type: 'Highlights',
        company: 'BELLA FLEX',
        series: 'ILLUMINATE',
        date: '2019-12-15',
        comments: 'The client loved whiskey',
        waiting_time: 'usually 1 hour',
        colors: [{
          id: 20222,
          color: '5',
          dosing: '15g',
          comments: 'not too much'
        },
        {
          id: 20232,
          color: '5/7',
          dosing: '55g'
        },
        {
          id: 202324,
          color: '5/7/20',
          dosing: '1kg',
          comments: 'crazy'
        }
        ],
        oxy: [{
          percent: '10%',
          dosing: '1-1'
        },
        {
          percent: '9%',
          dosing: '2-1'
        }
        ]
      },
      {
        id: 13,
        type: 'Highlights',
        company: 'FLEX',
        series: 'ILLUMINATE',
        date: '2018-11-12',
        comments: 'The client',
        waiting_time: 'usually 1.5 hour',
        colors: [{
          id: 22,
          color: '58',
          dosing: '1kg',
          comments: 'too much'
        },
        {
          id: 32,
          color: '5/7/1',
          dosing: '0.5kg'
        },
        {
          id: 24,
          color: '5/7/20/1',
          dosing: '11kg',
          comments: 'mad'
        }
        ],
        oxy: [{
          percent: '100%',
          dosing: '1'
        },
        {
          percent: '99%',
          dosing: '2-1'
        }
        ]
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
    ]
  }
}
