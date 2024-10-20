import { createContext, useState } from "react";

export const Emails = [
    {
      id: 1,
      sender: "Raul Junco",
      content: "Failing Silently is also an Option.",
      isStarred: false,
      isImportant: false,
    },
    {
      id: 2,
      sender: "TLDR Web Dev",
      content: "OpenAI Dev Day Updates.",
      isStarred: true,
      isImportant: true,
    },
    {
      id: 3,
      sender: "Naukri Campus",
      content: "Get noticed by Capgemini & Siemens!",
      isStarred: false,
      isImportant: false,
    },
    {
      id: 4,
      sender: "Superhuman",
      content: "OpenAI unlocks its powerful voice API.",
      isStarred: false,
      isImportant: true,
    },
    {
      id: 5,
      sender: "The Rundown AI",
      content: "4 major updates at OpenAI's DevDay.",
      isStarred: true,
      isImportant: false,
    },
    {
      id: 6,
      sender: "The Rundown AI",
      content: "4 major updates at OpenAI's DevDay.",
      isStarred: true,
      isImportant: false,
    },
    {
      id: 7,
      sender: "The Rundown AI",
      content: "4 major updates at OpenAI's DevDay.",
      isStarred: true,
      isImportant: false,
    },
    {
      id: 8,
      sender: "The Rundown AI",
      content: "4 major updates at OpenAI's DevDay.",
      isStarred: true,
      isImportant: false,
    },
    {
      id: 9,
      sender: "The Rundown AI",
      content: "4 major updates at OpenAI's DevDay.",
      isStarred: true,
      isImportant: false,
    },
  ];

export const InboxContext = createContext()





export const MyInboxContentProvider = ({children}) => {

  const totalNumberofEmails = Emails.length
  const totalFavoritesEmails = Emails.filter(email => email.isStarred).length
  const totalImportantEmails = Emails.filter(email => email.isImportant).length

  return (

    <InboxContext.Provider value={{Emails, totalNumberofEmails, totalFavoritesEmails, totalImportantEmails}} >

      {children}

    </InboxContext.Provider>

  )
  
}