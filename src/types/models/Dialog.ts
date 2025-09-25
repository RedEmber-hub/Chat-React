export interface DialogInterface {
  id: number;
  avatar_url: string;
  sender_name: string;
  last_message: string;
  is_verified: boolean;
  last_updated_at: string;
  unread_count: number;
}
