import React from 'react';

const Contact = () => {
  return (
    <div id='contact' className="flex flex-col gap-5 lg:gap-[5rem] px-7 xl:px-32">
      <div>
        <p className="text-brand font-bold text-center text-[18px] lg:text-4xl">
          Contact
        </p>
        <p className="text-brand font-medium text-[13px] lg:text-2xl text-center">
          N&apos;HÉSITEZ PAS À NOUS ENVOYER UN MESSAGE
        </p>
      </div>
      <div className="border-[0.5px] border-brand rounded-[25px] p-5 lg:p-[4rem]">
        <div className="flex flex-col xl:flex-row lg:justify-between xl:gap-16">
          <div className="flex justify-center">
            <iframe
              className="w-full h-[280px] xl:w-[404px] lg:h-[377px] 2xl:w-[600px] rounded-[20px] border-brand border-[0.5px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41849.531570547!2d2.004247732778879!3d49.03729563656351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6f4c72416d693%3A0x40b82c3688b34e0!2sCergy%2C%20France!5e0!3m2!1sfr!2stn!4v1706881815597!5m2!1sfr!2stn"
              loading="lazy"
            />
          </div>
          <div className='flex flex-col'>
            <div className="flex flex-col lg:gap-5 justify-between mt-10">
              <div className="flex flex-col gap-5">
                <div className="flex flex-row justify-between lg:justify-normal gap-2 lg:gap-5">
                  <input
                    className="border-brand bg-[#fcf8f8] border-[0.5px] rounded-[10px] w-full h-[45px] lg:h-[49px] pl-5 text-black"
                    placeholder="Nom"
                  />
                  <input
                    className="border-brand bg-[#fcf8f8] border-[0.5px] rounded-[10px] w-full h-[45px] lg:h-[49px] pl-5 text-black"
                    placeholder="Prenom"
                  />
                </div>
                <input
                  className="border-brand bg-[#fcf8f8] border-[0.5px] rounded-[10px] h-[45px] lg:h-[49px] pl-5 text-black"
                  placeholder="Adresse Email"
                />
                <textarea
                  className="border-brand bg-[#fcf8f8] border-[0.5px] rounded-[10px] h-[100px] pl-5 pt-3 text-black"
                  placeholder="Message"
                />
              </div>
            d</div>
            <button className="bg-[#7D2233] py-3 w-[154px] rounded-[10px] hover:bg-brand duration-300 ml-auto mt-8 mb-2">
              Envoyer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;