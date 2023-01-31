import React from "react";

function TopButtons(props) {
  const cities = [
    {
      id: 1,
      title: "Nagpur",
    },
    {
      id: 2,
      title: "Pune",
    },
    {
      id: 3,
      title: "Mumbai",
    },
    {
      id: 4,
      title: "Hyderabad",
    },
    {
      id: 5,
      title: "Kolhapur",
    },
  ];
  return (
    <div className=" items-center justify-around my-6 hidden md:flex">
      {cities.map((city) => (
        <button
          className="text-white text-lg font-medium ease-out hover:scale-x-125"
          key={city.id}
          onClick={async () => {
            await props.setQuerry({ q: city.title });
          }}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
