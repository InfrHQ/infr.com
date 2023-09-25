import ChangelogItem from './Item';

async function getChangelogData() {
    let data = await fetch(`${process.env.INFR_SERVER_HOST}/api/changelog`, {
      headers: { 'Infr-Admin-Secret': process.env.INFR_ADMIN_SECRET },
      next: { revalidate: 1800 }
    });
    let json = await data.json();
    return json;
}

async function ChangelogList() {
  const changelogItems = await getChangelogData();
  return (
    <div className="justify-center px-4 py-16 mx-auto max-w-6xl sm:px-6 lg:px-8 ">
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        {changelogItems.map((item, index) => (
          <ChangelogItem
            name={item?.name}
            date={item?.date}
            descriptionList={item?.descriptionList}
            slug={item?.slug}
            key={index}
          />
        ))}
      </ol>
    </div>
  );
}

export default ChangelogList;
