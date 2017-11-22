export default Component => {
  const rights = {
    isPhone: false,
    isEmail: false,
    hero: {
      isFavorite: false,
      status: false
    },
    hot_links: {
      external: true,
      internal: true
    },
    phone: {
      send_sms: false,
      call: false,
      edit: false,
      add: false
    },
    email: {
      email: false,
      edit: false,
      add: false
    },
    details: {
      send: false
    },
    signature: {
      remove: false,
      change: false,
      ads: false
    },
    depts: {
      delete: false,
      edit: false,
      add: false
    },
    notes: {
      delete: false,
      edit: false,
      add: false
    },
    gallery: {
      open: false,
      add: false
    },
    source: {
      add: false,
      save: false,
      select: false
    },
    soc_links: {
      delete: false,
      edit: false,
      add: false
    },
    gender: {
      edit: false
    },
    birthdate: {
      edit: false
    },
    more_fields: {
      isVisible: false
    }
  }
  const AccessRights = props => {
    const admin = {
      ...rights,
      isPhone: true,
      isEmail: true,
      hero: {
        isFavorite: true,
        status: true
      },
      phone: {
        send_sms: true,
        call: true,
        edit: true,
        add: true
      },
      email: {
        send_email: true,
        edit: true,
        add: true
      },
      details: {
        send: true
      },
      signature: {
        remove: true,
        change: true,
        ads: true
      },
      depts: {
        delete: true,
        edit: true,
        add: true
      },
      notes: {
        delete: true,
        edit: true,
        add: true
      },
      source: {
        add: true,
        save: true,
        select: true
      },
      soc_links: {
        delete: true,
        edit: true,
        add: true
      },
      gender: {
        edit: true
      },
      birthdate: {
        edit: true
      },
      more_fields: {
        isVisible: true
      }
    }
    const readonly = {
      ...rights,
      isPhone: true,
      isEmail: true
    }
    const rightsObj = {
      untrusted: rights,
      senior: admin,
      junior: admin,
      readonly,
      admin
    }
    const res = rightsObj[config.user.permission_level] || rights
    return <Component rights={res} {...props} />
  }
  AccessRights.displayName = `AccessRights(${Component.displayName || Component.name || 'Component'})`
  return AccessRights
}
