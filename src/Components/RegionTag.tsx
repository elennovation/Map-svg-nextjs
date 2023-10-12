import React from "react";

interface IRegiontagProps {
  selected: boolean;
  name: string;
  onClick: () => void
}

export const RegionTag: React.FC<IRegiontagProps> = ({
  selected = false,
  name = "X",
  onClick
}) => {
  return <div className={selected ? "region selected" : "region"} onClick={onClick}>{name}</div>;
};
