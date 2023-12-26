import React, { useState, ChangeEvent } from 'react';
import { cn } from '@/lib/utils';

type ToggleSwitchSizeType = 'small' | 'medium' | 'large';
type ToggleSwitchColorType = 'default' | 'primary' | 'success' | 'danger';

interface ToggleSwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: ToggleSwitchSizeType;
  color?: ToggleSwitchColorType;
  rounded?: boolean;
}

const ToggleSwitchSizeClass = {
  small: 'w-10 h-4',
  medium: 'w-12 h-6',
  large: 'w-16 h-8',
};

const ToggleSwitchColorClass = {
  default: 'bg-gray-300',
  primary: 'bg-blue-500',
  success: 'bg-green-500',
  danger: 'bg-red-500',
};

const ToggleSwitchRoundedClass = 'rounded-full';

const ToggleSwitch: React.FunctionComponent<ToggleSwitchProps> = ({
  size = 'medium',
  color = 'default',
  rounded = false,
  className,
  ...attr
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const switchSizeClass = ToggleSwitchSizeClass[size];
  const switchStyleClass = cn(
    'relative inline-block overflow-hidden cursor-pointer select-none',
    switchSizeClass,
    rounded && ToggleSwitchRoundedClass,
    className,
  );

  const switchTrackClass = cn(
    'flex items-center justify-between w-full h-full transition-transform transform',
    isChecked ? 'translate-x-full' : 'translate-x-0',
  );

  return (
    <label className={switchStyleClass}>
      <input
        type="checkbox"
        className="absolute opacity-0 w-0 h-0"
        checked={isChecked}
        onChange={handleToggleChange}
        {...attr}
      />
      <div className={switchTrackClass}>
        <div className={cn('bg-white w-1/2 h-full')} />
      </div>
      <span className="sr-only">Toggle Switch</span>
    </label>
  );
};

export default ToggleSwitch;
