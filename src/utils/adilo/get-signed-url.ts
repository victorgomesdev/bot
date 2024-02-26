import axios from "axios";
import * as env from '../../../env.json'
import { SignedUrlResponse } from "../../models/ad-types";

export async function getSignedUrl(uploadId: string, partNumber: number, key: string): Promise<SignedUrlResponse> {

    const url = await axios({
        baseURL: `https://adilo-api.bigcommand.com/v1/files/upload/get-signed-url/${uploadId}/${partNumber}`,
        method: 'get',
        headers: {
            'X-Public-Key': env.AUTH_ADILO_KEY,
            'X-Secret-Key': env.AUTH_ADILO_SECRET,
            "Content-Type": 'application/json'
        },
        params: {
            key: key
        }
    })

    return url.data
}