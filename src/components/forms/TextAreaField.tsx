interface InputFieldProps
  extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  label: string
  className?: string
}

export default function InputField({ label, ...props }: InputFieldProps) {
  return (
    <label className="form-control">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <textarea
        {...props}
        className={`textarea textarea-bordered h-24 ${props.className}`}
      ></textarea>
    </label>
  )
}
