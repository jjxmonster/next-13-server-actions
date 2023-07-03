"use client";

import React, { useRef } from "react";

import { send } from "./actions";

const FormClientComponent = () => {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <div className="w-full max-w-xs">
      <form
        ref={formRef}
        action={async formData => {
          const message = formData.get("message");

          formRef.current?.reset();
          await send(message as string);
        }}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="Message"
          >
            Message to backend
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="message"
            type="text"
            placeholder="Message"
          />
          <button
            type="submit"
            className="text-white mt-5 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormClientComponent;
