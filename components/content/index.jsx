import Script from 'next/script'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

export default function MarkdownContent({ content }) {
  return (
    <div className="bg-bgWhite p-4 rounded-lg shadow-lg">
      <ReactMarkdown
        components={{
          p: ({ children }) => <p className="pb-4 text-base">{children}</p>,
          h2: ({ children }) => (
            <h2 className="pb-8 pt-2 text-3xl font-black">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="pb-8 pt-2 text-2xl font-black">{children}</h3>
          ),
          h4: ({ children }) => (
            <h4 className="pb-8 pt-2 text-xl font-black">{children}</h4>
          ),
          ul: ({ children }) => (
            <ul className="py-2 list-disc px-8">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="py-2 list-decimal px-8">{children}</ol>
          ),
          script: ({ node }) =>
            typeof window !== 'undefined' ? (
              <Script
                src={node.properties.src}
                type={node.properties.type}
                allowTransparency={!!node.properties.allowtransparency}
                allowFullScreen={!!node.properties.allowFullScreen}
                onLoad={window.parent.scrollTo(0, 0)}
              />
            ) : null
        }}
        rehypePlugins={[rehypeRaw]}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
