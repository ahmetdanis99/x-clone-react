import Premium from "~/layouts/main/rightbar/premium";
import Topics from "~/layouts/main/rightbar/topics";
import Search from "./search";
import WhoFollow from "./who-follow";

export default function RightBar() {
  return (
    <aside className="w-[350px] mr-2.5">
      <Search />
      <Premium />
      <Topics />
      <WhoFollow/>
    </aside>
  );
}
