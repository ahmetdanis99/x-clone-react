import StickyHeader from "~/componenets/sticky-header";
import Tab from "~/componenets/tab";
import Followwings from "./followings";
import ForYou from "./for-you";

export default function Home() {
  return (
    <>
      <Tab activeTab="for-you">
        <StickyHeader title="Anasayfa">
          <Tab.Items>
            <Tab.Item id="for-you">Sana Özel</Tab.Item>
            <Tab.Item id="followings">Takip edilenler</Tab.Item>
          </Tab.Items>
        </StickyHeader>
        <Tab.Content id="for-you">
          <ForYou />
        </Tab.Content>
        <Tab.Content id="followings">
          <Followwings /  >
        </Tab.Content>
      </Tab>
    </>
  );
}
