import Image from "next/image";
import Link from "next/link";
import type { StaticImageData } from "next/image";

interface CardsLinkProps {
    title: string;
    description: string;
    image: string | StaticImageData;
    link: string;
}

export default function CardsLink({ title, description, image, link }: CardsLinkProps) {
    return (
        <Link href={link} className="group relative block flex-1 min-h-72 overflow-hidden rounded-lg">
            <Image alt="Imagem de destaque do card" width={500} height={500} src={image} className="absolute inset-0 h-full w-full object-cover opacity-50 transition-opacity group-hover:opacity-75" />

                <div className="relative p-4 sm:p-6 lg:p-8">
                    <p className="text-sm font-medium tracking-widest text-primary uppercase">{title}</p>

                    <p className="text-xl font-bold text-white sm:text-2xl">{title}</p>

                    <div className="mt-32 sm:mt-48 lg:mt-64">
                        <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                            <p className="text-base text-white font-medium">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
        </Link>
    );
}

