import ChangelogHero from '@/components/Changelog/Hero';
import ChangelogList from '@/components/Changelog/List';
export const metadata = {
    title: 'Change Log ',
};
function App() {
    return (
        <div>
            <ChangelogHero />
            <ChangelogList />
        </div>
    );
}

export default App;
