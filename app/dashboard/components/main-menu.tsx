"use client";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import MenuItem from "./menu-item";
import MenuTitle from "./menu-title";

import { cn } from "@/lib/utils";
import { LightDarckToggle } from "@/components/ui/light-dark-toggle";
import { useAuth } from "@/context/auth-context";

export default function MainMenu({ className }: { className?: string }) {
  const { logout } = useAuth();

  function handleLogout() {
    localStorage.clear(); // Clear localStorage
    logout(); // Clear user context
    window.location.href = "/login"; // Force full reload and redirect
  }

  return (
    <nav
      className={cn(`md:bg-muted overflow-auto p-4 flex flex-col`, className)}
    >
      <header className="hidden md:block border-b dark:border-b-black border-b-zinc-300 pb-4">
        <MenuTitle />
      </header>
      <ul className="py-4 grow">
        <MenuItem href="/dashboard">My dashboard</MenuItem>
        <MenuItem href="/dashboard/teams">Teams</MenuItem>
        <MenuItem href="/dashboard/employees">Employees</MenuItem>
        <MenuItem href="/dashboard/account">Account</MenuItem>
        <MenuItem href="/dashboard/settings">Settings</MenuItem>
      </ul>
      <footer className="flex gap-2 items-center">
        <Avatar>
          <AvatarFallback className="bg-pink-300 dark:bg-pink-800">
            TP
          </AvatarFallback>
        </Avatar>
        <button
          onClick={handleLogout}
          className="hover:underline text-left text-inherit bg-transparent border-none p-0 cursor-pointer"
        >
          Logout
        </button>
        <LightDarckToggle className="ml-auto" />
      </footer>
    </nav>
  );
}
