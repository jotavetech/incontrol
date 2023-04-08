import {
  HeadMenu,
  Menu,
  MenuList,
  MenuListItem,
  ResumeItems,
} from "../../components";

const fakeItemsData = [
  {
    title: "money 1",
    date: "10/12/2023",
    value: 5000,
    id: "2",
  },
  {
    title: "money 2",
    date: "10/12/2023",
    value: 5000,
    id: "3",
  },
  {
    title: "money 3",
    date: "10/12/2023",
    value: 5000,
    id: "4",
  },
  {
    title: "money 4",
    date: "10/12/2023",
    value: 5000,
    id: "5",
  },
  {
    title: "money 4",
    date: "10/12/2023",
    value: 5000,
    id: "6",
  },
  {
    title: "money 4",
    date: "10/12/2023",
    value: 5000,
    id: "7",
  },
  {
    title: "money 4",
    date: "10/12/2023",
    value: 5000,
    id: "8",
  },
];

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
              <ResumeItems entries={0} spents={0} piggyBank={0} remaining={0} />
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
              <div className="flex flex-col gap-3 overflow-y-auto h-full">
                {fakeItemsData ? (
                  fakeItemsData.map((item) => (
                    <MenuListItem
                      key={item.id}
                      date={item.date}
                      id={item.id}
                      title={item.title}
                      value={item.value}
                      type="entry"
                    />
                  ))
                ) : (
                  <span className="text-center pt-20 text-2xl text-gray-600 block">
                    Nothing found
                  </span>
                )}
              </div>
            </MenuList>
            <MenuList type="spents">
              <div className="flex flex-col gap-3 overflow-y-auto h-full">
                {fakeItemsData ? (
                  fakeItemsData.map((item) => (
                    <MenuListItem
                      key={item.id}
                      date={item.date}
                      id={item.id}
                      title={item.title}
                      value={item.value}
                      type="spent"
                    />
                  ))
                ) : (
                  <span className="text-center pt-20 text-2xl text-gray-600 block">
                    Nothing found
                  </span>
                )}
              </div>
            </MenuList>
          </div>
        </div>
      </div>
    </>
  );
}
