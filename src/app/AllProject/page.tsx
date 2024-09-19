import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";

export default function yes() {
    return <>
        <section>
            <MaxWidthWrapper>
                <div className="flex flex-col items-center justify-center h-screen">
                    <h1 className="text-6xl font-bold text-center">Yes</h1>
                    <div className="flex items-center justify-center">
                    </div>
                    <Link href="/" className="mt-4 text-blue-600 hover:text-blue-800">
                        Back to Home
                    </Link>
                </div>
            </MaxWidthWrapper>
        </section>
    </>;
}