import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>This page is now available offline!</h1>
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Meta-Logo.png/800px-Meta-Logo.png?20211104123859"
        alt=""
        width={100}
        height={100}
      />
      <Link href="/">back home</Link>
    </div>
  );
}
