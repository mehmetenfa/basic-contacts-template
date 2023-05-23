import React from "react";
import Button from "../Button";
import Person from "../Person";
import SearchIcon from "@mui/icons-material/Search";
import Img1 from '../../assets/Img1.png'
import Img2 from '../../assets/img2.png'

const Sidebar = () => {
  return (
    <div className="flex flex-col">
      <header className="flex flex-row items-center justify-between pl-8 pr-8 p-6 border-b-2 border-borderColor">
        <div className="flex flex-row items-center gap-4">
          <div>
            <Button icon="menu" />
          </div>
          <div className="font-bold text-xl leading-8">
            <h1 className="text-sidebarH1">Contacts</h1>
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <Button icon="arrowLeft" />
          <Button icon="arrowRight" />
        </div>
      </header>
      <main className="pl-8 pr-8 p-8 flex flex-col gap-5">
        <div className="flex- flex-col gap-2">
          <h3 className="font-normal text-searchContact text-sm">Search for a contact</h3>
          <div className="flex flex-row items-center justify-between">
            <h1 className="text-sidebarH1 font-bold text-base">Name, email or phone number</h1>
            <SearchIcon style={{ fontSize: 18, marginRight: 10 }} />
          </div>
          <div></div>
        </div>
        <div className="flex flex-col gap-8">
          <Person name='Nicholas Gordon' role='Developer' dotColor='dotColor1' bgColor='navigation' />
          <Person name='Bradley Malone' role='Sales Manager' dotColor='dotColor2' img={Img1} bgColor='navigation' />
          <Person name='Johanna Stevens' role='Project Manager' dotColor='dotColor1' img={Img2} color='logoColor' bgColor='slate-200' />
          <Person name='Marvin Lambert' role='Designer' dotColor='dotColor2' img={Img1} bgColor='navigation' />
          <Person name='Teresa Lloyd' role='PR agent' dotColor='dotColor2' bgColor='navigation' />
          <Person name='Fred Haynes' role='Support Team' dotColor='dotColor3' img={Img1} bgColor='navigation' />
          <Person name='Rose Peters' role='Project Manager' dotColor='dotColor3' img={Img2} bgColor='navigation' />
          <Person name='Brian Watson' role='Developer' dotColor='dotColor1' bgColor='navigation' />
          <Person name='Hettie Richardson' role='Developer' dotColor='dotColor1' bgColor='navigation' />
        </div>
      </main>
    </div>
  );
};

export default Sidebar;
