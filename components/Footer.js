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
    <footer className="flex flex-col items-center mb-8">
      <p>Made With 🖤 by Kaan | Created With Nuxt.JS & TailwindCSS</p>
    </footer>
  );
}
