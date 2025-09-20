type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'tertiary';
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  children: React.ReactNode;
};

export default function Button({
  variant = 'primary',
  onClick,
  children,
}: ButtonProps) {
  const base =
    'rounded p-2 text-sm md:text-base font-semibold cursor-pointer md:py-2.5 md:px-4 flex items-center gap-2';

  const variants = {
    primary: 'bg-green text-white hover:bg-green-secondary',
    secondary: 'text-black bg-grey-secondary hover:bg-green hover:text-white',
    tertiary: 'border border-grey-secondary hover:border-green',
  };

  return (
    <button onClick={onClick} className={`${base} ${variants[variant]}`}>
      {children}
    </button>
  );
}
