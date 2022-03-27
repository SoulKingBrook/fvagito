import React from "react";
function ItemCards(props) {
  return (
    <div className="p-2">
      <div className="shadow-sm p-3 my-0 rounded-lg border-0 bg-white break-words">
        <div className="flex flex-row">
          <div className="flex-1">
            <div>
              <img
                className="w-5 h-5 rounded-md object-cover"
                src="data:image/jpeg;base64,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"
              />
            </div>

            <div className="font-sans font-medium text-gray-800">
              {props.name}
            </div>
            <div className="text-sm text-gray-700">{props.price}</div>
            <div className="text-sm text-gray-500 text-ellipsis...">
              <p className="text-clip overflow-hidden ...">
                {props.description}
              </p>
            </div>
          </div>
          <div className="flex flex-col pl-5">
            <img
              className=" w-28 h-24 object-cover border-1 border-red-600 rounded-xl"
              src={props.img}
            />
            <div className="pt-2 w-28 ">
              <div className=" bg-red-100 rounded-md h-8">
                {props.count == 0 ? (
                  <button
                    className="text-center w-full h-full font-sans font-medium text-xl text-red-400"
                    onClick={() => props.increment(props.index)}
                  >
                    ADD
                  </button>
                ) : (
                  <div className="flex flex-row">
                    <button
                      className=" flex-1 rounded-l-md text-2xl font-medium text-red-500"
                      onClick={() => {
                        if (props.count > 0) props.decrement(props.index);
                      }}
                    >
                      -
                    </button>
                    <div className="flex-1 text-center my-1">
                      <span className="text-center font-medium text-red-500">
                        {props.count}
                      </span>
                    </div>
                    <button
                      className=" flex-1 rounded-r-md text-lg font-normal text-red-500"
                      onClick={() => props.increment(props.index)}
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCards;
