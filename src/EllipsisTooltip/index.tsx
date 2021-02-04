import React, { useState, useEffect, useCallback, useMemo } from 'react';
import './index.css';
import ReactTooltip from 'react-tooltip';
import { v4 as uuidv4 } from 'uuid';

interface propTypes {
    options?: any;
    style? : React.CSSProperties,
    children: React.ReactNode
}

const EllipsisToolTip: React.FC<propTypes> = (props) => {

    // TOOL TIP STATE
    const [showTooltip, setShowTooltip] = useState(false);
    // GENERATING - RANDOM ID
    const tid = useMemo(() => (uuidv4()), []);

    // MOUSE ENTER HANDLER
    const mouseEnterHandler = useCallback((e) => {
        if ((e.target.offsetWidth !== e.target.scrollWidth) && !showTooltip) {
            setShowTooltip(true);
        }
        else if ((e.target.offsetWidth === e.target.scrollWidth) && showTooltip) {
            setShowTooltip(false);
        }
    }, [showTooltip, setShowTooltip])


    return (
        <React.Fragment>
            <div data-tip data-for={tid} className="OuterDivStylesEllipsisToolTipChan" onMouseEnter={mouseEnterHandler} style={props.style}>
                {props.children}
            </div>
            {
                showTooltip && <ReactTooltip id={tid} effect="solid" {...props.options}>
                    {props.children}
                </ReactTooltip>
            }
        </React.Fragment>
    )
}

export default EllipsisToolTip;