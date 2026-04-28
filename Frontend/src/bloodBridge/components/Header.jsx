import React, { useState } from "react";
import {
  Bell,
  Droplets,
  X,
  Clock3,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";

const Header = () => {
  const [openPanel, setOpenPanel] = useState(false);

  const notifications = [
    {
      title: "Emergency Request",
      desc: "O- blood needed urgently at Apollo Hospital.",
      time: "2 min ago",
      icon: <AlertTriangle size={18} />,
      color: "text-red-600",
      bg: "bg-red-100",
    },
    {
        title: "Blood Donated",
        desc: "You have successfully donated blood. Thank you for saving lives!",
        time: "10 min ago",
        icon: <Clock3 size={18} />,
        color: "text-blue-600",
        bg: "bg-blue-100",
    },
    {
      title: "Account Created",
      desc: "Your account has been created successfully.",
      time: "30 min ago",
      icon: <CheckCircle2 size={18} />,
      color: "text-green-600",
      bg: "bg-green-100",
    },
  ];

  return (
    <>
      {/* Header */}
      <div className="flex relative z-10 bg-white">
        {/* Left Logo */}
        <div className="h-[90px] w-[330px] px-6 flex items-center gap-3 relative after:content-[''] after:absolute after:bottom-[0px] after:top-[15%] after:right-0 after:w-[3.5px] after:h-[70%] after:bg-gray-300 after:rounded-xl">
          <div className="w-12 h-12 rounded-xl bg-red-600 flex items-center justify-center shadow-md">
            <Droplets className="text-white w-6 h-6 fill-white" />
          </div>

          <div>
            <h1 className="text-[20px] font-bold text-gray-900 tracking-wide">
              Blood Bridge
            </h1>
            <p className="text-sm text-gray-500 font-medium">
              Connecting Lives
            </p>
          </div>
        </div>

        {/* Right Header */}
        <div className="flex items-center px-5 justify-between w-[calc(100vw-330px)]">
          <div>
            <h1 className="text-[24px] font-bold text-gray-900 tracking-wide leading-8">
              Emergency Dashboard
            </h1>
            <p className="text-sm text-gray-500 font-medium">
              Real time blood donation network
            </p>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* SOS */}
            <button className="w-10 h-10 rounded-full outline-[3.5px] outline-[#d68686] bg-red-600 text-white font-semibold text-sm shadow-md hover:scale-105 transition-all duration-300">
              SOS
            </button>

            {/* Bell */}
            <div className="relative">
              <button
                onClick={() => setOpenPanel(true)}
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition cursor-pointer"
              >
                <Bell className="w-5 h-5 text-gray-700" />
              </button>

              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-600 text-white text-[10px] flex items-center justify-center font-bold">
                3
              </span>
            </div>

            {/* Profile */}
            <img
              src="https://i.pravatar.cc/100?img=12"
              alt="profile"
              className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Overlay */}
      {openPanel && (
        <div
          onClick={() => setOpenPanel(false)}
          className="fixed inset-0 bg-black/20 z-[9998]"
        />
      )}

      {/* Right Notification Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-[400px] bg-white shadow-2xl z-[9999] transition-all duration-500 ${
          openPanel ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="h-[80px] px-5 border-b flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">
            Notifications
          </h2>

          <button
            onClick={() => setOpenPanel(false)}
            className="w-9 h-9 rounded-full hover:bg-gray-100 flex items-center justify-center"
          >
            <X size={18} />
          </button>
        </div>

        {/* Notification List */}
        <div className="p-4 flex flex-col gap-3 overflow-y-auto h-[calc(100vh-80px)]">
          {notifications.map((item, index) => (
            <div
              key={index}
              className="p-4 rounded-2xl border border-gray-100 hover:bg-gray-50 transition cursor-pointer"
            >
              <div className="flex gap-3">
                {/* Icon */}
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.bg} ${item.color}`}
                >
                  {item.icon}
                </div>

                {/* Text */}
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 text-sm">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1 leading-5">
                    {item.desc}
                  </p>

                  <p className="text-xs text-gray-400 mt-2">
                    {item.time}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;