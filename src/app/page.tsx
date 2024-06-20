// "use client";
// import { darkAtom, settingsClickedAtom } from "@/atoms";
// import Background from "@/components/Background";
// import Clock from "@/components/Clock";
// import Footer from "@/components/Footer";
// import Header from "@/components/Header";
// import Settings from "@/components/Settings";
// import clsx from "clsx";
// import { useAtomValue } from "jotai";

// export default function Home() {
//   const toggleDark = useAtomValue(darkAtom);
//   return (
//     <div className="w-screen h-screen absolute">
//       {/* {settingsClicked ? <Settings /> : <Clock />} */}
//       {/* <div className="absolute opacity-[0.99] z-10 w-[350px] h-[450px] bg-white">
//         <Settings />
//       </div>
//       <div className="absolute opacity-[0.99] z-[1]">
//         <Clock />
//       </div> */}
//       {/* SET THE BACKGROUND TO WHITE OR THE CONTENT WILL SHOW THRU IT EVEN IF ITS A LOWER Z-INDEX. SAVE YOURSELF FROM 2 DAYS OF WASTED TIME. */}
//       <Settings />
//       <Clock />
//     </div>
//   );
// }

"use client";
import { darkAtom, settingsClickedAtom } from "@/atoms";
import Background from "@/components/Background";
import Clock from "@/components/Clock";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Settings from "@/components/Settings";
import clsx from "clsx";
import { useAtomValue } from "jotai";

export default function Home() {
  const settingsClicked = useAtomValue(settingsClickedAtom);
  const toggleDark = useAtomValue(darkAtom);
  return (
    <>
      <div
        className={clsx(
          "gap-2 grid grid-rows-layout grid-cols-1 justify-center min-w-screen min-h-screen font-display cursor-default",
          {
            "dark dark:bg-black dark:text-white": toggleDark,
          }
        )}
      >
        <Header></Header>
        <div className="flex flex-col items-center">
          {settingsClicked ? <Settings /> : <div />}
          <Clock />
          <Background />
        </div>

        <Footer></Footer>
      </div>
    </>
  );
}
