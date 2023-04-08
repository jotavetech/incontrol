import { HeadMenu, Menu, MenuList, ResumeItems } from "../../components";

export function Home() {
  return (
    <>
      <Menu />
      <div className="pt-16 md:pt-24">
        <div className="p-4 lg:pl-64 flex flex-col">
          <div className="flex flex-col md:flex-row gap-5 md:gap-10">
            <HeadMenu>
              <h1 className="text-xl md:text-2xl font-semibold">
                <span className="text-secondary-color">Hello,</span> it's good
                to see you!
              </h1>
              <p className="text-gray-100 text-sm md:text-base">
                Here is a summary of your finances
              </p>
              <ResumeItems
                entries={100}
                spents={50}
                piggyBank={500}
                remaining={50}
              />
            </HeadMenu>
            <HeadMenu>
              <div className="flex flex-col items-center">
                <h1 className="text-xl md:text-2xl font-semibold mt-3 md:mt-5">
                  <span className="text-secondary-color">Do</span> not waste
                  your time!
                </h1>
                <p className="text-gray-100 text-sm md:text-base text-center">
                  Add your expenses and income to keep an eye on your financial
                  life
                </p>
                <button className="w-12 mt-3 h-12 rounded-full bg-secondary-color text-3xl hover:scale-105 transition-transform">
                  +
                </button>
              </div>
            </HeadMenu>
          </div>
          <div className="flex flex-col md:flex-row gap-16 md:gap-10 mt-16 pb-10">
            <MenuList type="entries">
              <h1>placeholder</h1>
            </MenuList>
            <MenuList type="spents">
              <h1>placeholder</h1>
            </MenuList>
          </div>
        </div>
      </div>
    </>
  );
}
