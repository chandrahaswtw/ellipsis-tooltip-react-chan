import React, { useState, useEffect, useCallback, useMemo } from 'react';
import './EllipsisToolTip.css';
import ReactTooltip from "react-tooltip";
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const EllipsisToolTip = (props) => {

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

    // REBUILDING THE CODE --> CONDITIONAL REBUILDING
    useEffect(() => {
        ReactTooltip.rebuild();
    });

    return (
        <React.Fragment>
            <div data-tip data-for={tid} className="OuterDivStylesEllipsisToolTipChan" onMouseEnter={mouseEnterHandler} style={props.style}>
                {props.children}
            </div>
            {
                showTooltip && <ReactTooltip id={tid} effect="solid" backgroundColor="black" {...props.options}>
                    {props.children}
                </ReactTooltip>
            }
        </React.Fragment>
    )
}

EllipsisToolTip.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]).isRequired,
    options : PropTypes.object,
    style : PropTypes.object
}

export default EllipsisToolTip;