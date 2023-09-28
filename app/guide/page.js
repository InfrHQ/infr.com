import ResourceCardList from '@/components/Resource/List';
import ResourceHero from '@/components/Resource/Hero';

function App() {
    return (
        <div>
            <ResourceHero title={'Guides'} />
            <ResourceCardList itemType={'guide'} />
        </div>
    );
}

export default App;
