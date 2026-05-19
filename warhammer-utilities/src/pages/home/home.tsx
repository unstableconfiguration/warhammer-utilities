import * as React from 'react'
import { Box } from '@mui/material'

// home was an ok default page
// but its also odd
// we want a base page. we need to orchestrate that at the top level - router
// beyond that, we can then load our components within it

export default function Home() {

    return (
        <>
            <Box id='content'></Box>
        </>
    )
}