import Link from "next/link";

export default function NotFound(){
    return <div className="error">
    <h1 >Page is Not Found </h1>
    <h2 className="error">Either you fuck yourself or go on home page</h2>
    <Link href='/'>Home Page</Link>
    </div>
  
}