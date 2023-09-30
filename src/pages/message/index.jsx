import { useParams } from "react-router-dom";

export default function Message() {
  const { slug } = useParams();
  
  return <div>Message Comp! - {slug}</div>;
}
