import { HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ApiGateway } from "src/api-gateway";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root',
})
export class ConfigProvider {
    constructor(private apiGateway: ApiGateway) { }

    ngOnInit(): void { }
    store(context: string | null, register: any): Promise<any> {
        return new Promise((resolve, reject) => {
            this.apiGateway
                .post(
                    environment.CONFIG_MS + context, register
                )
                .subscribe((response: HttpResponse<any>) => {
                    resolve(response.body);
                }, reject);
        });
    }

    findAll(data: any): Promise<any> {
        return new Promise((resolve, reject) => {
            this.apiGateway.post(environment.CONFIG_MS + 'find/key', data)
                .subscribe((response: HttpResponse<any>) => {
                    resolve(response.body);
                }, reject);
        });
    }

    findOne(id: string, context: string): Promise<any> {
        return new Promise((resolve, reject) => {
            this.apiGateway.get(environment.CONFIG_MS + id + '/show/' + context)
                .subscribe((response: HttpResponse<any>) => {
                    resolve(response.body);
                }, reject);
        });
    }

    update(id: string, context: string, data: any): Promise<any> {
        return new Promise((resolve, reject) => {
            this.apiGateway.put(environment.CONFIG_MS + id + `/update/` + context, data)
                .subscribe((response: HttpResponse<any>) => {
                    resolve(response.body);
                }, reject);
        });
    }

    destroy(id: string, context: string | null): Promise<any> {
        return new Promise((resolve, reject) => {
            this.apiGateway
                .delete(environment.CONFIG_MS + id + '/delete/' + context)
                .subscribe((response: HttpResponse<any>) => {
                    resolve(response.body);
                }, reject);
        });
    }

}