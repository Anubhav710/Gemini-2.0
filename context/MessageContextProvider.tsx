"use client";
import React, { useState } from "react";

import MessageContext from "./MessageContext";
import { geminiResponse } from "@/app/action";
const MessageContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompt, setPrevPrompt] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const delayPara = (index: number, newWord: string) => {
    setTimeout(() => {
      setResultData((prev) => prev + newWord);
    }, 75 * index);
  };

  const onSent = async () => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    setRecentPrompt(input);
    setPrevPrompt([...prevPrompt, recentPrompt]);
    console.log(prevPrompt);
    console.log(recentPrompt);
    const resp = await geminiResponse(input);
    let respArray = resp.split("**");

    let newResp = "";
    for (let i = 0; i < respArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newResp += respArray[i];
      } else {
        newResp += "<b>" + respArray[i] + "</b>";
      }
    }

    let newResp2 = newResp.split("*").join("</br></br>");

    let newResponseArray = newResp2.split(" ");
    for (let i = 0; i < newResponseArray.length; i++) {
      const nextWord = newResponseArray[i];
      delayPara(i, nextWord + " ");
    }
    setTimeout(() => setLoading(false), 2000);

    setInput("");
  };

  return (
    <MessageContext.Provider
      value={{
        onSent,
        input,
        loading,
        prevPrompt,
        recentPrompt,
        resultData,
        setInput,
        setLoading,
        setPrevPrompt,
        setRecentPrompt,
        setResultData,
        setShowResult,
        showResult,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
};

export default MessageContextProvider;
