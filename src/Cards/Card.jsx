import { useState, useEffect } from 'react';

const Card = ({ item, index, idx, setIdx, checkSm, setCheckSm }) => {
  let [val, setVal] = useState('-18');

  let ent = (index) => {
    setIdx(index);
  };

  let lev = () => {
    setIdx(4);
  };

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setCheckSm(true)
    }
    if (window.innerWidth >= 768) {
      setCheckSm(false)
    }
    
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setCheckSm(true)
      }
      if (window.innerWidth >= 768) {
        setCheckSm(false)
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {checkSm ? (

        <div className="card w-full h-auto bg-[#B5ACA0] border-2 border-black rounded-xl p-6 sm:p-8 flex-shrink-0 font-[Canopee] break-all transition-all duration-300 shadow-lg">
          <div style={{ whiteSpace: 'nowrap' }} className="flex flex-col items-center gap-4">
            <img
              style={{
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1), 0 -4px 8px rgba(0, 0, 0, 0.1)',
              }}
              className="w-[30vw] h-[30vw] sm:w-32 sm:h-32 rounded-full object-cover"
              src={item.img}
              alt={item.name}
            />
            <h3 className="font-bold text-[5vw] sm:text-[2rem] text-center">{item.name}</h3>
          </div>

          <p className="text-[5vw] sm:text-[1.7rem] mt-[2vw] text-center">{item.review}</p>
        </div>
      ) 
      : 
      (
        <div
          onMouseEnter={() => ent(index)}
          onMouseLeave={() => lev(index)}
          style={{
            transform:
              idx < index
                ? `translateX(${(index - 1) * val}vw)`
                : `translateX(${val * index}vw)`,
          }}
          className="card md:w-[36vw] md:h-auto lg:h-fit bg-[#B5ACA0] border-2 border-black rounded-xl p-8 flex-shrink-0 font-[Canopee] break-all transition-all duration-600 shadow-lg"
        >
          <div style={{ whiteSpace: 'nowrap' }} className="flex items-center gap-5">
            <img
              style={{
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1), 0 -4px 8px rgba(0, 0, 0, 0.1)',
              }}
              className="w-20 h-20 rounded-full object-cover"
              src={item.img}
              alt={item.name}
            />
            <h3 className="font-bold text-[1.5rem] md:text-[1.5rem]">{item.name}</h3>
          </div>

          <p className="text-[1.1rem] mt-[2vw]">{item.review}</p>
        </div>
      )}
    </>
  );
};

export default Card;
