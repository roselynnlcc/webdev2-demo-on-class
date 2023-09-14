import EventList from "./event-list";
import Link from "next/link";

export default function Page() {
    return <main>Hello World!
        <Link href="/">Home</Link>
        <EventList />
    </main>;

}
