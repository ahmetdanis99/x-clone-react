import Button from "~/componenets/button";
import SidebarSection from "~/componenets/sidebar-section";
import { whoFollowUsers } from "~/mock";
import { useAccount } from "~/store/auth/hooks";

export default function WhoFollow() {
  const account = useAccount();

  return (
    <SidebarSection
      title="Kimi takip etmeli"
      more={`/connect_people?user_id=${account.id}`}
    >
      {whoFollowUsers.map((user, index) => (
        <button className="py-3 px-4 flex gap-3 ">
          <img
            src={user.avatar}
            className="w-10 h-10 rounded-full object-cover"
            alt=""
          />
          <div className="flex-1 flex flex-col text-left">
            <div className="text-[15px] text-[#e7e9ea] font-bold leading-5">
              {user.fullName}
            </div>
            <div className="text-[15px] text-[#71767b]">@{user.username}</div>
          </div>
          <div>
            <Button variant="white"size="small">Takip et</Button>
          </div>
        </button>
      ))}
    </SidebarSection>
  );
}
