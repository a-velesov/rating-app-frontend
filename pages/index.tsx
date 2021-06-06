import {Button} from "../components";

export default function Home(): JSX.Element {
  return (
    <div>
      Hello World
        <Button arrow="down" appereance="primary">
            Hi
        </Button>
        <Button appereance="ghost">
            Hi
        </Button>
    </div>
  );
}
