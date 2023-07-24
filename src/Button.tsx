export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  color?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark'
    | 'link';
  variant?: 'outlined' | 'filled';
}

export const Button: React.FC<ButtonProps> = ({
  className = '',
  variant = 'primary',
  ...rest
}) => {
  return <button className={`btn ${className} btn-${variant}`} {...rest} />;
};
