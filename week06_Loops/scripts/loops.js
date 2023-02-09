let medications = {
    "Lactated Ringers": {
      id: "13ab7",
      amount: 100,
      amountType: "L",
      expDate: "12/30/2029",
    },
    Levothyroxine: {
      id: "at342",
      amount: 2000,
      amountType: "ct",
      expDate: "03/18/2021",
    },
    Rosuvastatin: {
      id: "gr5423",
      amount: 1500,
      amountType: "ct",
      expDate: "09/01/2020",
    },
    Albuterol: {
      id: "iuy6532",
      amount: 1325,
      amountType: "ct",
      expDate: "01/01/2023",
    },
    Esomeprazole: {
      id: "mnb78932",
      amount: 23145,
      amountType: "ct",
      expDate: "10/01/2021",
    },
  };

  // sample for "IN" loop 

  let aMedications = medications["Lactated Ringers"];
  for (nam in aMedications) {
    console.log(aMedications[nam]);
  }

  // sample for "OF" loop 

  let ages = [3, 5, -1];
  for (anAge of ages) {
    console.log(anAge);
  }

  // ITS NOT THE BEST WAY BUT WE NEED TO LEARN ANYWAY

//   for(let i = 1, i <=10, i++){
// 	console.log(i)
//   }

// this way ist equal at the python program overall

let total = 0;
while (total < 10) {
  console.log(total);
  total++;
}