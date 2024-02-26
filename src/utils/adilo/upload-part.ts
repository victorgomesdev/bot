import axios, { AxiosResponse } from "axios";
import { Buffer } from "node:buffer";
import * as env from '../../../env.json'

export async function uploadVideoPart(part: Buffer, url: string) : Promise<AxiosResponse>{
    return await axios.put(url, part, {
        headers: {
            'X-Public-Key': env.AUTH_ADILO_KEY,
            'X-Secret-Key': env.AUTH_ADILO_SECRET,
            "Content-Type": 'video/mp4'
        }
    })
}