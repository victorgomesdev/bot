import axios from "axios";
import { Video } from "../../models/pd-types";
import * as env from '../../../env.json'
import parseSec from "./parse-seconds";
import { FileUploadResponse } from "../../models/ad-types";

export async function getInitUpload(video: Video): Promise<FileUploadResponse>{

    
    const init = await axios({
        baseURL: 'https://adilo-api.bigcommand.com/v1/files/upload/start',
        method: 'post',
        headers:{
            'X-Public-Key': env.AUTH_ADILO_KEY,
            'X-Secret-Key': env.AUTH_ADILO_SECRET,
            "Content-Type": 'application/json'
        },
        data:{
            filename: video.title + 'mp4',
            filesize: video.storage_size,
            duration_seconds: video.length,
            duration_string: parseSec(video.length),
            mime_type: 'video/mp4',
            project_id: env.PROJECT_ID,
            drm_protection: false,
            folder_id: env.TARGET_FOLDER
        }
    })

    return init.data
}