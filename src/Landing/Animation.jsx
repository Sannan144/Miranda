import React from 'react';

const Animation = () => {
  return (
    <div className='anim-parent fixed z-50 w-full h-screen overflow-hidden'>
        <div className="animation w-full h-screen flex justify-center items-center bg-[#C3BCB2] scale-x-[.3]">
          <div className="anim-text h-screen w-[320px] text-center bg-[#222] flex justify-center items-center">
            <h1 style={{writingMode:'sideways-lr'}} className="text-[9.4vw] font-bold text-[#C3BCB2]">MIRANDA</h1>
          </div>
        </div>
    </div>
  );
};

export default Animation;
