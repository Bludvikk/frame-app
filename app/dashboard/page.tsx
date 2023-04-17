"use client";

import Container from "../components/Container";
import Search from "../components/Navbar/Search";
import Table from "./table/Table";
import Avatar from "./avatar";
import { RxAvatar } from "react-icons/rx";

const Dashboard = () => {
  return (
    <div className="flex flex-start justify-start pt-20 pb-10">
      <div className="bg-slate-200 w-full h-2/5 rounded-md">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center pt-4 pb-4 pr-4 pl-4">
            <Search />
          </div>
          {/* <div className="flex items-center justify-end pt-4 pb-4 pr-4">
            <RxAvatar
              className="bg-white text-black text-3xl rounded-full  border
     border-white cursor-pointer"
            />
          </div> */}
        </div>
        <div className="pt-4 pl-4">
          <Table />

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
