// src/components/BottomNav.jsx
import React from "react";
import { Home, MessageCircle, User, Bell } from "lucide-react";

export default function NavigationButton() {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-background-paper shadow-lg rounded-2xl z-50 px-6 py-2 flex justify-around items-center w-[90%] max-w-sm border border-gray-700/40">
      <button className="flex flex-col items-center text-textColor-secondary hover:text-primary-light">
        <Home size={22} />
        <span className="text-[10px] mt-1">Home</span>
      </button>
      <button className="flex flex-col items-center text-textColor-secondary hover:text-primary-light">
        <MessageCircle size={22} />
        <span className="text-[10px] mt-1">Chat</span>
      </button>
      <button className="flex flex-col items-center text-textColor-secondary hover:text-primary-light">
        <Bell size={22} />
        <span className="text-[10px] mt-1">Notif</span>
      </button>
      <button className="flex flex-col items-center text-textColor-secondary hover:text-primary-light">
        <User size={22} />
        <span className="text-[10px] mt-1">Profile</span>
      </button>
    </div>
  );
}
