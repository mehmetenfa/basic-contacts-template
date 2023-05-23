import React from "react";
import Button from "../Button";
import Img2 from "../../assets/img2.png";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";

const Content = () => {
  return (
    <div className="flex flex-col w-full">
      <header className="flex flex-row items-center gap-5 w-full justify-end pl-8 pr-8 p-6 border-b-2 border-borderColor">
        <div>
          <Button icon="person" />
        </div>
        <div className="w-[1px] h-[24px] bg-seperator" />
        <div className="flex flex-row items-center gap-2">
          <div>
            <Button icon="search" />
          </div>
          <div className="w-10 h-10 rounded-xl">
            <img src={Img2} alt="" />
          </div>
        </div>
      </header>
      <div className="flex flex-row pt-52 pl-36 gap-6">
        <div className="w-[114px] h-[114px]">
          <img src={Img2} alt="" className="w-full h-full" />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-sidebarH1 font-bold text-xl leading-8">
              Johanna Stevens
            </h1>
            <h3 className="font-normal text-searchContact text-sm">
              UX/UI Designer
            </h3>
          </div>
          <div className="flex flex-row gap-2">
            <div className="bg-logoColor text-navigation p-3 flex  items-center justify-center w-32 h-11 rounded-xl gap-2">
              <QuestionAnswerIcon style={{ fontSize: 22 }} />
              Message
            </div>
            <div className="flex flex-row gap-2">
              <Button icon="phone" />
              <Button icon="share" />
              <Button icon="dots" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 flex flex-col pr-28">
        <table className="flex flex-row gap-11 pl-12">
          <thead>
            <tr className="flex flex-col gap-10">
              <th className="font-normal text-searchContact text-sm text-end">
                Bio
              </th>
              <th className="font-normal text-searchContact text-sm text-end mt-10">
                Email
              </th>
              <th className="font-normal text-searchContact text-sm text-end mt-4">
                Dial
              </th>
              <th className="font-normal text-searchContact text-sm text-end">
                Meeting
              </th>
              <th className="font-normal text-searchContact text-sm text-end">
                Phone
              </th>
              <th className="font-normal text-searchContact text-sm text-end mt-5">
                Social
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="flex flex-col">
              <td>
                When I first got into the advertising, I was looking for the
                magical combination that would put website into the top search
                engine rankings
              </td>
              <td className="flex flex-row justify-between mt-12">
                <div className="flex flex-col">
                  <p>johanna.stevens@gmail.com</p>
                  <p>johanna.stevens@whiteui.store</p>
                </div>
                <div className="bg-primaryButton w-[76px] h-[28px] rounded-lg flex items-center justify-center">
                  <button className="text-primary">Primary</button>
                </div>
              </td>
              <td className="mt-7">j.stevens@ymsg.com</td>
              <td className="mt-9">http://go.betacall.com/meet/j.stevens</td>
              <td className="flex flex-row justify-between mt-9">
                <div className="flex flex-col">
                  <p>439-582-1578</p>
                  <p>621-770-7689</p>
                </div>
                <div className="bg-primaryButton w-[76px] h-[28px] rounded-lg flex items-center justify-center">
                  <button className="text-primary">Primary</button>
                </div>
              </td>
              <td className="mt-7 flex flex-row gap-2">
                <Button icon="facebook" />
                <Button icon="pinterest" />
                <Button icon="twitter" />
                <Button icon="linkedin" />
                <Button icon="google" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Content;

{
  /* <div className="flex flex-row">
          <div className="flex items-center justify-end w-14 border">
            <h3 className="font-normal text-searchContact text-sm">Bio</h3>
          </div>
          <div className="">
            <p>
              When I first got into the advertising, I was looking for the
              magical combination that would put website into the top search
              engine rankings
            </p>
          </div>
        </div>
        <div>email</div>
        <div>dial</div>
        <div>meeting</div>
        <div>phone</div>
        <div>social</div> */
}
