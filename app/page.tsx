import Arcs from '@/component/Arcs';
import Stats from '@/component/Stats';

export default function Home() {
    return (
        <main className="relative w-full h-[calc(100vh-6rem)] flex flex-col items-center">
            <Arcs />
            <Stats />
        </main>
    );
}
