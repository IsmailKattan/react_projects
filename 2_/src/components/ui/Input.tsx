import type { InputHTMLAttributes } from "react";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {

}

const Input  = ({...react}: IInputProps) => {
  return <input className="border-2 border-gray-300 shadow-md
   focus:border-indigo-500 focus:outline-none focus:ring-1
   focus:ring-indigo-500 rounded-md p-3 text-md
  " {...react}/>
}

export default Input;
