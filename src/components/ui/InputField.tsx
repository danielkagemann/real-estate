type InputFieldProps = {
   label: string,
   placeholder?: string,
   value: string,
   rows?: number,
   onChange: (value: string) => void
}

export const InputField = ({ label, placeholder, value, rows = 1, onChange }: InputFieldProps) => {
   return (
      <div className="flex flex-col pb-2">
         <label className="text-xs font-semibold text-gray-700">{label}</label>
         {rows === 1 &&
            <input type="text"
               value={value}
               onChange={(e) => onChange(e.target.value)}
               placeholder={placeholder}
               className="w-full bg-gray-100 rounded-md p-2 focus:outline-none focus:bg-gray-500 focus:text-white" />
         }
         {rows > 1 &&
            <textarea rows={rows}
               value={value}
               onChange={(e) => onChange(e.target.value)}
               placeholder={placeholder}
               className="w-full bg-gray-100 rounded-md p-2 focus:outline-none focus:bg-gray-500 focus:text-white" />
         }
      </div>
   );
}
