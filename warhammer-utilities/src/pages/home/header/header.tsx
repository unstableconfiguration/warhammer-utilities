
import * as React from 'react'
import { Tabs, Tab } from '@mui/material'

interface Props {
    onHeaderSelect: (e: React.SyntheticEvent, value: string) => void
}

export default function Header(props: Props) {
    const [selected, setSelection] = React.useState('Test 1');

    const onSelect = (e: React.SyntheticEvent, value: string) => {
        setSelection(value);
        props.onHeaderSelect(e, value);
    }

    return (
        <Tabs value={selected} onChange={onSelect}>
            <Tab label='Test 1' value='Test 1' />
            <Tab label='Test 2' value='Test 2' />
            <Tab label='Test 3' value='Test 3' />
        </Tabs>
    );
}