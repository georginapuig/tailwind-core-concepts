export default function Hover() {
  return (
    <div className='pb-5'>
      <p className='text-3xl font-extrabold pt-2 pb-5'>Handling Hover</p>
      <div>
        <button className='bg-teal-500 rounded-full font-semibold hover:bg-teal-600 hover:border-transparent'>
          Save changes
        </button>
      </div>
    </div>
  );
}
