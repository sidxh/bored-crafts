import { cn } from '@/lib/utils';

type ButtonSizeType = 'small' | 'medium' | 'large';
type ButtonAppearanceType = 'primary' | 'solid' | 'outline' | 'link' | 'success' | 'danger';
type ButtonRoundedType = 'none' | 'small' | 'medium' | 'large';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    size?: ButtonSizeType;
    appearance?: ButtonAppearanceType;
    rounded?: ButtonRoundedType;
    fullWidth?: boolean;
}

const ButtonSizeClass = {
    small: 'px-3 py-1.5 rounded text-sm font-normal',
    medium: 'px-4 py-2 rounded-md text-base font-normal',
    large: 'px-6 py-3 rounded-lg text-lg font-normal',
};

const ButtonAppearanceClass = {
    primary:
        'bg-orange-500 text-white border-transparent hover:brightness-105 active:brightness-110',
    solid:
        'bg-gray-900 text-gray-200 border-transparent hover:brightness-105 active:brightness-110',
    outline: 'bg-white text-gray-800 border border-gray-300 hover:bg-gray-50',
    link: 'text-blue-500 hover:underline',
    success: 'bg-green-500 text-white hover:brightness-105 active:brightness-110',
    danger: 'bg-red-500 text-white hover:brightness-105 active:brightness-110',
};

const ButtonRoundedClass = {
    none: 'rounded-none',
    small: 'rounded-md',
    medium: 'rounded-xl',
    large: 'rounded-full',
}

const ButtonFullWidthClass = 'w-full';

const Button: React.FunctionComponent<ButtonProps> = ({
    size = 'medium',
    appearance = 'primary',
    rounded = 'none',
    fullWidth = false,
    className,
    ...attr
}) => {
    const buttonStyleClass = cn(
        'transition-all flex items-center justify-center gap-1 border shadow-lg active:shadow',
        ButtonAppearanceClass[appearance],
        ButtonSizeClass[size],
        ButtonRoundedClass[rounded],
        fullWidth && ButtonFullWidthClass,
        className,
    );

    return (
        <button className={buttonStyleClass} {...attr}>
            {attr?.children}
        </button>
    );
};

export default Button;
