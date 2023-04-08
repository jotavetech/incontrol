import { HeadMenu, Menu, ResumeItems } from "../../components";

export function Home() {
  return (
    <>
      <Menu />
      <div className="pt-16 md:pt-24">
        <div className="p-4 lg:pl-64">
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
              <h1>oi</h1>
            </HeadMenu>
          </div>
        </div>
      </div>
    </>
  );
}
