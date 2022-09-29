import ReactMarkdown from 'react-markdown'

export default function HeadlineDescriptionVideo({
  headline,
  description,
  video
}) {
  return (
    <div className="bg-bgWhite px-10 py-12">
      <h2 className="text-center font-black text-3xl mb-10">{headline}</h2>
      <div className="font-normal text-base mb-10 max-w-4xl mx-auto">
        <ReactMarkdown>{description}</ReactMarkdown>
      </div>
      <div
        id="responsiveVideoWrapper"
        className="max-w-4xl mx-auto relative h-0 pb-fluid-video md:pb-[25.25%]"
      >
        <video
          className="absolute top-0 left-0 w-full h-full object-cover aspect-video"
          width="100%"
          controls={true}
          src={video}
        ></video>
      </div>
    </div>
  )
}
