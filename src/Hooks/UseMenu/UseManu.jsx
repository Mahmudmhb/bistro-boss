import { useEffect, useState } from "react";

const UseManu = () => {
  const [menus, setMenus] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("/public/menu.json")
      .then((res) => res.json())
      .then((data) => {
        setMenus(data);
        setIsLoading(false);
      });
  }, []);
  return [menus, isLoading];
};

export default UseManu;
