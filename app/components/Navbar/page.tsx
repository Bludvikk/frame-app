"use client";

import Container from "../Container";
import Orgs from "./components/Orgs";
import { Search } from "./components/Search";
import AddBusiness from "./components/addBusiness";
import UserMenu from "./components/UserMenu";

const Navbar = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div
        className="py-4 
          border-b-[1px]"
      >
        <Container>
          <div
            className="
            flex 
            flex-row 
            items-center 
            justify-between
            gap-3
            md:gap-0
          "
          >
            <Orgs />
            <AddBusiness />
            {/* <MainNav className="mx-6" /> */}
            <div className="ml-auto flex items-center space-x-4">
              <Search />
              <UserMenu />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
