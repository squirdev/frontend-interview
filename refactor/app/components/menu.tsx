import { useEffect, useMemo, useState } from "react";

export default function Menu() {
  const [menuList, setMenuList] = useState(null); // Start as null to avoid rendering

  useEffect(() => {
    async function fetchData() {
      const data = await getData();
      setMenuList(data);
    }
    fetchData();
  }, []);

  const menuSize = useMemo(() => {
    if (!menuList || menuList.length === 0) {
      return "no menu";
    } else if (menuList.length < 3) {
      return "short menu";
    } else {
      return "long menu";
    }
  }, [menuList]);

  if (!menuList) {
    return null; // Don't render anything until data is obtained
  }

  return (
    <div className="px-4">
      <h1 className="my-1 w-fit font-semibold">{menuSize}</h1>
      {menuList.map((item) => (
        <ul key={item.id}>
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
        { id: 1, name: "steak" },
        { id: 2, name: "chicken" },
      ]);
    }, 3000);
  });
}
