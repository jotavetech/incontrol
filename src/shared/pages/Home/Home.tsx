import { HeadMenu, Menu } from "../../components";

export function Home() {
  return (
    <>
      <Menu />
      <div className="pt-16 md:pt-24">
        <div className="p-4 lg:pl-64">
          <div className="flex flex-col md:flex-row gap-5 md:gap-10">
            <HeadMenu>
              <h1>Hello, it's good to see you!</h1>
              <p>Here is a summary of your finances</p>
              <ul>
                <li>
                  Piggy Bank: <span>$1000,00</span>
                </li>
                <li>
                  Entries Total: <span>$1000,00</span>
                </li>
                <li>
                  Spents Total: <span>$1000,00</span>
                </li>
                <li>
                  Remaining Money : <span>$1000,00</span>
                </li>
              </ul>
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
