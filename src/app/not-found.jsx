import Link from "next/link";

const NotFound = ()=> {
    return (
       <div>
        <h2>Not Found</h2>
        <p>Page that u looking is not exist</p>
        <Link href="/">return home</Link>
       </div>
    )
}

export default NotFound;