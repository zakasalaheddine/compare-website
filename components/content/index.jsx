import ReactMarkdown from 'react-markdown'

export default function MarkdownContent({ content }) {
  return (
    <div className='bg-bgWhite p-4 rounded-lg shadow-lg'>
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
          )
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
