export const user = {
  data: {
    data: {
      id: 1,
      name: "John Doe",
      email: "user@email.ext",
      avatar: "",
      isAdmin: true,
      role_id: 1
    }
  }
}

export const incompleteUser = {
  data: {
    data: {
      id: 1,
      name: "",
      email: "user@email.ext",
      avatar: "",
      isAdmin: false,
      role_id: 2
    }
  }
}

export const menu = {
  data: [
    {
      "id": 1,
      "title": "Dashboard",
      "path": "dashboard",
      "icon": "dashboard.svg",
      "sort": 1,
      "menu_id": null,
      "children_menus": []
    }, {
      "id": 2,
      "title": "Billeteras",
      "path": "wallets/ARG",
	  "icon": "users.svg",
      "sort": 2,
      "menu_id": null,
	  "children_menus": []
    }, {
      "id": 3,
      "title": "Registrar",
      "path": "#",
      "icon": "printer",
      "sort": 1,
      "menu_id": null,
      "children_menus": [
        {
          "id": 6,
          "title": "Verificación",
          "path": "basic-verification",
          "icon": "users.svg",
          "sort": 1,
          "menu_id": 3,
          "children_menus": []
        }
      ]
    } 
  ]
}

export const availableBalance = {
  data: {
    data: {      
      currencies: [
        { name: "Peso Argentino", symbol: "$", amount: "0,00" },
        { name: "Peso Chileno", symbol: "$", amount: "0" },
        { name: "Peso Colombiano", symbol: "$", amount: "0" },
        { name: "Sol Peruano", symbol: "S/", amount: "0,00" }    
      ],
      cryptoCurrencies: [
        { name: "Bitcoin Cash", symbol: "𝔹", amount:"0,00000000" },
        { name: "Bitcoin", symbol: "₿", amount:"0,00000000" },
        { name: "Ether", symbol: "Ξ", amount:"0,00000000" },
        { name: "Litecoin", symbol: "Ł", amount:"0,00000000" },
        { name: "USD Coin", symbol: "$", amount:"$0,00" }
      ]      
    }
  }
}

export const termsAndConditions = {
  data: {
    termsAndConditions: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32."
  }
}

export const privacyPolicies = {
  data: {
    privacyPolicies: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
  }
}
