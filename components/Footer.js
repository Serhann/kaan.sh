const ExternalLink = ({ href, children }) => (
  <a
    className="text-black hover:text-gray-900 dark:text-gray-600 dark:hover:text-gray-700 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="mb-8 text-gray-600 dark:text-gray-400 flex flex-col items-center">
      <p><small>Made with 🖤 by Kaan using Next.JS and TailwindCSS.</small></p>
    </footer>
  );
}
