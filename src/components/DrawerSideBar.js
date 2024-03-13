import React from 'react'
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import ToggleButton from '@mui/material/ToggleButton';
const Drawer = () => {
    return (
        <div>
            <ToggleButton value="right" aria-label="right aligned">
                <FormatAlignRightIcon />
            </ToggleButton>
        </div>
    )
}

export default Drawer






