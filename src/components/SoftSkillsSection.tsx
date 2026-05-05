import {
    Brain,
    Clock,
    GraduationCap,
    MessageSquareText,
    Shuffle,
    Users,
} from "lucide-react";

export default function SoftSkillsSection() {
    return (
        <section className="mx-auto w-full max-w-6xl">
            < div className="w-full py-10 lg:py-20" >
                <h2 className="text-2xl font-bold text-white mb-10">SOFT SKILLS</h2>
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-6 lg:gap-12">
                        <div className="space-y-6 lg:space-y-10">
                            <div className="flex gap-x-5 sm:gap-x-8">
                                <MessageSquareText className="shrink-0 mt-2 size-8 text-white" strokeWidth={1.5} />
                                <div className="grow">
                                    <h3 className="text-base sm:text-lg font-semibold text-white">
                                        Comunicação clara
                                    </h3>
                                    <p className="mt-1 text-gray-400">
                                        Saber explicar ideias técnicas e alinhar expectativas com time e stakeholders.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-x-5 sm:gap-x-8">
                                <Users className="shrink-0 mt-2 size-8 text-white" strokeWidth={1.5} />
                                <div className="grow">
                                    <h3 className="text-base sm:text-lg font-semibold text-white">
                                        Trabalho em equipe
                                    </h3>
                                    <p className="mt-1 text-gray-400">
                                        Colaborar, dar e receber feedback e manter o time avançando junto.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-x-5 sm:gap-x-8">
                                <Brain className="shrink-0 mt-2 size-8 text-white" strokeWidth={1.5} />
                                <div className="grow">
                                    <h3 className="text-base sm:text-lg font-semibold text-white">
                                        Pensamento crítico
                                    </h3>
                                    <p className="mt-1 text-gray-400">
                                        Analisar problemas, levantar hipóteses e tomar decisões com base em evidências.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6 lg:space-y-10">
                            <div className="flex gap-x-5 sm:gap-x-8">
                                <Shuffle className="shrink-0 mt-2 size-8 text-white" strokeWidth={1.5} />
                                <div className="grow">
                                    <h3 className="text-base sm:text-lg font-semibold text-white">
                                        Adaptabilidade
                                    </h3>
                                    <p className="mt-1 text-gray-400">
                                        Lidar bem com mudanças de escopo, tecnologia e prioridades sem travar o progresso.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-x-5 sm:gap-x-8">
                                <Clock className="shrink-0 mt-2 size-8 text-white" strokeWidth={1.5} />
                                <div className="grow">
                                    <h3 className="text-base sm:text-lg font-semibold text-white">
                                        Gestão de tempo e prioridades
                                    </h3>
                                    <p className="mt-1 text-gray-400">
                                        Organizar tarefas, entregar com consistência e comunicar riscos/impedimentos cedo.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-x-5 sm:gap-x-8">
                                <GraduationCap className="shrink-0 mt-2 size-8 text-white" strokeWidth={1.5} />
                                <div className="grow">
                                    <h3 className="text-base sm:text-lg font-semibold text-white">
                                        Aprendizado contínuo e proatividade
                                    </h3>
                                    <p className="mt-1 text-gray-400">
                                        Curiosidade para evoluir e iniciativa para propor melhorias antes de virar problema.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </section>
    )
}