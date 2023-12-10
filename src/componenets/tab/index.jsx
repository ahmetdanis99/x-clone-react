import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Content from "./content";
import { TabContext } from "./context";
import Item from "./item";
import Items from "./items";

export default function Tab({ children, activeTab }) {
  const [active, setActive] = useState(activeTab);

  useEffect(() => {
    setActive(activeTab);
  }, [activeTab]);

  const contents = children.filter((c) => c.type === Content);
  const items = children.filter((c) => c.type === Items);

  const data = {
    active,
    setActive,
  };

  return (
    <TabContext.Provider value={data}>
      <div className="border-b border-[color:var(--background-third)]">
        {items}
      </div>
    </TabContext.Provider>
  );
}

Tab.Items = Items;
Tab.Item = Item;
Tab.Content = Content;

Tab.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
  activeTab: PropTypes.string.isRequired,
};
