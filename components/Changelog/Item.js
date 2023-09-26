import { ArrowRightIcon } from '@radix-ui/react-icons';
import { postConvertTimestamp } from '@/tools/Time';

function ChangelogItem({ date, name, descriptionList, slug }) {
    let dateObj = postConvertTimestamp(date);
    return (
        <li className="mb-10 ml-4 p-6 bg-white bg-opacity-50 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 w-1/2">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-slate-500 dark:text-slate-500">
                {dateObj.title}
            </time>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">{name}</h3>
            {descriptionList.map((description, index) => (
                <p className="mb-1 text-base font-normal text-slate-500 dark:text-slate-400" key={index}>
                    {description}
                </p>
            ))}
            <a
                href={'/post/' + slug}
                className="mt-4 inline-flex items-center px-4 py-2 text-sm font-medium text-slate-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-slate-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
                Learn more <ArrowRightIcon className="w-3 h-3 ml-2" aria-hidden="true" />
            </a>
        </li>
    );
}

export default ChangelogItem;
