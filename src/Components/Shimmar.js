const Shimmar = () => {
  return (
    <div className="flex flex-wrap">
      {Array(15)
        .fill("")
        .map((e, index) => (
          <div key={index} className="w-64 h-64 m-5 bg-gray-100"></div>
        ))}
    </div>
  );
};

export default Shimmar;
