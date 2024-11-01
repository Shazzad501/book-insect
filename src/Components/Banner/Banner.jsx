const Banner = () => {
  return (
      <div className="w-11/12 mx-auto lg:px-16 py-20">
        <div className="flex flex-col gap-10 md:gap-16 lg:gap-0 lg:flex-row lg:justify-between items-center">
          <div className="w-full lg:w-[60%] lg:text-start text-center">
            <h1 className="text-5xl font-bold">Books to freshen up <br className="hidden lg:block"/> your bookshelf</h1>
            <button className="btn bg-[#23BE0A] mt-7 font-bold text-white hover:bg-[#23BE0A]">View The List</button>
          </div>
          <div className=" w-full lg:w-[40%]">
            <img
              src="/books.jpg"
              className="rounded-lg w-full"/>
          </div>
        </div>
      </div>
  );
};

export default Banner;