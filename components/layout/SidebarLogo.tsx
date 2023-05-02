import { useRouter } from "next/router";
import { BsTwitter } from "react-icons/bs";

const SidebarLogo = () => {
    const router = useRouter();

    return (
        <div
            onClick={() => router.push('/')}
            className="
        rounded-full
        h-14
        w-14
        p-4
        flex
        items-center
        justify-center
        hover:bg-gray-300
        hover:bg-opacity-50
        cursor-pointer
    ">
            <BsTwitter size={28} color="rgb(29, 155, 240)" />
        </div>
    );
};

export default SidebarLogo;
