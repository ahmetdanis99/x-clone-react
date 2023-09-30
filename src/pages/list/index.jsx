import { useParams } from "react-router-dom";

export default function List() {

  const { slug } = useParams();
  return <div>List Comp! - {slug}</div>;
}
