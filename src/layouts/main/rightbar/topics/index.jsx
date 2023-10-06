import SidebarSection from "~/componenets/sidebar-section";
import { topics } from "~/utils/const";
import Topic from "./topic";

export default function Topics() {
  return (
    <SidebarSection title="İlgini çekebilecek gündemler" more="/trends">
      {topics.map((topic, index) => (
        <Topic item={topic} key={index} />
      ))}
    </SidebarSection>
  );
}
