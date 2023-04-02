import React from "react";

function Form() {
  return (
    <div className=" ml-6">
      <div className="text-lg font-medium ">Write to us</div>
      <form className="w-full text-lg pt-4">
        <input
          type="text"
          placeholder="Your full name here"
          className="w-full my-2 h-12 py-1 px-2 "
        />
        <input
          type="text"
          placeholder="email"
          className="w-full my-2 h-12 py-1 px-2 "
        />
        <input
          type="text"
          placeholder="Youe Phone Number"
          className="w-full my-2 h-12 py-1 px-2 "
        />
        <textarea
          rows="4"
          cols="50"
          placeholder="Message"
          className="px-2"
        ></textarea>
        <button className="bg-blue-500 py-2 px-8 font-medium uppercase text-white rounded-full mt-2 ">
          Send
        </button>
      </form>
    </div>
  );
}

export default Form;
