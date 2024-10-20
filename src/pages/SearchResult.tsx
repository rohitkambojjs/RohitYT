import { useState } from 'react'
import { Content } from "../interface"
import DisplayAllVideo from '../myComponents/DisplayAllVideo'
import SearchInput from '../myComponents/SearchInput'

function SearchResult() {
    const [allVideo, setAllVideos] = useState<Content[]>([])
    const [channel, setChannel] = useState<Content[] | undefined>()
    const [playlist, setPlaylist] = useState<Content[] | undefined>()
    return (
        <>
            <div className='w-full'>
                <div className='relative'>
                    <div className='w-full fixed bg-white py-3 sm:px-0 px-4'>
                        <SearchInput className='sm:w-[400px] md:w-[600px] mx-auto' setChannel={setChannel} setAllVideos={setAllVideos} setPlaylist={setPlaylist} />
                    </div>
                </div>
                <div className='py-20'>
                    <DisplayAllVideo allVideo={allVideo} />
                </div>
            </div>
        </>
    )
}

export default SearchResult
