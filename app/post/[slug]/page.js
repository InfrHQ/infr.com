import PostContent from '@/components/Post/Content';

async function Home({ params }) {
    return (
        <div>
            <PostContent slug={params.slug} />
        </div>
    );
}

export default Home;
