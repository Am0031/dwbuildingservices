import { useState } from "react";
import useWindowDimensions from "../utils/windowSize";
import { useNavigate } from "react-router-dom";
import dwlogo from "./dwbs.png";
import { Menu, Image } from "antd";
import { MenuOutlined } from "@ant-design/icons";

export const Navbar = () => {
  //some states
  const { width } = useWindowDimensions();
  const [current, setCurrent] = useState("about");
  const navigate = useNavigate();

  //some useEffect

  const sections = [
    { label: "About", key: "about", path: "/" }, // remember to pass the key prop which is required for mapping
    { label: "Projects", key: "projects", path: "/projects" },
    { label: "Contact", key: "contact", path: "/contact" },
  ];

  const onClickLinks = (e) => {
    setCurrent(e.key);
    navigate(`${e.keyPath}`, { replace: true });
  };

  return (
    <div className="navbar">
      <div className="navTitle">
        <Image
          className="logo-image"
          width={100}
          src={dwlogo}
          preview={false}
        />
      </div>

      <div className="navLink">
        {width > 420 && (
          <Menu
            onClick={onClickLinks}
            selectedKeys={[current]}
            style={{ flex: "auto", minWidth: 0 }}
            mode="horizontal"
            items={sections}
            overflowedIndicator={<MenuOutlined />}
          />
        )}
        {width < 420 && (
          <Menu
            onClick={onClickLinks}
            selectedKeys={[current]}
            items={sections}
            style={{ width: width, textAlign: "center" }}
          />
        )}
      </div>
    </div>
  );
};
