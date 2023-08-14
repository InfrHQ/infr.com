
function FooterComponent() {
  return (
    <footer class="bg-balck rounded-lg shadow mt-4 ">
      <div class="w-full mx-auto max-w-screen-xl md:flex md:items-center md:justify-between p-4">
        <span class="text-sm  sm:text-center ">
          © 2023{' '}
          <a href="https://getinfr.com/" class="hover:underline">
            Infr
          </a>
          . All Rights Reserved.
        </span>
        <ul class="flex flex-wrap items-center mt-3 text-sm font-medium  sm:mt-0">
          <li>
            <a  class="mr-4 hover:underline md:mr-6" href="/privacy">
              Privacy Policy
            </a>
          </li>
          <li>
            <a class="mr-4 hover:underline md:mr-6" href="/terms">
              Terms of Use
            </a>
          </li>
          <li>
            <a  class="hover:underline" href="mailto:support@infrhq.com" target="_blank">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default FooterComponent;