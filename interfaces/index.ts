import { AxiosResponse } from "axios";

export interface HTTPMethods {
    get<T>(url: string, params?: unknown): Promise<AxiosResponse>;
    post<T>(url: string, params?: unknown): Promise<AxiosResponse>;
    upload<T>(url: string, params?: unknown): Promise<AxiosResponse>;
    download(url: string): void;
}