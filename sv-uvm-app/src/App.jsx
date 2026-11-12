import { Navigate, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import ChapterPage from './pages/ChapterPage';
import DVCareerPage from './pages/DVCareerPage';
import InterviewPage from './pages/InterviewPage';
import SocSpiProjectPage from './pages/SocSpiProjectPage';

export default function App() {
    return (
        <div className="app-layout">
            <Sidebar />
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/sv/:chapterId" element={<ChapterPage type="sv" />} />
                    <Route path="/uvm/:chapterId" element={<ChapterPage type="uvm" />} />
                    <Route path="/soc/:chapterId" element={<ChapterPage type="soc" />} />
                    {/* Extended-course data is not published to the browser yet. */}
                    <Route path="/course/:courseId/:chapterId" element={<Navigate to="/" replace />} />
                    <Route path="/career" element={<DVCareerPage />} />
                    <Route path="/interview" element={<InterviewPage />} />
                    <Route path="/soc-spi-project" element={<SocSpiProjectPage />} />
                </Routes>
            </main>
        </div>
    );
}

