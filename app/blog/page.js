import ResourceCardList from '@/components/Resource/List';
import ResourceHero from '@/components/Resource/Hero';
export const metadata = {
    title: 'Blog ',
};
function App() {
    return (
        <div>
            <ResourceHero title={'Blog'} />
            <ResourceCardList itemType={'blog'} />
        </div>
    );
}

export default App;
