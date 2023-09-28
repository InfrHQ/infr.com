import ResourceCard from './Card';

async function getChangelogData(itemType) {
    let data = await fetch(`${process.env.INFR_SERVER_HOST}/api/${itemType}`, {
        headers: { 'Infr-Admin-Secret': process.env.INFR_ADMIN_SECRET },
        next: { revalidate: 1800 },
    });
    let json = await data.json();
    return json;
}

async function ResourceCardList({ itemType }) {
    const cards = await getChangelogData(itemType);
    return (
        <section className=" dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="grid gap-8 lg:grid-cols-2">
                    {cards.map((card) => {
                        return (
                            <ResourceCard
                                resourceType={card.resourceType}
                                dateCreated={card.dateCreated}
                                name={card.name}
                                description={card.description}
                                imageUrl={card.imageUrl}
                                authorImageUrl={card.authorImageUrl}
                                authorName={card.authorName}
                                slug={card.slug}
                                key={card.slug}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default ResourceCardList;
