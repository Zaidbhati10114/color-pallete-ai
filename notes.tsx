<div className="w-[250px] h-[200px] box-content rounded relative">
  <div className="grid grid-cols-1 rounded-t-lg text-white">
    <div
      style={{ backgroundColor: `#${one}` }}
      className={`bg-[${one}] h-[8vh] rounded-t-lg relative`}
      onMouseEnter={() => handleMouseEnter(one)}
      onMouseLeave={handleMouseLeave}
    >
      {activeHex === one && (
        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black transition duration-300 delay-400 ease-in-out font-medium">
          {one}
        </p>
      )}
    </div>

    {/* Second Div */}
    <div
      style={{ backgroundColor: `#${two}` }}
      className={`bg-[${two}] h-[6vh] relative`}
      onMouseEnter={() => handleMouseEnter(two)}
      onMouseLeave={handleMouseLeave}
    >
      {activeHex === two && (
        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black transition duration-300 delay-400 ease-in-out font-medium">
          {two}
        </p>
      )}
    </div>

    {/* Third Div */}
    <div
      style={{ backgroundColor: `#${three}` }}
      className={`bg-[${three}] h-10 relative`}
      onMouseEnter={() => handleMouseEnter(three)}
      onMouseLeave={handleMouseLeave}
    >
      {activeHex === three && (
        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black transition duration-300 delay-400 ease-in-out font-medium">
          {three}
        </p>
      )}
    </div>

    {/* Fourth Div */}
    <div
      className={`bg-[${four}] h-10 rounded-b-lg relative`}
      onMouseEnter={() => handleMouseEnter(four)}
      onMouseLeave={handleMouseLeave}
    >
      {activeHex === four && (
        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black transition duration-300 delay-400 ease-in-out font-medium">
          {four}
        </p>
      )}
    </div>
  </div>
</div>;
