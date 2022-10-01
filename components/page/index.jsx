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
            case 'bullsEye':
              return <BullEye elements={item} key={`bullsEye__${idx}`} />
            case 'headlineDescriptionVideo':
              return (
                <HeadlineDescriptionVideo
                  headline={item.headline}
                  description={item.description}
                  video={item.videoUrl}
                  key={`headlineDescriptionVideo__${idx}`}
                />
              )
            case 'quizCallSection':
              return (
                <QuizCallSection
                  ctaText={item.ctaText}
                  ctaTarget={item.ctaUrl}
                  description={item.description}
                  headline={item.headline}
                  image={item.image}
                  key={`quizCallSection__${idx}`}
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
            default:
              break
          }
        })}

      <div className="font-normal text-base pb-10 max-w-4xl mx-3 lg:mx-auto">
        <MarkdownContent content={content} />
      </div>
    </main>
  )
}
