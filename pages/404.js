import Image from "next/image";
import Link from "next/link";

const Error = () => {
    return (
        <div>
            <Image src='/404.jpg' width={1404} height={50}></Image>
            <Link href='/'>
                <button className="btn btn-primary">Back</button>
            </Link>
        </div>
    );
};

export default Error;