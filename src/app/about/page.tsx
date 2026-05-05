import SoftSkillsSection from "@/components/SoftSkillsSection";
import HardSkillsSection from "@/components/HardSkillsSection";

export default function About() {
    return (
        <main className="w-full">

            <h1 className="text-4xl font-bold text-primary mt-16 max-w-6xl mx-auto ">ABOUT ME</h1>

            <SoftSkillsSection />
            <HardSkillsSection />
        </main>
    );
}