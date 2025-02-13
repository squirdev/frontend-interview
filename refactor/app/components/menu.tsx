import { useEffect, useMemo, useState } from "react";

export default function Menu() {
  const [menuList, setmenuList] = useState([]);

  if (menuList === []) {
    return null;
  }

  useEffect(() => {
    async function fetchData() {
      const data = await getData();
      setmenuList(data);
    }
    fetchData();
  }, []);

  const menuSize = useMemo(() => {
    if (menuList.length < 3) {
      return "short menu";
    } else if (menuList.length > 3) {
      return "long menu";
    } else if (!menuList) {
      return "no menu";
    }
  }, []);

  return (
    <div className="px-4">
      <h1 className="my-1 w-fit font-semibold">{menuSize}</h1>
      {menuList.map((item, index) => (
        <ul key={index}>
          <li className="list-disc">{item.name}</li>
        </ul>
      ))}
    </div>
  );
}

function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: "steak",
        },
        {
          id: 2,
          name: "chicken",
        },
      ]);
    }, 3000);
  });
}

function getData2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: "steak",
        },
        {
          id: 2,
          name: "chicken",
        },
        {
          id: 3,
          name: "fish",
        },
      ]);
    }, 3000);
  });
}
