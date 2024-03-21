import React from "react";
interface NavBarInterface {
  type?: "announcement" | "navbar";
}

const NavBar: React.FC<NavBarInterface> = ({ type }) => {
  const sponsor = [
    {
      name: "Master spas",
      website: "https://www.masterspas.com/",
      logo: "https://masterspascdn.com/img/tabs/ms-sprite.png",
      current: true,
    },
    {
      name: "Micheal Phelps signature swim spas",
      website: "https://michaelphelpsswimspa.com/",
      logo: "https://masterspascdn. com/img/tabs/mpss-sprite.png",
    },
    {
      name: "Fitness swim spas",
      website: "https://h2xswimspa.com/",
      logo: "https://masterspascdn.com/img/tabs/h2x-sprite.png",
    },
    {
      name: "Micheal philips ChillyGoat",
      website: "https://chillygoattubs.com/",
      logo: "https://masterspascdn.com/img/tabs/goat-sprite.png",
    },
  ];
  return (
    <section
      className={`px-16 ${
        type == "announcement" ? "bg-blue-400" : "bg-gray-100"
      }`}
    >
      {(type == "announcement" && (
        <div>
          <div className="flex items-center">
            {sponsor.map((item, index) => (
              <div
                key={index}
                className={`py-2 bg-cover bg-left bg-no-repeat bg-[url('${item.logo}')] w-32 h-12`}
              >
              
              </div>
            ))}
          </div>
        </div>
      )) || <div>navigation bar</div>}
    </section>
  );
};
export default NavBar;
