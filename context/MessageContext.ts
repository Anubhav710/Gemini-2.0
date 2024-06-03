"use client";
import React, { createContext, useContext } from "react";

interface Message {
  input: string;
  setInput: (message: string) => void;
  recentPrompt: string;
  setRecentPrompt: (message: string) => void;
  prevPrompt: string[];
  setPrevPrompt: any;
  showResult: boolean;
  setShowResult: (loading: boolean) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  resultData: string;
  setResultData: (message: string) => void;
  onSent: any;
}

const MessageContext = createContext<Message | undefined>(undefined);

export default MessageContext;

export const useMessageContext = () => {
  const context = useContext(MessageContext);
  if (!context) throw new Error("No MessageContext ");

  return context;
};
