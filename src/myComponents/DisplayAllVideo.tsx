import { Badge } from "../components/ui/badge"
import { Content } from "../interface"
interface DisplayAllVideoProps {
    allVideo: Content[],
    channel?: Content[],
}

function DisplayAllVideo({ allVideo }: DisplayAllVideoProps) {
    const editViews = (views: number) => {
        if (views >= 1000 && views < 1000000) {
            return parseInt(views / 1000) + "K"
        }
        else if (views >= 1000000 && views < 10000000) {
            return parseInt(views / 100000) / 10 + "M"
        } else if (views >= 10000000 && views < 1000000000) {
            return parseInt(views / 1000000) + "M"
        } else if (views >= 1000000000) {
            return parseInt(views / 1000000000) + "B"
        }
    }
    return (
        <>
        <div className="flex flex-col gap-5">
            {allVideo.map((Content) => (
                <div key={Content.video.videoId} className="flex gap-2">
                    {Content.video.thumbnails[0] && <img src={Content.video.thumbnails[0].url} width={400} alt="" />}
                    <div>
                        <h1 className="text-[1.4rem]">{Content.video.title}</h1>
                        <div className="flex gap-1 justify-start items-center">
                            <p>{editViews(Content.video.stats.views)} views</p>
                            <div className="w-1 h-1 bg-gray-900 rounded-full"></div>
                            <p>{Content.video.publishedTimeText}</p>
                        </div>
                        <div className="flex gap-2 items-center justify-start">
                            <img src={Content.video.author.avatar[0].url} width={25} className="rounded-full" alt="" />
                            <h1 className="text-[1rem]">{Content.video.author.title}</h1>
                        </div>
                        <p>{Content.video.descriptionSnippet}</p>
                        {Content.video.badges[0] && <Badge>{Content.video.badges[0]}</Badge>}
                    </div>
                </div>
            ))}
        </div>
        </>
    )
}

export default DisplayAllVideo
