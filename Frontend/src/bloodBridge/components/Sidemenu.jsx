import React, { useState } from "react";
import {
  Bell,
  Car,
  Gift,
  Hospital,
  House,
  Search,
  UserRound,
  Heart,
} from "lucide-react";

const navItems = [
  { id: 1, title: "Dashboard", icon: House },
  { id: 2, title: "Find Donors", icon: Search },
  { id: 3, title: "Emergency SOS", icon: Bell },
  { id: 4, title: "Vehicle Pickup", icon: Car },
  { id: 5, title: "Hospitals", icon: Hospital },
  { id: 6, title: "Rewards", icon: Gift },
  { id: 7, title: "Profile", icon: UserRound },
];

const SideNav = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <aside className="w-[330px] h-[calc(100vh-90px)] bg-white flex flex-col justify-between">
      <nav className="px-4 py-5 flex flex-col gap-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`group w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                isActive
                  ? "bg-red-50 text-red-600 shadow-sm"
                  : "text-gray-600 hover:bg-red-50 hover:text-red-600"
              }`}
            >
              <Icon
                className={`w-5 h-5 transition-all ${
                  isActive ? "scale-110" : "group-hover:scale-110"
                }`}
              />

              <span className="font-medium tracking-wide text-[15px]">
                {item.title}
              </span>
            </button>
          );
        })}
      </nav>

      <div className="p-4">
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-4 text-white shadow-lg">
          <div className="flex gap-3 items-start">
            <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center">
              <Heart className="w-5 h-5 fill-white text-white" />
            </div>

            <div>
              <h3 className="font-semibold text-[15px]">
                Become a Donor
              </h3>

              <p className="text-xs text-red-100 mt-1">
                Save lives today
              </p>
            </div>
          </div>

          <button className="w-full mt-5 py-3 rounded-xl bg-white text-red-600 font-semibold hover:scale-[1.02] transition-all">
            local donation centers
          </button>
        </div>
      </div>
    </aside>
  );
};

export default SideNav;