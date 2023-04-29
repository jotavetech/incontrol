import { Dashboard } from "../../components";

export function Entries() {
  return (
    <>
      <div className="pt-16 md:pt-24 overflow-hidden">
        <div className="p-4 lg:pl-64 flex flex-col">
          <h1 className="text-2xl md:text-3xl font-semibold">
            Here is all your{" "}
            <span className="text-secondary-color">entries</span>
          </h1>
          <p className="text-lg md:text-xl mt-1 text-gray-300">
            You can order by values
          </p>
          <Dashboard type="entry" />
        </div>
      </div>
    </>
  );
}
