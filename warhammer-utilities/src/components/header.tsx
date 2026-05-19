
import * as React from 'react'
import { Tabs, Tab } from '@mui/material'

interface Properties {
    onNavigate: (page: string) => void
}

export default function Header(props: Properties) {
    const [selected, setSelection] = React.useState('dataslates');

    const onSelect = (e: React.SyntheticEvent, value: string) => {
        setSelection(value);
        props.onNavigate(value);
    }

    return (
        <Tabs value={selected} onChange={onSelect}>
            <Tab label='Dataslates' value='dataslates' />
            <Tab label='Simulations' value='dice-simulations' />
            <Tab label='Notes' value='notes' />
        </Tabs>
    );
}