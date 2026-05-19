import * as React from 'react'
import { Box } from '@mui/material'
import Header from './header/header'
// footer
// content

/* Functionality
    Searchable data slates
    Dice roller comparing x to y with mods

    mmmk so hooks
    you can define a value and a setter for it. 
    yeah this isn't too far from how I'd do it. 
    define the thing up here and pass it to the child
    the child either calls it directly or needs to make a wrapper
*/




export default function Home() {
    const [headerSelection, setHeaderSelection] = React.useState('Test 1');

    const onHeaderSelect = function (_: React.SyntheticEvent, value: string) {
        setHeaderSelection(value);
        console.log(value)
    }

    return (
        <>
            <Header onHeaderSelect={onHeaderSelect}></Header>
            <Box id='content'></Box>
        </>
    )
}