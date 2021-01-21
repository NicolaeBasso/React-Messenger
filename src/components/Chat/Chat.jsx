import { useChat } from 'context';
import { useEffect } from 'react';

export const Chat = () => {
  const { chatConfig } = useChat();

  useEffect(() => {
    console.log(chatConfig);
  }, [chatConfig]);

  return <>Chat</>;
};
