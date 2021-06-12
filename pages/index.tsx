import {Paragraph, Rating} from "../components";
import {useState} from "react";

export default function Home(): JSX.Element {
    const [rating, setRating] = useState(2);
  return (
    <div>
      Hello World
        <Paragraph size="l">
            Hi
        </Paragraph>
        <Rating rating={rating} setRating={setRating} isEditable={true} />
    </div>
  );
}
