import axios, { AxiosError, AxiosResponse } from 'axios';
import { HTTPMethods } from './interfaces';

export class UseRequest implements HTTPMethods {
   
    get<T>(url: string, params?: unknown): Promise<AxiosResponse<any, any>> {
        throw new Error('Method not implemented.');
    }
    
    post<T>(url: string, params?: unknown): Promise<AxiosResponse<any, any>> {
        throw new Error('Method not implemented.');
    }

    upload<T>(url: string, params?: unknown): Promise<AxiosResponse<any, any>> {
        throw new Error('Method not implemented.');
    }

    download(url: string): void {
        throw new Error('Method not implemented.');
    }
    

}
