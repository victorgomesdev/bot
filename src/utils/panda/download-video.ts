import axios from 'axios'
import * as env from '../../../env.json'
import { ReadStream }  from 'node:fs'

export async function downloadVideoFromPanda(videoId: string): Promise<ReadStream>{

    const video = await axios({
        baseURL: `https://download-us01.pandavideo.com:7443/videos/${videoId}/download`,
        method: 'post',
        headers: {
            Authorization: env.AUTH_PV_KEY
        },
        responseType: 'stream'
    })

    return video.data
}
