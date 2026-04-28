import CardsLink from "@/components/CardsLink";
import Hero from "@/components/Hero";
import projectsImage from "@/assets/images/project-card-image.jpg";
import aboutImage from "@/assets/images/about-card-image.png";

export default function Home() {
  return (
    <>
      <main className="w-full">
        <Hero />

        <h2 className="text-2xl font-bold text-white mt-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">Explore my work</h2>
        <div className="flex flex-row gap-4 justify-start items-center w-full max-w-6xl  mx-auto px-4 sm:px-6 lg:px-8 my-12">
          <CardsLink title="ABOUT" description="Learn more about me and my journey." image={aboutImage} link="/about" />
          <CardsLink title="PROJECTS" description="See my projects." image={projectsImage} link="/projects" />
        </div>
      </main>
    </>
  );
}
