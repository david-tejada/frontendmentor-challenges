"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import clsx from "clsx";

const ContactFormSchema = z.object({
  name: z.string().min(1, { message: "This field is required" }),
  email: z
    .string()
    .min(1, { message: "This field is required" })
    .email({ message: "Please use a valid email address" }),
  company: z.string(),
  title: z.string(),
  message: z.string().min(1, { message: "This field is required" }),
});

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    clearErrors,
    formState: { errors, isSubmitted },
  } = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    reValidateMode: "onSubmit",
  });

  return (
    <form
      noValidate
      onSubmit={handleSubmit((data) => {
        console.log(data);
        reset();
      })}
    >
      <input
        type="text"
        {...register("name", {
          onChange: (event) => clearErrors("name"),
        })}
        placeholder="Name"
        className={clsx(
          "mt-2 w-full border-b bg-transparent p-4 outline-none",
          {
            "text-coral placeholder:text-coral":
              isSubmitted && errors.name?.message,
          },
        )}
      />

      {errors.name?.message && (
        <p className="p-2 text-[0.625rem] font-bold italic text-coral">
          {errors.name.message.toString()}
        </p>
      )}

      <input
        type="email"
        {...register("email", {
          onChange: (event) => clearErrors("email"),
        })}
        placeholder="Email Address"
        className={clsx(
          "mt-2 w-full border-b bg-transparent p-4 outline-none",
          {
            "text-coral placeholder:text-coral":
              isSubmitted && errors.email?.message,
          },
        )}
      />

      {errors.email?.message && (
        <p className="p-2 text-[0.625rem] font-bold italic text-coral">
          {errors.email.message.toString()}
        </p>
      )}

      <input
        type="text"
        {...register("company")}
        placeholder="Company Name"
        className="mt-2 w-full border-b bg-transparent p-4 outline-none"
      />

      <input
        type="text"
        {...register("title")}
        placeholder="Title"
        className="mt-2 w-full border-b bg-transparent p-4 outline-none"
      />

      <textarea
        {...register("message", {
          onChange: (event) => clearErrors("message"),
        })}
        placeholder="Message"
        cols={30}
        rows={3}
        className="mt-2 w-full border-b bg-transparent p-4 outline-none"
      ></textarea>

      {errors.message?.message && (
        <p className="p-2 text-[0.625rem] font-bold italic text-coral">
          {errors.message.message.toString()}
        </p>
      )}

      <button
        type="submit"
        className="mt-6 rounded-full bg-white px-8 py-3 text-lg text-green-600"
      >
        submit
      </button>
    </form>
  );
}
