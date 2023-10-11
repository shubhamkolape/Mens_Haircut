import React, { useState } from "react";

function HaircutBox() {
  const [selectedOption, setSelectedOption] = useState(40);
  const [selectedStyles, setSelectedStyles] = useState([]);

  const styles = [
    { label: "Beard Trim", price: 32 },
    { label: "Head Shave", price: 40 },
    { label: "Deluxe Cut", price: 80 },
  ];

  const handleCheckboxChange = (index) => {
    const updatedStyles = [...selectedStyles];
    if (updatedStyles.includes(index)) {
      updatedStyles.splice(updatedStyles.indexOf(index), 1);
    } else {
      updatedStyles.push(index);
    }
    setSelectedStyles(updatedStyles);
  };

  const getTotalPrice = () => {
    const stylesTotal = selectedStyles.reduce(
      (total, index) => total + styles[index].price,
      0
    );
    return selectedOption + stylesTotal;
  };

  return (
    <div className="max-w-sm  mx-auto p-[20px] rounded-lg shadow bg-white text-[#000]">
      <div className="flex flex-col relative pb-4  ">
        <h1 className="mb-2 text-xl">Customize "Mens's Haircut"</h1>
        <i class="fa-solid fa-x  absolute right-0 top-2 text-sm "></i>
        <span className="text-[#000] ">$ 140 - $ 1250</span>
      </div>
      <div className="border-t border-dotted border-black"></div>
      <div className="pt-3.5 pb-4">
        <h2 className=" text-xl font-semibold mb-5">Men's Haircut</h2>
        <div className="flex justify-between">
          {/* <p>Men's Haircut</p> */}
          <label htmlFor="mens-haircut">Men's Haircut - $ 40</label>
          <div className="flex items-center gap-2">
            <p>$ 40</p>
            <input
              type="radio"
              id="mens-haircut"
              name="haircut-option"
              className="mt-[2px] "
              checked={selectedOption === 40}
              onChange={() => setSelectedOption(40)}
            />
          </div>
        </div>
      </div>
      <div className="border-t border-dotted border-black"></div>

      <div className="pt-3.5 pb-1">
      <h2 className=" text-xl font-semibold mb-5">Select Style</h2>

        {styles.map((style, index) => (
          <div  key={index}
           className="flex justify-between mb-3">
            <label
             htmlFor={`style-${index}`}>{`${style.label} `}
             </label>
            <div className="flex items-center gap-2">
              <p>$ {`${style.price}`}</p>
              <input
                type="checkbox"
                id={`style-${index}`}
                checked={selectedStyles.includes(index)}
                onChange={() => handleCheckboxChange(index)}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-dotted border-black"></div>

      <div className="pt-4 flex items-center justify-between ">
        <div className=" inline-flex items-center gap-[15px] px-2 py-1   h-[30px] border-2 border-black rounded-sm  ">
        <i class="fa-solid fa-minus text-[8px]"></i>
        <p>{selectedStyles.length}</p>
        <i class="fa-solid fa-plus text-[8px]"></i>
        </div>
          <button  className="bg-black text-white w-[90px] h-[30px] rounded-sm"
          > Add $ {getTotalPrice()}</button>
      </div>

      
    </div>
  );
}

export default HaircutBox;
