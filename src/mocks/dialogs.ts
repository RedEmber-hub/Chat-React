import { DialogInterface } from '@/types/models/Dialog';

export const dialogs: DialogInterface[] = [
  {
    id: 1,
    avatar_url: '',
    sender_name: 'Алексей Михайлович',
    last_message: 'Привет, как продвигается проект?',
    is_verified: true,
    last_updated_at: '2025-09-23T14:35:00Z',
    unread_count: 2,
  },
  {
    id: 2,
    avatar_url: '',
    sender_name: 'Мария',
    last_message: 'Созвонимся вечером?',
    is_verified: false,
    last_updated_at: '2025-09-23T13:20:00Z',
    unread_count: 0,
  },
  {
    id: 3,
    avatar_url: 'https://kulturologia.ru/files/u17904/179046338.jpg',
    sender_name: 'Дмитрий',
    last_message: 'Я скинул тебе документы',
    is_verified: true,
    last_updated_at: '2025-09-23T12:05:00Z',
    unread_count: 5,
  },
  {
    id: 4,
    avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2lCU1tXsvbI8iDnu1ZgN1W7OWnTOYUz1M9A&s',
    sender_name: 'Ольга Маслова',
    last_message: 'Спасибо, всё получила 👍',
    is_verified: false,
    last_updated_at: '2025-09-23T10:40:00Z',
    unread_count: 1,
  },
  {
    id: 5,
    avatar_url:
      'https://media.istockphoto.com/id/1438547233/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%BC%D0%BD%D0%BE%D0%B3%D0%BE-%D0%BB%D1%8E%D0%B4%D0%B5%D0%B9-%D1%82%D0%BE%D0%BB%D0%BF%D1%8F%D1%82%D1%81%D1%8F-%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B0-%D0%B3%D1%80%D0%B0%D0%B6%D0%B4%D0%B0%D0%BD-%D0%BC%D0%BD%D0%BE%D0%B3%D0%BE-%D0%BB%D1%8E%D0%B4%D0%B5%D0%B9-%D0%B1%D0%BE%D0%BB%D1%8C%D1%88%D0%BE%D0%B9-%D1%80%D1%8B%D0%BD%D0%BE%D0%BA-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BD%D0%B8%D0%BA%D0%B8-%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81%D0%B0-%D1%81%D0%B8%D0%BB%D1%83%D1%8D%D1%82%D1%8B.jpg?s=612x612&w=0&k=20&c=UB1t5vThlrJo26KP9zMJSB3S6ZF4inplw6s0ctxsNAo=',
    sender_name: 'Новости IT',
    last_message: 'Вышел релиз Node.js 23!',
    is_verified: true,
    last_updated_at: '2025-09-23T09:15:00Z',
    unread_count: 10,
  },
];
