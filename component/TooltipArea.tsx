'use client';

import { Tooltip } from 'react-tooltip';

export default function TooltipArea() {
    return (
        <div className="absolute z-50 w-screen h-screen top-0 left-0 pointer-events-none touch:hidden">
            <Tooltip id="tooltip" place="bottom" />
        </div>
    );
}
