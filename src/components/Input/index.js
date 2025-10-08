export default function Input({ placeholder, name , type, value }) {
    return (
        <input className='w-[372px] h-[42px] p-2' placeholder={placeholder} name={name} type={type} value={value} required/>
    )
}