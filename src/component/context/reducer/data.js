const dataBase = [{
  userName: 'kien',
  password: 'kien1234',
  todos: [
    {

      id: Math.floor(Math.random() * 10000) + 1,
      todo: "Do something nice for someone I care about",
      date: '25/07/2022',
      time: '10:12',
      isCompleted: false,
      isEdit: false,
      isHover: false,
      isRemoved: false,
      isTarget: false,
      addOn: [
        {
          idc: Math.floor(Math.random() * 10000) + 1,
          todoChild: "Watch a classic movie",
          date: '25/07/2022',
          time: '10:12',
          isCompleted: false,
          isEdit: false,
          isHover: false,
          isRemoved: false,
          isTarget: false,
        },
        {
          idc: Math.floor(Math.random() * 10000) + 1,
          todoChild: "Go see a Broadway production",
          date: '25/07/2022',
          time: '10:15',
          isCompleted: false,
          isEdit: false,
          isHover: false,
          isRemoved: false,
          isTarget: false,
        }
      ]

    }, {
      id: Math.floor(Math.random() * 10000) + 1,
      todo: "Write a thank you letter to an influential person in my life",
      date: '20/07/2022',
      time: '18:12',
      isCompleted: false,
      isEdit: false,
      isHover: false,
      isRemoved: false,
      isTarget: false,
      addOn: [
        {
          idc: Math.floor(Math.random() * 10000) + 1,
          todoChild: "Organize pantry",
          date: '27/07/2022',
          time: '22:12',
          isCompleted: false,
          isEdit: false,
          isHover: false,
          isRemoved: false,
          isTarget: false,
        },
        {
          idc: Math.floor(Math.random() * 10000) + 1,
          todoChild: "Draw and color a Mandala",
          date: '27/07/2022',
          time: '00:15',
          isCompleted: false,
          isEdit: false,
          isHover: false,
          isRemoved: false,
          isTarget: false,
        }
      ]

    }
  ],
  columns: {
    'column-1' :{
      id:'column-1',
      title: 'Doing',
    },
    'column-2' :{
      id:'column-1',
      title: 'Done',
    },
    'column-3' :{
      id:'column-1',
      title: 'Removed',
    },
    columnOrder: ['column-1', 'column-2', 'column-3'],
  }
}, {
  userName: 'lien',
  password: 'lien1234',
  todos: [
    {
      id: Math.floor(Math.random() * 10000) + 1,
      todo: "Create a cookbook with favorite recipes",
      date: '25/07/2022',
      time: '10:12',
      isCompleted: false,
      isEdit: false,
      isHover: false,
      isRemoved: false,
      isTarget: false,
      addOn: [
        {
          idc: Math.floor(Math.random() * 10000) + 1,
          todoChild: "Take a class at local community center that interests you",
          date: '25/07/2022',
          time: '10:12',
          isCompleted: false,
          isEdit: false,
          isHover: false,
          isRemoved: false,
          isTarget: false,
        },
        {
          idc: Math.floor(Math.random() * 10000) + 1,
          todoChild: "Plan a trip to another country",
          date: '25/07/2022',
          time: '10:15',
          isCompleted: false,
          isEdit: false,
          isHover: false,
          isRemoved: false,
          isTarget: false,
        }
      ]

    },
    {
      id: Math.floor(Math.random() * 10000) + 1,
      todo: "Have a photo session with some friends",
      date: '21/07/2022',
      time: '18:12',
      isCompleted: false,
      isEdit: false,
      isHover: false,
      isRemoved: false,
      isTarget: false,
      addOn: [
        {
          idc: Math.floor(Math.random() * 10000) + 1,
          todoChild: "Take cat on a walk",
          date: '27/05/2022',
          time: '22:12',
          isCompleted: false,
          isEdit: false,
          isHover: false,
          isRemoved: false,
          isTarget: false,
        },
        {
          idc: Math.floor(Math.random() * 10000) + 1,
          todoChild: "Take a hike at a local park",
          date: '27/06/2022',
          time: '00:15',
          isCompleted: false,
          isEdit: false,
          isHover: false,
          isRemoved: false,
          isTarget: false,
        }
      ]

    }
  ]
}
]

const getData = () => dataBase;
export default getData;