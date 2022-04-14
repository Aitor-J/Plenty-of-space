import React from 'react';

const HomeFrame = ({name, desc, img}) => {
  console.log(name)
    return (
        <div className={`${img} bg-no-repeat bg-cover bg-center`}>
            
            
        <div className=" bg-gray-50/50  w-80 h-full  mx-72 contrast-200"> 
        

        <div className="p-6 space-y-6">
            <h1 className="text-white text-5xl text-center font-bold shadow-current  ">
            {name}
            </h1>
    </div>
  
<div className="p-6 space-y-6">
          <p className="text-base leading-relaxed text-white font-medium my-10 drop-shadow-md   ">
          Characteristic
          </p>
          <p className="text-base leading-relaxed text-white drop-shadow-2xl ">
         {desc}
         </p>
        </div>
       
</div>
</div>


         
      );
    };

export default HomeFrame;

