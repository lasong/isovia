import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

/**
 * Renderer for the legal pages. Styles are explicit rather than a prose plugin
 * so the typography matches the rest of the site's tokens.
 */
export function Markdown({ content }: { content: string }) {
  return (
    <div className="max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="mb-8 font-display text-3xl text-primary sm:text-4xl">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="mt-12 mb-4 font-display text-xl text-primary sm:text-2xl">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="mt-8 mb-3 font-display text-lg text-primary">
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p className="mb-4 text-base leading-relaxed text-muted-foreground">
              {children}
            </p>
          ),
          ul: ({ children }) => (
            <ul className="mb-5 ml-5 list-disc space-y-2">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="mb-5 ml-5 list-decimal space-y-2">{children}</ol>
          ),
          li: ({ children }) => (
            <li className="text-base leading-relaxed text-muted-foreground">
              {children}
            </li>
          ),
          strong: ({ children }) => (
            <strong className="font-semibold text-foreground">{children}</strong>
          ),
          em: ({ children }) => (
            <em className="text-sm text-muted-foreground/80">{children}</em>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              className="text-primary underline underline-offset-2 hover:text-primary-dark"
              target={href?.startsWith("http") ? "_blank" : undefined}
              rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {children}
            </a>
          ),
          hr: () => <hr className="my-10 border-border" />,
          blockquote: ({ children }) => (
            <blockquote className="my-6 border-l-2 border-accent pl-5 text-sm text-muted-foreground">
              {children}
            </blockquote>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
