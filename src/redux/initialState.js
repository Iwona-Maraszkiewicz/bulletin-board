export const initialState = {
  posts: {
    data: [
      {
        id: '1',
        author: 'admin@onet.pl',
        created: '2021-11-11',
        updated: '2021-12-11',
        status: 'published',
        title: 'Welcome to the luxury car bulletin board!',
        text: 'Create an account and log in to add your advertisement!',
        photo:
          'https://images.pexels.com/photos/305070/pexels-photo-305070.jpeg?cs=srgb&dl=pexels-sarmad-mughal-305070.jpg&fm=jpg',
        price: 500000000,
        phone: '999999999',
        location: 'Warsaw',
      },
      {
        id: '2',
        author: 'user1@gmail.com',
        created: '2021-11-12',
        updated: '2021-11-13',
        status: 'published',
        title: 'Great car for sale',
        text: 'I am offering an exclusive car for an exceptional driver.',
        photo:
          'https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?cs=srgb&dl=pexels-adrian-dorobantu-2127733.jpg&fm=jpg',
        price: 74000000,
        phone: '919999999',
        location: 'Funchal',
      },
      
    ],
    loading: {
      active: false,
      error: false,
    },
  },
  user: {
    active: true,
  },
};