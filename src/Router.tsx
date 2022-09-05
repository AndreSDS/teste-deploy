import { Route, Routes } from 'react-router-dom';
import { Event } from './pages/Event';
import { SubScribe } from './pages/SubScribe';

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<SubScribe />} />
            <Route path="/event" element={<Event />} />
            <Route path="/event/lesson/:slug" element={<Event />} />
        </Routes>

    )
}