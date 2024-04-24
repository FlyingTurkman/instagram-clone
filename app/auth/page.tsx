import LoginForm from "@/components/auth/LoginForm";
import Image from "next/image";
















export default function Page() {
    return(
        <div className="container mx-auto min-h-screen py-12 gap-6">
            <div className="flex flex-row w-1/2 mx-auto">
                <div className="flex flex-shrink-0 basis-1/2 px-6">
                    <Image
                    src={'/images/screen-shot-1.png'}
                    alt="Screen Shot"
                    width={425}
                    height={863}
                    className="object-contain w-full"
                    />
                </div>
                <div className="flex flex-shrink-0 basis-1/2 px-6">
                    <LoginForm/>
                </div>
            </div>
        </div>
    )
}