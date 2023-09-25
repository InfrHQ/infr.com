function Stats() {
  return(<section className="dark:bg-gray-900">
    <div className="max-w-screen-xl px-4 py-4 mx-auto text-center lg:py-8 lg:px-6">
      <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
        <div className="flex flex-col items-center justify-center">
          <dt className="mb-2 text-3xl md:text-4xl font-extrabold text-slate-800 dark:text-slate-300">100K+</dt>
          <dd className="font-light text-slate-500 dark:text-gray-400">
            recordings stored
          </dd>
        </div>
        <div className="flex flex-col items-center justify-center">
          <dt className="mb-2 text-3xl md:text-4xl font-extrabold text-slate-800 dark:text-slate-300">1T+</dt>
          <dd className="font-light text-slate-500 dark:text-gray-400">
            GB of data
          </dd>
        </div>
        <div className="flex flex-col items-center justify-center">
          <dt className="mb-2 text-3xl md:text-4xl font-extrabold text-slate-800 dark:text-slate-300">10K+</dt>
          <dd className="font-light text-slate-500 dark:text-gray-400">
            replays this month
          </dd>
        </div>
      </dl>
    </div>
  </section>);
}

export default Stats;