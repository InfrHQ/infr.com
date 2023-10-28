import React from 'react';
import { postConvertTimestamp } from '@/tools/Time';

// Server side
async function getPostData(slug) {
    let data = await fetch(`${process.env.INFR_SERVER_HOST}/api/content?slug=${slug}`, {
        headers: { 'Infr-Admin-Secret': process.env.INFR_ADMIN_SECRET },
        next: { revalidate: 1800 },
    });
    let json = await data.json();
    return json;
}

// Components
const Author = ({ name, imageUrl, description, date }) => {
    var { datetime, title } = postConvertTimestamp(date);

    return (
        <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
            <img className="mr-4 w-16 h-16 rounded-full" src={imageUrl} alt={name} />
            <div>
                <a href="#" rel="author" className="text-xl font-bold text-gray-900 dark:text-white">
                    {name}
                </a>
                <p className="text-base text-gray-500 dark:text-gray-400">{description}</p>
                <p className="text-base text-gray-500 dark:text-gray-400">
                    <time dateTime={datetime} title={title}>
                        {title}
                    </time>
                </p>
            </div>
        </div>
    );
};

const Paragraph = ({ content }) => {
    return <p dangerouslySetInnerHTML={{ __html: content }}></p>;
};

const Heading2 = ({ content }) => {
    return <h2 dangerouslySetInnerHTML={{ __html: content }}></h2>;
};

const Heading3 = ({ content }) => {
    return <h3 dangerouslySetInnerHTML={{ __html: content }}></h3>;
};

const Heading4 = ({ content }) => {
    return <h4 dangerouslySetInnerHTML={{ __html: content }}></h4>;
};

const OrderedList = ({ items }) => {
    return (
        <ol>
            {items.map((item, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
            ))}
        </ol>
    );
};

const Figure = ({ url, caption }) => {
    return (
        <figure>
            <img src={url} alt={caption} />
            <figcaption>{caption}</figcaption>
        </figure>
    );
};

const UnorderedList = ({ items }) => {
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
            ))}
        </ul>
    );
};

const Blockquote = ({ content }) => {
    return <blockquote dangerouslySetInnerHTML={{ __html: content }}></blockquote>;
};

const PreCode = ({ content }) => {
    return (
        <pre>
            <code dangerouslySetInnerHTML={{ __html: content }}></code>
        </pre>
    );
};

const Table = ({ head, body }) => {
    return (
        <table className="table-auto">
            <thead>
                <tr>
                    {head.map((item, index) => (
                        <th key={index}>{item}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {body.map((row, index) => (
                    <tr key={index}>
                        {row.map((item, index) => (
                            <td key={index}>{item}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

async function PostContent({ slug }) {
    const data = await getPostData(slug);
    return (
        <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 dark:bg-gray-900 antialiased">
            <div className="flex justify-between px-4 mx-auto max-w-screen-xl">
                <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                    <header className="mb-4 lg:mb-6 not-format">
                        <address className="flex items-center mb-6 not-italic">
                            <Author
                                name={data?.author?.name}
                                imageUrl={data?.author?.image}
                                description={data?.author?.position}
                                date={data?.date}
                            />
                        </address>
                        <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                            {data?.title}
                        </h1>
                    </header>
                    <p className="lead">{data?.lead}</p>

                    {data?.sections.map((item, index) => {
                        switch (item.type) {
                        case 'p':
                            return <Paragraph key={index} content={item?.content} />;
                        case 'h2':
                            return <Heading2 key={index} content={item?.content} />;
                        case 'h3':
                            return <Heading3 key={index} content={item?.content} />;
                        case 'h4':
                            return <Heading4 key={index} content={item?.content} />;
                        case 'ol':
                            return <OrderedList key={index} items={item?.content} />;
                        case 'ul':
                            return <UnorderedList key={index} items={item?.content} />;
                        case 'blockquote':
                            return <Blockquote key={index} content={item?.content} />;
                        case 'pre_code':
                            return <PreCode key={index} content={item?.content} />;
                        case 'figure':
                            return <Figure key={index} url={item.url} caption={item.caption} />;
                        case 'table':
                            return <Table key={index} head={item.head} body={item.body} />;
                        case 'br':
                            return <br key={index} />;
                        case 'hr':
                            return <hr key={index} />;
                        default:
                            return null;
                        }
                    })}
                </article>
            </div>
        </main>
    );
}

export default PostContent;
