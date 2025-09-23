import { DialogInterface } from '@/types/models/Dialog';

export const dialogs: DialogInterface[] = [
  {
    id: 1,
    user_url: 'https://example.com/avatars/user1.png',
    sender_name: 'Алексей',
    last_message: 'Привет, как продвигается проект?',
    is_verified: true,
    last_updated_at: '2025-09-23T14:35:00Z',
    unread_count: 2,
  },
  {
    id: 2,
    user_url: 'https://example.com/avatars/user2.png',
    sender_name: 'Мария',
    last_message: 'Созвонимся вечером?',
    is_verified: false,
    last_updated_at: '2025-09-23T13:20:00Z',
    unread_count: 0,
  },
  {
    id: 3,
    user_url: 'https://example.com/avatars/user3.png',
    sender_name: 'Дмитрий',
    last_message: 'Я скинул тебе документы',
    is_verified: true,
    last_updated_at: '2025-09-23T12:05:00Z',
    unread_count: 5,
  },
  {
    id: 4,
    user_url: 'https://example.com/avatars/user4.png',
    sender_name: 'Ольга',
    last_message: 'Спасибо, всё получила 👍',
    is_verified: false,
    last_updated_at: '2025-09-23T10:40:00Z',
    unread_count: 1,
  },
  {
    id: 5,
    user_url: 'https://example.com/avatars/user5.png',
    sender_name: 'Новости IT',
    last_message: 'Вышел релиз Node.js 23!',
    is_verified: true,
    last_updated_at: '2025-09-23T09:15:00Z',
    unread_count: 10,
  },
];
