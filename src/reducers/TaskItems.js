export default function reduce(state = [], action) {
  return [
    {
      id: (Math.random() * 100).toFixed(0),
      status: 'WIP',
      category: 'Chores',
      title: 'Buy dog food',
      details: 'gotta make my woof woof happy'
    },
    {
      id: (Math.random() * 100).toFixed(0),
      status: 'WIP',
      category: 'Chores',
      title: 'Buy Milk',
      details: 'remember the lactose free aisle'
    },
    {
      id: (Math.random() * 100).toFixed(0),
      status: 'WIP',
      category: 'Chores',
      title: 'Renew gym membership',
      details: 'gotta make my the muscles happy'
    }
  ];
}