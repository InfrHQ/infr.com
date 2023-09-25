import { VideoIcon, FileTextIcon, ArrowRightIcon } from '@radix-ui/react-icons';
import { postConvertTimestamp } from '@/tools/Time';

function BlogCard(
  {blogType,
  dateCreated,
  name,
  description,
  authorImageUrl,
  authorName,
  slug}
) {
  return (
    <article className="p-6 bg-white bg-opacity-50 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-between items-center mb-5 text-gray-500">
        <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center  py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
          {String(blogType).toLowerCase() === 'tutorial' ? (
            <VideoIcon className="mr-1 w-5 h-5" />
          ) : (
            <FileTextIcon className="mr-1 w-5 h-5" />
          )}
          {blogType}
        </span>
        <span className="text-sm">{postConvertTimestamp(dateCreated).title}</span>
      </div>
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <a href={'/post/' + slug}>{name}</a>
      </h2>
      <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
        {description}
      </p>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img
            className="w-7 h-7 rounded-full"
            src={authorImageUrl}
            alt={authorName + ' avatar'}
          />
          <span className="font-medium dark:text-white">{authorName}</span>
        </div>
        <a
          href={'/post/' + slug}
          className="inline-flex items-center font-medium text-primary-600 dark:text-white hover:underline"
        >
          Read more
          <ArrowRightIcon className="ml-2 w-4 h-4" />
        </a>
      </div>
    </article>
  );
}

export default BlogCard;
