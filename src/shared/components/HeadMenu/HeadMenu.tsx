export function HeadMenu({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return (
    <div className="w-full md:w-[50%] h-[170px] md:h-[200px] bg-list-bg rounded-xl">
      {children}
    </div>
  );
}
