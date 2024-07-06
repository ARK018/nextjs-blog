import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export default function Navbar(){
    return (
        <div className="max-w-3xl mx-auto">
            <nav className="w-full relative flex items-center justify-between px-4 py-5">
                <Link href="/" className="font-bold text-3xl">
                Tesla<span className="text-primary">Blog</span>
                </Link>
                <ModeToggle />
            </nav>
            <hr className=" dark: white"/>
        </div>
    )
}