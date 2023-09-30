import ArcInfo from '@/component/ArcInfo';
import Episodes from '@/component/Episodes';
import arcsData from '@/data/data.json';
import { ArcSchema, type Arc } from '@/data/schemas';

export interface ArcProps {
    params: { index: string };
}

export async function generateStaticParams() {
    const arcs = arcsData.map((arc: any) => ArcSchema.parse(arc) as Arc);

    return arcs.map((_, index) => ({ index: index.toString() }));
}

export default function Arc({ params }: ArcProps) {
    const { index } = params;

    const arcs = arcsData.map((arc: any) => ArcSchema.parse(arc) as Arc);
    const arc = arcs[parseInt(index)];
    const { invariant_title, translations } = arc;

    return (
        <>
            <ArcInfo index={parseInt(index)} arc={arc} />
            <Episodes index={index} arc={arc} />
        </>
    );
}
