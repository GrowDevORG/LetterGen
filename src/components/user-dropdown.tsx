import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Session } from 'next-auth';
import { Button } from './ui/button';
import { LogOut } from 'lucide-react';
import { signOut } from 'next-auth/react';

interface UserDropdownProps {
  session: Session;
}

const UserDropdown: React.FC<UserDropdownProps> = ({ session }) => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="hover:cursor-pointer hidden sm:block">
            <AvatarImage src={session?.user?.image || ''} />
            <AvatarFallback>
              {session?.user?.name?.charAt(0).toUpperCase() ||
                session?.user?.email.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="border-none w-full bg-white mr-6 ml-6 -translate-x-12">
          <DropdownMenuItem className="flex gap-6 items-center focus:bg-transparent ml-4 mr-4">
            <Avatar className="hover:cursor-pointer hidden sm:block">
              <AvatarImage src={session?.user?.image || ''} />
              <AvatarFallback>
                {session?.user?.name?.charAt(0).toUpperCase() ||
                  session?.user?.email.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-black">
                {session?.user?.name || session.user.email.split('@')[0]}
              </span>
              <span className="text-[#8c8b94]">{session?.user?.email}</span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="bg-white flex focus:bg-transparent ml-4 mr-4">
            <Button
              onClick={() => {
                signOut();
              }}
              className="w-full border-[#e0e0e0] bg-white text-black hover:bg-gray-100 group"
            >
              {' '}
              <LogOut className="group-hover:rotate-[-10deg]" /> Log out
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserDropdown;
