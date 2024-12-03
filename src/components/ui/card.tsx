// card.tsx
import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card = ({ children, className }: CardProps) => {
  return (
    <div className={`p-4 rounded-lg shadow-lg ${className}`}>
      {children}
    </div>
  );
};

interface CardHeaderProps {
  children: ReactNode;
}

export const CardHeader = ({ children }: CardHeaderProps) => {
  return <div className="mb-4">{children}</div>;
};

interface CardTitleProps {
  children: ReactNode;
  className?: string;
}

export const CardTitle = ({ children, className }: CardTitleProps) => {
  return <h3 className={`text-lg font-semibold ${className}`}>{children}</h3>;
};

interface CardDescriptionProps {
  children: ReactNode;
  className?: string;
}

export const CardDescription = ({ children, className }: CardDescriptionProps) => {
  return <p className={`text-sm ${className}`}>{children}</p>;
};

interface CardContentProps {
  children: ReactNode;
}

export const CardContent = ({ children }: CardContentProps) => {
  return <div className="text-sm">{children}</div>;
};
