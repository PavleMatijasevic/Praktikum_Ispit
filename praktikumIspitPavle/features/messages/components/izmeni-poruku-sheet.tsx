
// ovo je bitno

import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = z.object({
  name: z.string().nonempty("Name is required"),
  email: z.string().email("Invalid email"),
  msg: z.string().nonempty("Message is required"),
});

export type FormValues = z.infer<typeof formSchema>;

interface MsgFormProps {
  onSubmit: (values: FormValues) => void;
  disabled: boolean;
  defaultValues: FormValues;
}

export const MsgForm: React.FC<MsgFormProps> = ({ onSubmit, disabled, defaultValues }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const handleFormSubmit = (data: FormValues) => {
    console.log('Form submitted with data:', data);
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" {...register("name")} disabled={disabled} />
        {errors.name && <span>{errors.name.message}</span>}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" {...register("email")} disabled={disabled} />
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      <div>
        <label htmlFor="msg">Message</label>
        <textarea id="msg" {...register("msg")} disabled={disabled} />
        {errors.msg && <span>{errors.msg.message}</span>}
      </div>
      <button type="submit" disabled={disabled}>
        Submit
      </button>
    </form>
  );
};
