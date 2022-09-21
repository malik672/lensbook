import React from "react";
import MarketCard from "./MarketCard";

const SubBody = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center place-content-center pt-10 pb-10" style={{background:"linear-gradient(223.57deg, #0f5f4b 11.28%, #09152f 111.42%)", boxShadow:"0px 8px 20px 0 rgba(0,0,0,0.1)"}}>
      <div class="shadow-2xl relative text-center text-black pt-4 pb-10 p-8 m-6 mt-4 mb-12 rounded-[40px] bg-slate-50 ">
        <p class="text-xl font-bold uppercase pb-2">Market</p>
        <p>
          Lorem ipsum dolor sit amet, adfsdf consectet adipiscing elit, asdsed
          do eiusmod tempor incididunt ut labore et dolore
        </p>
        <div
          class="absolute flex flex-col flex-grow-0 flex-shrink-0 gap-2.5 rounded -bottom-8 right-1/2 translate-x-1/2"
          style={{background:"linear-gradient(to bottom right, #3a42e1 2.88%, #620c90 98.14%)", boxShadow:"0px 16px 24px 0 rgba(0,0,0,0.15)"}}
        >
          <button>
            <div class="p-4">
              <p class="flex-grow-0 flex-shrink-0 text-base font-bold text-slate-200">
                MARKET
              </p>
            </div>
          </button>
        </div>
      </div>
      <div class="shadow-2xl relative text-center text-black pt-4 pb-10 p-8 m-6 mt-4 mb-12 rounded-[40px] bg-slate-50 ">
        <p class="text-xl font-bold uppercase pb-2">Dashboard</p>
        <p>
          Lorem ipsum dolor sit amet, adfsdf consectet adipiscing elit, asdsed
          do eiusmod tempor incididunt ut labore et dolore
        </p>
        <div
          class="absolute flex flex-col flex-grow-0 flex-shrink-0 gap-2.5 rounded -bottom-8 right-1/2 translate-x-1/2"
          style={{background:"linear-gradient(to bottom right, #3a42e1 2.88%, #620c90 98.14%)", boxShadow:"0px 16px 24px 0 rgba(0,0,0,0.15)"}}
        >
          <button>
            <div class="p-4">
              <p class="flex-grow-0 flex-shrink-0 text-base font-bold text-slate-200">
                DASHBOARD
              </p>
            </div>
          </button>
        </div>
      </div>
      <div class="shadow-2xl relative text-center text-black pt-4 pb-10 p-8 m-6 mt-4 mb-12 rounded-[40px] bg-slate-50 ">
        <p class="text-xl font-bold uppercase pb-2">Publish</p>
        <p>
          Lorem ipsum dolor sit amet, adfsdf consectet adipiscing elit, asdsed
          do eiusmod tempor incididunt ut labore et dolore
        </p>
        <div
          class="absolute flex flex-col flex-grow-0 flex-shrink-0 gap-2.5 rounded -bottom-8 right-1/2 translate-x-1/2"
          style={{background:"linear-gradient(to bottom right, #3a42e1 2.88%, #620c90 98.14%)", boxShadow:"0px 16px 24px 0 rgba(0,0,0,0.15)"}}
        >
          <button>
            <div class="p-4">
              <p class="flex-grow-0 flex-shrink-0 text-base font-bold text-slate-200">
                PUBLISH
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubBody;
