type TitleProps = {
    children: React.ReactNode;
    className?: string;
  };
  
  export const Title = ({ children, className = '' }: TitleProps) => (
    <h2 className={`font-bold text-base ${className}`}>{children}</h2>
  );
  