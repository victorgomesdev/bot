import axios, { AxiosResponse } from "axios";
import { VideoResponse } from '../../models/pd-types'
import * as env from '../../../env.json'

export async function listVideos(folderId: string) {

    let videos: AxiosResponse<VideoResponse> = await axios({
        method: 'get',
        baseURL: `https://api-v2.pandavideo.com.br/videos?folder_id=${folderId}`,
        headers: {
            Accept: 'application/json',
            Authorization: env.AUTH_PV_KEY
        },
    })

    return videos.data.videos
}