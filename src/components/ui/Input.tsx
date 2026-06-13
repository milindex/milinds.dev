import { type InputHTMLAttributes, forwardRef } from 'react';

type InputProps = {
  label?: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-text-secondary"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={`h-14 rounded-[12px] bg-surface-1 px-4 text-text-primary placeholder-text-muted outline-none transition-all duration-200 focus:ring-2 focus:ring-brand-primary ${
            error ? 'ring-2 ring-error' : ''
          } ${className}`}
          {...props}
        />
        {error && (
          <p className="text-sm text-error">{error}</p>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';

export default Input;
