import Image from "next/image";
import React from "react";
import HeadetItems from "./header/HeadetItems";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon, 
  UserIcon
} from "@heroicons/react/outline";

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 items-center justify-between h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl ">
        <HeadetItems title="HOME" Icon={HomeIcon} />
        <HeadetItems title="TRENDING" Icon={LightningBoltIcon} />
        <HeadetItems title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeadetItems title="COLLECTIONS" Icon={CollectionIcon} />
        <HeadetItems title="SEARCH" Icon={SearchIcon} />
        <HeadetItems title="ACCOUNT" Icon={UserIcon} />
      </div>
      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
        alt=" "
      />
    </header>
  );
}

export default Header;
