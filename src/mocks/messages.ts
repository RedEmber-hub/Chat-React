import { MessageInterface } from '@/types/models/Message';

export const messages: Record<number, MessageInterface[]> = {
  1: [
    {
      id: 1,
      dialog_id: 1,
      sender_name: 'Алексей',
      message: 'Привет! Как твои дела?',
      created_at: '10:00',
      income: true,
      status: 'check',
      attachments: [],
    },
    {
      id: 2,
      dialog_id: 1,
      sender_name: 'Алексей',
      message: 'Посмотри это фото.',
      created_at: '10:05',
      income: true,
      status: 'check',
      attachments: [
        {
          id: 2,
          file_name: 'пейзаж',
          attachment_url: 'https://picsum.photos/200/300',
          mime_type: 'image/jpeg',
        },
      ],
    },
  ],

  2: [
    {
      id: 3,
      dialog_id: 2,
      sender_name: 'Мария',
      message: 'Привет! Я отправила тебе документы.',
      created_at: '11:15',
      income: false,
      status: 'read',
      attachments: [],
    },
    {
      id: 4,
      dialog_id: 2,
      sender_name: 'Мария',
      message: 'Проверь, пожалуйста, всё ли в порядке.',
      created_at: '11:20',
      income: false,
      status: 'read',
      attachments: [],
    },
  ],

  3: [
    {
      id: 5,
      dialog_id: 3,
      sender_name: 'Иван',
      message: 'Смотри, какой смешной мем я нашёл!',
      created_at: '09:45',
      income: true,
      status: 'read',
      attachments: [
        {
          id: 1,
          file_name: 'мем.jpg',
          attachment_url:
            'https://play-lh.googleusercontent.com/SzdvifkDT3UFAIgyJBRoB0D5iZmwUQ_QQkdKLLObKEplQKvS3T4NA3byMrMB1HAaLlU=w240-h480-rw',
          mime_type: 'image/jpeg',
        },
      ],
    },
    {
      id: 6,
      dialog_id: 3,
      sender_name: 'Ольга',
      message: 'Хаха, действительно смешно!',
      created_at: '09:47',
      income: false,
      status: 'read',
      attachments: [],
    },
  ],
  4: [
    {
      id: 7,
      dialog_id: 4,
      sender_name: 'Carol',
      message: 'Here is a funny meme 😂',
      created_at: '09:45 AM',
      income: true,
      status: 'check',
      attachments: [
        {
          id: 1,
          file_name: 'meme.jpg',
          attachment_url: 'https://i.imgur.com/abcd123.jpg',
          mime_type: 'image/jpeg',
        },
      ],
    },
    {
      id: 8,
      dialog_id: 4,
      sender_name: 'Dave',
      message: 'LOL, that is hilarious!',
      created_at: '09:47 AM',
      income: false,
      status: 'read',
      attachments: [],
    },
  ],
  5: [
    {
      id: 9,
      dialog_id: 5,
      sender_name: 'Eve',
      message: 'Can we have a quick call?',
      created_at: '02:30 PM',
      income: true,
      status: 'check',
      attachments: [],
    },
    {
      id: 10,
      dialog_id: 5,
      sender_name: 'Frank',
      message: 'Sure, give me 5 minutes.',
      created_at: '02:32 PM',
      income: false,
      status: 'read',
      attachments: [],
    },
    {
      id: 11,
      dialog_id: 5,
      sender_name: 'Eve',
      message: 'Here is the agenda for the meeting.',
      created_at: '02:33 PM',
      income: true,
      status: 'check',
      attachments: [
        {
          id: 1,
          file_name: 'agenda.docx',
          attachment_url: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Agenda.jpg',
          mime_type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        },
      ],
    },
  ],
};
