import { MessageInterface } from '@/types/models/Message';

export const messages: Record<number, MessageInterface[]> = {
  1: [
    {
      id: 1,
      dialog_id: 1,
      sender_name: 'Hello',
      message: 'Hello, how are you?',
      created_at: '10:00 AM',
      income: true,
      status: 'check',
      attachments: [
        {
          id: 1, //key
          file_name: 'image_1', //alt
          //src
          attachment_url: 'https://user76023.clients-cdnnow.ru/wp-content/uploads/2018/03/25345_1.jpg',
          mime_type: 'image/png',
        },
      ],
    },
    {
      id: 2,
      dialog_id: 1,
      sender_name: 'Hello',
      message: 'Hello, how are you?',
      created_at: '10:00 AM',
      income: true,
      status: 'check',
      attachments: [
        {
          id: 1, //key
          file_name: 'image_1', //alt
          //src
          attachment_url: 'https://user76023.clients-cdnnow.ru/wp-content/uploads/2018/03/25345_1.jpg',
          mime_type: 'image/png',
        },
      ],
    },
  ],
  2: [
    {
      id: 3,
      dialog_id: 2,
      sender_name: 'Hello efjwefiuefailjf',
      message: 'Hello, how are you? fefafefwfafwfeggaefwer3wa',
      created_at: '10:00 AM',
      income: false,
      status: 'read',
      attachments: [
        {
          id: 1,
          file_name: 'image_1',
          attachment_url:
            'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80',
          mime_type: 'image/png',
        },
      ],
    },

    {
      id: 4,
      dialog_id: 2,
      sender_name: 'Hello efjwefiuefailjf',
      message: 'Hello, how are you? fefafefwfafwfeggaefwer3wa',
      created_at: '10:00 AM',
      income: false,
      status: 'read',
      attachments: [
        {
          id: 1,
          file_name: 'image_1',
          attachment_url:
            'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80',
          mime_type: 'image/png',
        },
      ],
    },
  ],
  3: [],
  4: [],
  5: [],
};
