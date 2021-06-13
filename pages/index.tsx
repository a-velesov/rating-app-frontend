import {Paragraph, Rating} from "../components";
import {useState} from "react";
import {withLayout} from "../layout/Layout";

function Home(): JSX.Element {
    const [rating, setRating] = useState(2);
    return (
        <>
            Hello World
            <Paragraph size="l">
                Hi
            </Paragraph>
            <Rating rating={rating} setRating={setRating} isEditable={true} />
        </>
    );
}

export default withLayout(Home);
