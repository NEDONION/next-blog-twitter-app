import { signOut } from 'next-auth/react';
import { BiLogOut } from 'react-icons/bi';
import {
    BsHouseHeart,
    BsBell,
    BsPerson,
} from 'react-icons/bs';
import SidebarLogo from "@/components/layout/SidebarLogo";
import SidebarItem from "@/components/layout/SidebarItem";
import SidebarTweetButton from "@/components/layout/SidebarTweetButton";

const Sidebar = () => {
    const items = [
        {
            icon: BsHouseHeart,
            label: 'Home',
            href: '/',
        },
        {
            icon: BsBell,
            label: 'Notifications',
            href: '/notifications',
        },
        {
            icon: BsPerson,
            label: 'Profile',
            href: '/users/123',
        },
    ]



    return (
        <div className="col-span-1 h-full pr-4 md:pr-6">
            <div className="flex flex-col items-end">
                <div className="space-y-2 lg:w-[230px]">
                    <SidebarLogo />
                    {items.map((item) => (
                        <SidebarItem
                            key={item.href}
                            href={item.href}
                            icon={item.icon}
                            label={item.label}
                        />
                    ))}
                    <SidebarItem onClick={() =>{}} icon={BiLogOut} label="Logout" />
                    <SidebarTweetButton />
                </div>
            </div>
        </div>
    )
}

export default Sidebar