import React from 'react';

const Devis = () => {
  return (
    <div id='devis' className='mt-10 px-10 xl:px-32'>
      <div className='flex flex-col gap-8 bg-brand bg-opacity-[89%] rounded-[18px] lg:rounded-[30px] py-10 p-6 lg:p-[5rem] mix-blend-multiply'>
        <p className='text-white text-[12px] lg:text-2xl xl:pr-16'>Pour plus d&apos;information sur nos prestation n&apos;hésitez pas à nous contacter , nos devis son sur demande et gratuit</p>
        <p className='xl:w-[450px] ml-auto font-[200] text-[12px] lg:text-2xl text-white'>cliquer ici pour demander <a className='font-[500]' href='#contact'>un devis en ligne</a></p>
      </div>
    </div>
  );
};

export default Devis;