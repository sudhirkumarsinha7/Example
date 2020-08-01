const user={
    registerationForm :{
    userName: {
      displayName: 'Name',
      stateName: 'name',
      type: 'String',
      required: true,
      maxLength: 32
    },
    mob: {
      displayName: 'Mob:',
      stateName: 'mob',
      type: 'String',
      required: true,
      maxLength: 10
    },
    role: {
      displayName: 'Role',
      stateName: 'role',
      type: 'dropdown',
      isDropdownStatic: true,
    },
    address: {
      displayName: 'Adress',
      stateName: 'address',
      type: 'String',
      required: true,
      maxLength: 32
    },
    buttons: {
      type: 'buttons',
      leftButton: {
        displayName: 'Cancel',
        buttonStyles: {
          block: true,
          light: true
        }
      },
      rightButton: {
        displayName: 'Register',
        buttonStyles: {
          block: true,
          info: true
        }
      }
    }
    }

}
export {
    user
}