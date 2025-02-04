
import React, { useState } from "react";
import { StapperCardInfo } from "./Array";
import { Link } from 'react-router-dom';


const Stepper = () => {
  const steps = ["stap 1", "stap 2", "stap 3"];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  return (
    <>
    <section className="md:w-[1440px] flex flex-col justify-center items-center"> 
      <div className="flex justify-between items-center md:max-w-[598px]  ">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && "active"} ${
              (i + 1 < currentStep || complete) && "complete"
            } `}
          >
            <div className="step">
              {i + 1 < currentStep || complete ? <i class="fa-solid fa-check"></i> : i + 1}
            </div>
            <p className="text-gray-500">{step}</p>
          </div>
        ))}
      </div>


        {/* card desine */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-5 ">
          {StapperCardInfo.map(({img, head, des}, i) => (
            <div key={i} className="w-[235px] h-[269px] bg-[#F4F4F5] px-3 py-5">
              <div>
                  <img src={img} alt="" />
              </div>
              <div className=' max-w-[195px] flex flex-col pt-20'>
                <h5 className="text-[20px] font-bold ">{head}</h5>
                <p className="text-sm">{des}</p>
              </div>
             
            </div>
          ))}
        </div>

     <div className="flex justify-center">
       {   
        <Link to={currentStep === steps.length ? "/stap" : ""} >
              {!complete && (
              <button
                className="btn "
                onClick={() => {
                  currentStep === steps.length
                    ? setComplete(true)
                    : setCurrentStep((prev) => prev + 1);
                }}
              >
                {currentStep === steps.length ? "Get started" : "Next"}
              </button>
            )}
        </Link> 
        }
    </div>
    </section>
    </>
  );
};

export default Stepper;