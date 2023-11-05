import React from 'react'
import { FaPaperPlane } from 'react-icons/fa';
import { useFormStatus } from "react-dom";

export default function SubmitBtn() {
    const { pending } = useFormStatus();

return (
    <button
    type="submit"
    className='group flex items-center justify-center gap-2 tracking-wider h-[3.25rem] w-[12rem] bg-stone-900 text-white rounded-full outline transition-all drop-shadow focus:scale-110 hover:scale-110 hover-bg-stone-950 active:scale-105 focus:ring-4 focus:ring-offset-2 focus:ring-cyan-500 hover:scale-105 m-2'
    disabled={pending}
    >
        {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white disabled:scale-100 disabled:bg-opacity-6"></div>
    ) : (
        <>
    Send message
    <FaPaperPlane className='text-cyan-400 text-xs transition-all opacity-70 inline-block ml-[0.5] w-5 h-6 mb-1 group-hover:translate-x-1 group-hover:-translate-y-1' />
    </>
    )}
    </button>
);
}
