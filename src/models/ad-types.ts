export interface FileUploadResponse{
    status: string
    message: string
    payload:{
        uploadId: string
        key: string
    }
}

export interface SignedUrlResponse{
    status: string
    message: string
    payload:{
        method: string
        url: string
    }
}

export type VideoPart = {

    ETag: string,
    PartNumber: number
}