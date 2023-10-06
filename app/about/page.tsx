import Image from 'next/image';

export default function About() {
    return (
        <main className="relative w-full h-fit">
            <section className="relative flex flex-col w-full max-w-7xl h-fit gap-4 sm:gap-8 p-6 sm:p-8 m-auto">
                <div className="relative w-full h-full max-h-[512px] max-w-7xl overflow-hidden flex items-center justify-center rounded-lg">
                    <Image
                        src={`/asset/image/banner.webp`}
                        alt={'One Piece Banner'}
                        width={1280}
                        height={720}
                        sizes="(max-width: 639px) 640px, (max-width: 767px) 768px, (max-width: 1023px) 1024px, 1280px"
                        className="animate-skeketon dark:animate-skeketonDark h-full w-full object-cover select-none"
                        priority
                    />
                </div>

                <h1 className="font-bold text-2xl sm:text-3xl">Welcome to the One Pace website!</h1>
                <div className="relative flex md:grid md:grid-cols-2 flex-col w-full h-fit gap-4 sm:gap-8">
                    <div className="relative flex flex-col w-full h-fit gap-2">
                        <h3 className="font-semibold text-xl sm:text-2xl text-blue-500">What is One Pace?</h3>

                        <p className="opacity-80">
                            One Pace is a fan project that recuts the One Piece anime in an endeavor to bring it more in
                            line with the pacing of the original manga by Eiichiro Oda.
                        </p>

                        <p className="opacity-80">
                            The team accomplishes this by removing filler scenes not present in the source material.
                            This process requires meticulous editing and quality control to ensure seamless music and
                            transitions.
                        </p>
                    </div>

                    <div className="relative flex flex-col w-full h-fit gap-2">
                        <h3 className="font-semibold text-xl sm:text-2xl text-blue-500">How to Watch One Pace</h3>

                        <p className="opacity-80">
                            We have more than 380 episodes on our Watch page to download. Please see the{' '}
                            <strong>#frequently-asked-questions</strong> channel in our Discord guild for detailed
                            instructions about watching them on your device.
                        </p>
                    </div>

                    <div className="relative flex flex-col w-full h-fit gap-2">
                        <h3 className="font-semibold text-xl sm:text-2xl text-blue-500">How to Contribute</h3>

                        <p className="opacity-80">
                            We are looking for Japanese-to-English translators, quality checkers, and timers for the
                            video editing portion of the project. In addition, we are looking for web developers with
                            Typescript and NextJS experience, illustrators, and English translators for the website.
                        </p>

                        <p className="opacity-80">
                            Please sign up in our <strong>#recruitment</strong> Discord channel.
                        </p>
                    </div>
                </div>

                <div className="relative flex flex-col w-full mt-8">
                    <h2 className="font-bold text-2xl sm:text-3xl">The Team</h2>
                    <small className="max-w-full text-sm opacity-80">52 active members</small>
                </div>

                <div className="relative flex flex-wrap w-full h-fit gap-4 lg:gap-8">
                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">Akamizu</p>

                        <small className="max-w-full text-sm opacity-80">
                            German Team Leader, Japanese to German translation, Website German translator
                        </small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">AphantasticRabbit</p>

                        <small className="max-w-full text-sm opacity-80">Subtitle editing</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">arch1t3cht</p>

                        <small className="max-w-full text-sm opacity-80">
                            Japanese to English translation, German Team, Timing, Typesetting, Software, Website Team,
                            Website German translator
                        </small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">Azathanai</p>

                        <small className="max-w-full text-sm opacity-80">Social media</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">Clamia</p>

                        <small className="max-w-full text-sm opacity-80">French Team</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">Corazon</p>

                        <small className="max-w-full text-sm opacity-80">
                            Italian Team Leader, Website Italian translator
                        </small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">Datenshi</p>

                        <small className="max-w-full text-sm opacity-80">Graphics, Timing</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">DemonRin</p>

                        <small className="max-w-full text-sm opacity-80">
                            Japanese to English translation, Graphics, Visual effects design, Wiki Council
                        </small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">El Señor Banano</p>

                        <small className="max-w-full text-sm opacity-80">Spanish Team, Leader of Spanish Dub</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">Elusive</p>

                        <small className="max-w-full text-sm opacity-80">Website developer, Website Team</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">EvoWarrior5</p>

                        <small className="max-w-full text-sm opacity-80">Subtitle editing</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">Fedew</p>

                        <small className="max-w-full text-sm opacity-80">Video editing</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">Feeso</p>

                        <small className="max-w-full text-sm opacity-80">
                            Video editing, Quality Control (QC), Wiki Council
                        </small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">Firewolf (Shichibukai Fansub)</p>

                        <small className="max-w-full text-sm opacity-80">
                            Spanish Team Leader, Japanese to Spanish translation
                        </small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">FJATP</p>

                        <small className="max-w-full text-sm opacity-80">
                            Spanish Team, Website Spanish translator
                        </small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">gab</p>

                        <small className="max-w-full text-sm opacity-80">Timing, Typesetting, Subtitle editing</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">Gabingus</p>

                        <small className="max-w-full text-sm opacity-80">Artist, Website Team</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">Gaijin</p>

                        <small className="max-w-full text-sm opacity-80">
                            Lead Japanese Translator, Japanese to English translation, Wiki Council
                        </small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">Galaxy 9000</p>

                        <small className="max-w-full text-sm opacity-80">
                            Lead Video Editor, Project Manager, Quality Control (QC), Wiki Council
                        </small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">Gavynnnnn</p>

                        <small className="max-w-full text-sm opacity-80">Video raws, Creditless openings</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">Gi-a Fosu</p>

                        <small className="max-w-full text-sm opacity-80">Lead Website Architect</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">Gigglebot</p>

                        <small className="max-w-full text-sm opacity-80">Video editing</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">Halee</p>

                        <small className="max-w-full text-sm opacity-80">Music Master, Wiki Council</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">Harley the Apothecary</p>

                        <small className="max-w-full text-sm opacity-80">Social media</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">KaitouYahiko</p>

                        <small className="max-w-full text-sm opacity-80">
                            Graphics, Karaoke timing, Timing, Visual effects design
                        </small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">LordOfMostlyMe</p>

                        <small className="max-w-full text-sm opacity-80">Portuguese Team</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">Meggo</p>

                        <small className="max-w-full text-sm opacity-80">Video editing</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">NAGATEI</p>

                        <small className="max-w-full text-sm opacity-80">Spanish Team, Website Team</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">Naoya7</p>

                        <small className="max-w-full text-sm opacity-80">
                            Japanese to Portuguese translation, Portuguese Team
                        </small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">PamkinPinguin</p>

                        <small className="max-w-full text-sm opacity-80">
                            Japanese to English translation, Artist, Website Team
                        </small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">PaTomatito</p>

                        <small className="max-w-full text-sm opacity-80">Spanish Team, Spanish Dub QC</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">Pepperjack</p>

                        <small className="max-w-full text-sm opacity-80">Lead Quality Control, Wiki Council</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">PhosCity</p>

                        <small className="max-w-full text-sm opacity-80">Typesetting, Timing, Software</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">Pocosaco</p>

                        <small className="max-w-full text-sm opacity-80">Spanish Team, Quality Control (QC)</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">Poppy</p>

                        <small className="max-w-full text-sm opacity-80">Subtitle editing</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">Puma</p>

                        <small className="max-w-full text-sm opacity-80">German Team</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">Qasim</p>

                        <small className="max-w-full text-sm opacity-80">
                            Arabic Team Leader, Website Arabic translator
                        </small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">Ravenfire</p>

                        <small className="max-w-full text-sm opacity-80">Subtitle Editing Manager</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">Raiyan</p>

                        <small className="max-w-full text-sm opacity-80">Quality Control (QC)</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">RedHawk02</p>

                        <small className="max-w-full text-sm opacity-80">
                            Lead Content Manager, Video encoding, Website developer, Software
                        </small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">Scolines</p>

                        <small className="max-w-full text-sm opacity-80">Quality Control (QC)</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">sewil</p>

                        <small className="max-w-full text-sm opacity-80">
                            Video editing, Timing, Software, Graphics, Wiki Council
                        </small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">Silence</p>

                        <small className="max-w-full text-sm opacity-80">Subtitle editing</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">Soturno Samurai</p>

                        <small className="max-w-full text-sm opacity-80">
                            Portuguese Team Leader, Website Portuguese translator
                        </small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">Teenator</p>

                        <small className="max-w-full text-sm opacity-80">German Team</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">themuffinman985</p>

                        <small className="max-w-full text-sm opacity-80">Subtitle editing</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">Train</p>

                        <small className="max-w-full text-sm opacity-80">Content Manager</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">TRIX</p>

                        <small className="max-w-full text-sm opacity-80">
                            French Team Leader, Japanese to French translation, Website French translator
                        </small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">Umim</p>

                        <small className="max-w-full text-sm opacity-80">
                            Spanish Team, Website Spanish translator
                        </small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">Westfal</p>

                        <small className="max-w-full text-sm opacity-80">Subtitle editing</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">Zenef</p>

                        <small className="max-w-full text-sm opacity-80">
                            Lead Subtitle Editor, Video editing, Quality Control (QC), Project Manager, Timing, Website
                            Team, Wiki Council
                        </small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">4Eyes</p>

                        <small className="max-w-full text-sm opacity-80">Italian Team</small>
                    </div>
                </div>

                <div className="relative flex flex-col w-full mt-8">
                    <h2 className="font-bold text-2xl sm:text-3xl">Third Party Contributors</h2>
                    <small className="max-w-full text-sm opacity-80">18 contributors</small>
                </div>

                <div className="relative flex flex-wrap w-full h-fit gap-4 lg:gap-8">
                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">ALPhantom</p>

                        <small className="max-w-full text-sm opacity-80">Arabic subtitles</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">Al3asq</p>

                        <small className="max-w-full text-sm opacity-80">Arabic subtitles</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">CovertArab</p>

                        <small className="max-w-full text-sm opacity-80">Website Arabic translator</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">Crunchyroll</p>

                        <small className="max-w-full text-sm opacity-80">
                            Arabic subtitles, German subtitles, English subtitles, Portuguese subtitles
                        </small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">df68</p>

                        <small className="max-w-full text-sm opacity-80">Video raws</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">ESPADAS-3ASQ</p>

                        <small className="max-w-full text-sm opacity-80">Arabic subtitles</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">Esther</p>

                        <small className="max-w-full text-sm opacity-80">Website Chinese translator</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">Funimation</p>

                        <small className="max-w-full text-sm opacity-80">English subtitles, Video raws</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">Kaerizaki Fansub</p>

                        <small className="max-w-full text-sm opacity-80">French subtitles</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">KiyoshiSubs</p>

                        <small className="max-w-full text-sm opacity-80">Arabic subtitles</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">Muhyee</p>

                        <small className="max-w-full text-sm opacity-80">Website Greek translator</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">Neonomi</p>

                        <small className="max-w-full text-sm opacity-80">Website Russian translator</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">Neo-Raws</p>

                        <small className="max-w-full text-sm opacity-80">Video raws</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">Randy Troy</p>

                        <small className="max-w-full text-sm opacity-80">Youtuber</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">Shichibukai Fansub</p>

                        <small className="max-w-full text-sm opacity-80">Spanish subtitles</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">Super-down</p>

                        <small className="max-w-full text-sm opacity-80">Arabic subtitles</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">Toei Animation</p>

                        <small className="max-w-full text-sm opacity-80">Japanese subtitles</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">Yibis Fansubs</p>

                        <small className="max-w-full text-sm opacity-80">English subtitles</small>
                    </div>
                </div>

                <div className="relative flex flex-col w-full mt-8">
                    <h2 className="font-bold text-2xl sm:text-3xl">Former Team Members</h2>
                    <small className="max-w-full text-sm opacity-80">41 former members</small>
                </div>

                <div className="relative flex flex-wrap w-full h-fit gap-4 lg:gap-8">
                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">Alasta</p>

                        <small className="max-w-full text-sm opacity-80">Quality Control (QC)</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">BabOu1331</p>

                        <small className="max-w-full text-sm opacity-80">French Team</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">Bastia</p>

                        <small className="max-w-full text-sm opacity-80">
                            Recruiter, Spanish Team, Website Spanish translator, Timing
                        </small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">BernieCrane</p>

                        <small className="max-w-full text-sm opacity-80">Quality Control (QC), Social media</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">CyanRyan</p>

                        <small className="max-w-full text-sm opacity-80">Subtitle editing</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">CyberLariat</p>

                        <small className="max-w-full text-sm opacity-80">Community Liaison</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">Daniel</p>

                        <small className="max-w-full text-sm opacity-80">Subtitle editing</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">Danpmss</p>

                        <small className="max-w-full text-sm opacity-80">
                            Japanese to English translation, Quality Control (QC)
                        </small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">DraSleek</p>

                        <small className="max-w-full text-sm opacity-80">Timing</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">Dumbird</p>

                        <small className="max-w-full text-sm opacity-80">Video editing</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">DolphinWeabu</p>

                        <small className="max-w-full text-sm opacity-80">Quality Control (QC)</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">FhdKSA</p>

                        <small className="max-w-full text-sm opacity-80">
                            Japanese to Arabic translation, Arabic Team
                        </small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">Floa</p>

                        <small className="max-w-full text-sm opacity-80">German Team</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">Girl-Krillin</p>

                        <small className="max-w-full text-sm opacity-80">
                            Artist, Graphics, Visual effects design, Website Team
                        </small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">Grug</p>

                        <small className="max-w-full text-sm opacity-80">Quality Control (QC)</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">Hadohado</p>

                        <small className="max-w-full text-sm opacity-80">Portuguese Team</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">Honoka</p>

                        <small className="max-w-full text-sm opacity-80">Quality Control (QC)</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">Ibfinity</p>

                        <small className="max-w-full text-sm opacity-80">
                            Japanese to Arabic translation, Arabic Team, Website Arabic translator
                        </small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">iconsumekidneys</p>

                        <small className="max-w-full text-sm opacity-80">Timing</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">ItsKipz</p>

                        <small className="max-w-full text-sm opacity-80">Quality Control (QC)</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">JT-421</p>

                        <small className="max-w-full text-sm opacity-80">Subtitle editing</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">Lance</p>

                        <small className="max-w-full text-sm opacity-80">Timing</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">LucasGirau</p>

                        <small className="max-w-full text-sm opacity-80">Spanish Team</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">MadieV</p>

                        <small className="max-w-full text-sm opacity-80">Music Master</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">MonkeyDIm</p>

                        <small className="max-w-full text-sm opacity-80">Spanish Team, Recruiter</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">Mr. Luffy</p>

                        <small className="max-w-full text-sm opacity-80">Quality Control (QC)</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">Munlyte</p>

                        <small className="max-w-full text-sm opacity-80">Subtitle editing</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">M7MD</p>

                        <small className="max-w-full text-sm opacity-80">Arabic Team Leader</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">Ninja</p>

                        <small className="max-w-full text-sm opacity-80">Video editing</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">rangicus</p>

                        <small className="max-w-full text-sm opacity-80">
                            Japanese to English translation, Subtitle editing
                        </small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">RaySJ</p>

                        <small className="max-w-full text-sm opacity-80">Arabic Team</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">RealFolk</p>

                        <small className="max-w-full text-sm opacity-80">Subtitle editing</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">Rocks D. Xebec</p>

                        <small className="max-w-full text-sm opacity-80">Arabic Team, Website Arabic translator</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">Sami.</p>

                        <small className="max-w-full text-sm opacity-80">Website Team, Website Arabic translator</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">shows</p>

                        <small className="max-w-full text-sm opacity-80">
                            Japanese to Italian translation, Italian Team, Website Italian translator
                        </small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">TheFVguy</p>

                        <small className="max-w-full text-sm opacity-80">Quality Control (QC)</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">Val*</p>

                        <small className="max-w-full text-sm opacity-80">French Team</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">VeggieGuy</p>

                        <small className="max-w-full text-sm opacity-80">Subtitle editing</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">vô danh</p>

                        <small className="max-w-full text-sm opacity-80">German Team</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">Void42</p>

                        <small className="max-w-full text-sm opacity-80">French Team</small>
                    </div>

                    <div className="relative flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33%-1.5rem)] h-fit">
                        <p className="font-semibold text-l sm:text-xl text-blue-500">Zorohack</p>

                        <small className="max-w-full text-sm opacity-80">French Team, Website French translator</small>
                    </div>
                </div>
            </section>
        </main>
    );
}
