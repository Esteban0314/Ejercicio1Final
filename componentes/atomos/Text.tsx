type TextProps = {
    children: React.ReactNode;
    className?: string;
  };
  
  export const Text = ({ children, className = '' }: TextProps) => (
    <p className={`text-white text-sm ${className}`}>{children}</p>
  );
  