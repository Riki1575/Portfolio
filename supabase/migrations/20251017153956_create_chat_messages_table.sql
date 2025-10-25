/*
  # Create chat messages table

  1. New Tables
    - `chat_messages`
      - `id` (uuid, primary key)
      - `message_text` (text) - The content of the chat message
      - `is_user` (boolean) - Whether the message is from the user or bot
      - `created_at` (timestamptz) - When the message was created
      - `session_id` (text) - Optional session identifier for grouping conversations
  
  2. Security
    - Enable RLS on `chat_messages` table
    - Add policy for anonymous users to insert their own messages
    - Add policy for anonymous users to read messages from their session
  
  3. Indexes
    - Index on created_at for efficient time-based queries
    - Index on session_id for grouping conversations
*/

CREATE TABLE IF NOT EXISTS chat_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  message_text text NOT NULL,
  is_user boolean NOT NULL DEFAULT true,
  session_id text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE chat_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert chat messages"
  ON chat_messages
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Anyone can read chat messages"
  ON chat_messages
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS idx_chat_messages_created_at ON chat_messages(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_chat_messages_session_id ON chat_messages(session_id);
