import Image from "next/image";
import heroImage from "@/assets/images/hero-image.jpg";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="mx-auto w-full max-w-6xl overflow-hidden px-4 sm:grid sm:grid-cols-2 sm:items-center sm:px-6 lg:px-8">
            <div className="py-8 md:py-12 lg:py-32">
                <div className="mx-auto max-w-xl ltr:sm:text-left rtl:sm:text-right">
                    <h2 className="text-2xl flex flex-col font-bold text-gray-900 md:text-3xl dark:text-white">
                        <span>Hello! My name is</span>
                        <span className="text-primary text-4xl font-bold">Jonathan Luis Uber</span>
                    </h2>

                    <p className="hidden w-90 text-gray-500 md:mt-4 md:block dark:text-gray-400 pr-4">
                        I am a systems analyst and developer in training. I am constantly learning and improving my skills in FullStack development, seeking to create modern and efficient solutions.
                    </p>

                    <div className="mt-8">
                        <Link href="/projects" className="inline-block rounded-sm bg-primary px-12 py-3 text-sm font-medium text-white transition hover:bg-primary-dark focus:ring-2 focus:ring-primary focus:outline-hidden">
                            See my projects
                        </Link>
                    </div>
                </div>
            </div>

            <Image alt="Imagem de destaque do hero" width={500} height={500} src={heroImage} className="h-full w-full object-cover sm:h-[calc(100%-2rem)] sm:self-end rounded-ss-[30px] rounded-br-[30px] md:h-[calc(100%-4rem)] opacity-75 md:rounded-ss-[60px] md:rounded-br-[60px]" />
        </section>
    );
}