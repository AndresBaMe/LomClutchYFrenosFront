interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
export default function SearchInput(props: InputProps) {
  return (
    <input
      {...props}
      className="h-10 w-70 bg-white rounded-md 
                   shadow-[0_4px_12px_rgba(0,0,0,0.08)] 
                   focus: outline-none text-black p-5 mb-6
                   hover:bg-gray-200 border-1 border-gray-300"
    />
  );
}
