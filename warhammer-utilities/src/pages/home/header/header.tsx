
import * as React from 'react'
import { Tabs, Tab } from '@mui/material'

export default function Header() {
    const [selection, setSelection] = React.useState('default');
    const onSelect = function (_: React.SyntheticEvent, value: string) {
        setSelection(value);
    }

    return (
        <Tabs value={selection} onChange={onSelect}>
            <Tab label='Test 1' />
            <Tab label='Test 2' />
            <Tab label='Test 3' />
        </Tabs>
    );
}