"use client";

import { useState } from "react";
import { Icon } from "@/shared/ui/Icon";

const navItems = [
  { name: "홈", icon: "home" as const },
  { name: "세모클래스", icon: "class" as const },
  { name: "세모책", icon: "book" as const },
  { name: "세모노트", icon: "note" as const },
  { name: "마이", icon: "profile" as const },
];

export function BottomNavigation() {
  const [activeItem, setActiveItem] = useState("홈");

  return (
    <nav className="bottom-0 left-0 right-0 h-[78px] bg-green-50">
      <div className="mt-4 mb-4 flex justify-around items-center h-14">
        {navItems.map((item) => (
          <button
            key={item.name}
            className="flex flex-col items-center"
            onClick={() => setActiveItem(item.name)}
          >
            <Icon
              name={item.icon}
              className={`w-8 h-8 ${activeItem === item.name ? "text-[#2CADAF]" : "text-gray-600"}`}
            />
            <span
              className={`text-xs ${activeItem === item.name ? "text-[#2CADAF]" : "text-gray-600"}`}
            >
              {item.name}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}
