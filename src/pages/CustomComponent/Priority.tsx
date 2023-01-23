 
import React  from 'react'
import Chip from '@mui/material/Chip'

interface ITryProps {
    colorPriority?: string | boolean
}
const Priority: React.FC<ITryProps> = ({ colorPriority }) => {
    return (
        <>
            <Chip
                style={{
                    borderRadius: '5px',
                    fontSize: '14px',
                    letterSpacing: '0.8px'
                }}
                size="small"
                label={colorPriority ? 'Acil' : 'Bekle'}
                color={colorPriority ? 'error' : 'primary'}
            />
        </>
    )
}

export default Priority
