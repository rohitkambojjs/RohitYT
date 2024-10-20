export interface Content {
    type: string; // Use lowercase 'string' for type consistency
    video: {
        author: {
            avatar: [{
                url: string
            }],
            badges: [
                {
                    text: string,
                    type: string
                }
            ], // VERIFIED_CHANNEL
            canonicalBaseUrl: string,
            title: string
        },
        badges: [],
        videoId: string,
        lengthSeconds: number,
        title: string,
        descriptionSnippet: string,
        isLiveNow: boolean,
        thumbnails: [
            { url: string }
        ],
        publishedTimeText: string,
        stats: {
            views: number
        }

    }
}
export interface Response {
    data: {
        contents: Content[];
    };
}