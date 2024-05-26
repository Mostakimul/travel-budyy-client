'use client';

import { Controller, useFormContext } from 'react-hook-form';

interface TextareaFieldProps {
  name: string;
  placeholder?: string;
  required?: boolean;
}

const TextareaField: React.FC<TextareaFieldProps> = ({
  name,
  placeholder = 'Type here',
  required,
}) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <div className="form-control w-full max-w-xs">
          <textarea
            {...field}
            className="textarea textarea-bordered h-24"
            placeholder={placeholder}
            required={required}
          ></textarea>
          {error && (
            <div className="label">
              <span className="label-text-alt text-rose-700">
                {error?.message}
              </span>
            </div>
          )}
        </div>
      )}
    />
  );
};

export default TextareaField;
