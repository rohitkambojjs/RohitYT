import { useState } from 'react'
import axios from 'axios';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Content, Response } from "../interface"

interface SearchInputProps {
    className?: string,
    setAllVideos: (videos: Content[]) => void;
    setChannel: (channel: Content[]) => void;
    setPlaylist: (playlist: Content[]) => void;
}

function SearchInput({ setAllVideos, setChannel, setPlaylist, className }: SearchInputProps) {
    const [searchQuery, setSearchQuery] = useState("")

    const options = {
        method: 'GET',
        url: 'https://youtube-data8.p.rapidapi.com/search/',
        params: {
            q: searchQuery,
            hl: 'en',
            gl: 'US'
        },
        headers: {
            'x-rapidapi-key': 'a802f94368mshec35b09ad28128ep1ec6f6jsnb9a6afa3afe0',
            'x-rapidapi-host': 'youtube-data8.p.rapidapi.com'
        }
    };

    const searchVideo = async () => {
        try {
            const response: Response = await axios.request(options);
            console.log(response.data);
                setChannel([])
                setAllVideos([])
                setPlaylist([])
            if (response.data) {
                const channel: Content[] = response.data.contents.filter((Content) => Content.type === "channel")
                const video: Content[] = response.data.contents.filter((Content) => Content.type === "video")
                const playlist: Content[] = response.data.contents.filter((Content) => Content.type === "playlist")
                setChannel(channel)
                setAllVideos(video)
                setPlaylist(playlist)
            }
        } catch (error) {
            console.error(error);
        }
    }

    const handleKey = (event: { key: any; }) => {
        if (event.key === "Enter") {
            console.log("hi");
            searchVideo()
        }
    }
    return (
        <>
            <div className={`${className} w-full flex gap-2`}>
                <div className='w-full flex'>
                    <Input placeholder='Search' onKeyDown={handleKey} className='rounded-full rounded-r-none' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                    <Button className='rounded-full rounded-l-none' onClick={searchVideo}>
                        <i className="fa-solid text-lg fa-magnifying-glass"></i>
                    </Button>
                </div>
                <div>

                </div>
            </div>
        </>
    )
}

export default SearchInput
