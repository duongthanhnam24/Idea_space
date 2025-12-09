export default function Input({ placeholder, name , type, value, className }) {
    return (
        <input className={`${className} bg-white ` } placeholder={placeholder} name={name} type={type} value={value} required/>
    )
}