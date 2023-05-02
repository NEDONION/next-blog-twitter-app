interface ButtonProps {
    label: string;
    secondary?: boolean;
    fullWidth?: boolean;
    large?: boolean;
    onClick: () => void;
    disabled?: boolean;
    outline?: boolean;
    tweetButton?: boolean;
}

const Button: React.FC<ButtonProps> = ({
                                           label,
                                           secondary,
                                           fullWidth,
                                           onClick,
                                           large,
                                           disabled,
                                           outline,
                                           tweetButton
                                       }) => {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={`
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-full
        font-bold
        hover:opacity-80
        transition
        border-2
        ${fullWidth ? 'w-full' : 'w-fit'}
        ${secondary ? 'bg-black' : tweetButton ? 'bg-sky-500' : 'bg-white'}
        ${secondary ? 'text-white' : tweetButton ? 'text-white' : 'text-black'}
        ${secondary ? 'border-black' : tweetButton ? 'border-none' : 'border-gray-200'}
        ${large ? 'text-xl' : 'text-md'}
        ${large ? 'px-5' : 'px-4'}
        ${large ? 'py-3' : 'py-2'}
        ${outline ? 'bg-transparent' : ''}
        ${outline ? 'border-black' : ''}
        ${outline ? 'text-black' : ''}
        ${tweetButton ? 'hover:bg-sky-600' : ''}
        ${tweetButton ? 'hover:bg-opacity-90' : ''}
      `}
        >
            {label}
        </button>
    );
}

export default Button;