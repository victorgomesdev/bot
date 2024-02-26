import axios, { AxiosResponse } from "axios";
import { PVFolderResponse } from "../../models/pd-types";
import * as env from '../../../env.json'

export async function getPandaFolders() {
    let result: AxiosResponse<PVFolderResponse> = await axios({
        baseURL: 'https://api-v2.pandavideo.com.br/folders',
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: env.AUTH_PV_KEY
        }
    })

    return result.data.folders
}
