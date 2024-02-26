import axios, { AxiosResponse } from "axios";
import { VideoPart } from "../../models/ad-types";

export async function completeUpload(key: string, uploadId: string, parts: VideoPart[]): Promise<AxiosResponse>{

    const finish = await axios({

        baseURL: 'https://adilo-api.bigcommand.com/v1/files/upload/complete',

        data:{
            key: key,
            uploadId: uploadId,
            parts: parts,
        }
    })

    return finish.data
}