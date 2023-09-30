import { useParams } from "react-router-dom";

export default function Bookmark() {

    const { slug } = useParams();
    return(
        
        <div>Bookmark Comp! - {slug}</div>
    )
}