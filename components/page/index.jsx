import Features from 'components/features'
import HeadlineImage from 'components/headlineImage'
import BullEye from '../bullsEye'
import MarkdownContent from '../content'
import Headline from '../headline'
import HeadlineDescriptionVideo from '../headlineDescriptionVideo'
import QuizCallSection from '../quizCall'
import ToolsSection from '../toolsSection'

export default function PageComponent({ page }) {
  const { sections, headline, content } = page
  return (
    <main className="bg-white-text">
      <Headline content={headline} />
      {sections &&
        sections.map(({ collection, item }, idx) => {
          switch (collection) {
            case 'bullEye':
              return <BullEye elements={item} key={`bullsEye__${idx}`} />
            case 'headlineDescriptionVideo':
              return (
                <HeadlineDescriptionVideo
                  headline={item.headline}
                  description={item.description}
                  video={item.videoURL}
                  key={`headlineDescriptionVideo__${idx}`}
                />
              )
            case 'quizCall':
              return (
                <QuizCallSection
                  ctaText={item.ctaText}
                  ctaTarget={item.ctaTarget}
                  description={item.description}
                  headline={item.headline}
                  image={item.image}
                  key={`quizCall__${idx}`}
                />
              )
            case 'tools':
              return (
                <ToolsSection
                  tools={item.tools}
                  headline={item.headline}
                  key={`tools__${idx}`}
                />
              )
            case 'headlineImage':
              return (
                <HeadlineImage
                  headline={item.headline}
                  image={item.image}
                  key={`headlineImage__${idx}`}
                />
              )
            case 'features':
              return <Features features={item.items} key={`features__${idx}`} />
            default:
              break
          }
        })}

      {content && (
        <div className="font-normal text-base pb-10 max-w-4xl mx-3 lg:mx-auto">
          <MarkdownContent content={content} />
        </div>
      )}
    </main>
  )
}
