import StickyHeader from "~/componenets/sticky-header";
import Tab from "~/componenets/tab";

export default function Home() {
  return (
    <>
      <StickyHeader title="Anasayfa"/>
      <Tab activeTab="for-you">
        <Tab.Items>
          <Tab.Item id="for-you">
            Sana Özel
          </Tab.Item>
          <Tab.Item id="followings">
            Takip edilenler
          </Tab.Item>
        </Tab.Items>
        <Tab.Content id="for-you">
          1.Content
        </Tab.Content>
        <Tab.Content id="followings">
          2.Content
        </Tab.Content>
      </Tab>
      Home Comp!
    </>
  );
}
