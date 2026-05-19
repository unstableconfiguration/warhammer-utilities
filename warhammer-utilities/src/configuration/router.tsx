
import { useState } from "react";
import Header from "../components/header";

import Dataslates from "../pages/home/dataslates";
import DiceSimulations from "../pages/home/dice-simulations";
import Notes from "../pages/home/notes";

function Switch(props: { value: string }) {
    switch (props.value) {
        case 'dataslates': return <Dataslates />;
        case 'dice-simulations': return <DiceSimulations />;
        case 'notes': return <Notes />;
        default: return <Dataslates />;
    }
}

export default function Router() {
    const [route, setRoute] = useState('');

    const onNavigate = function (page: string) {
        history.pushState(null, '', page);
        setRoute(page);
    }

    return (
        <>
            <Header onNavigate={onNavigate} />
            <Switch value={route} />
        </>
    )
}