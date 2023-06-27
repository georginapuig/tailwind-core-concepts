import chatLogo from '.././img/logo.svg';

export default function Fundamentals() {
  return (
    <div className='pb-5'>
      <p className='text-3xl font-extrabold pt-2 pb-5'>
        Utility-First Fundamentals
      </p>
      <div className='mx-auto rounded-xl flex bg-white max-w-sm items-center p-6 shadow-lg space-x-4 text-left'>
        <div className='shrink-0'>
          <img className='h-12 w-12' src={chatLogo} alt='ChitChat Logo' />
        </div>
        <div>
          <h4 className='font-medium text-black text-lg '>ChitChat</h4>
          <p className='text-slate-500'>You have a new message!</p>
        </div>
      </div>
    </div>
  );
}
