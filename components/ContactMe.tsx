import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
type Props = {};

const ContactMe = (props: Props) => {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    window.location.href = `mailto:amit.kumar280198@gmail?subject=${data.subject}&body=Hi, My Name <is1 className="${data.message}">data.name</is1>`;
  };
  return (
    <div
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl
    px-10 justify-center items-center mx-auto"
    >
      <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-400 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-4 justify-end">
        <h4 className="text-4xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="decoration-[#f7ab0a]/50 underline">Lets Talk.</span>
        </h4>
        <div className="space-y-4">
          <div className="flex items-center space-x-5">
            <PhoneIcon className="text-[#f7ab0a] h-7 w-0-7 animate-pulse" />
            <p>+01 7392343808</p>
          </div>

          <div className="flex item-center space-x-5">
            <EnvelopeIcon className="text-[#f7ab0a] h-7 w-0-7 animate-pulse" />
            <p>amit.kumar@gamil.com</p>
          </div>

          <div className="flex item-center space-x-5">
            <MapPinIcon className="text-[#f7ab0a] h-7 w-0-7 animate-pulse" />
            <p>Bangalore 560103</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-full mx-auto"
        >
          <div className="flex flex-row justify-between space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput resize-none"
          />
          <button
            type="submit"
            className="bg-[#f7ab0a] py-4 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
