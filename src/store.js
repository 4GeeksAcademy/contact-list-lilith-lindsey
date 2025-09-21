export const initialStore = () => {
  return {
    fName: "Lilith",
    lName: "Lindsey",
    baseUrl: "https://playground.4geeks.com/contact/",
    contactInfo: {
      name: "user6",
      phone: "phone6",
      email: "email6",
      address: "address6",
    },
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "set-fName":
      return {
        ...store,
        fName: action.payload,
      };

    case "set-lName":
      return {
        ...store,
        lName: action.payload,
      };

    case "update-contact":
      return {
        ...store,
        contactInfo: {
          ...store.contactInfo,
          ...action.payload, // only overwrite provided fields
        },
      };

    default:
      return store;
  }
}

  // switch(action.type){
  //   case 'add_task':

  //     const { id,  color } = action.payload

  //     return {
  //       ...store,
  //       todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
  //     };
  //   default:
  //     throw Error('Unknown action.');
  // }    
// }
