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

    findAll(context: any, key: string): Promise<any> {
        return new Promise((resolve, reject) => {
            this.apiGateway.get(environment.CONFIG_MS + context + '/find/' + key)
                .subscribe((response: HttpResponse<any>) => {
                    resolve(response.body);
                }, reject);
        });
    }

    findOne(context: string, id: string): Promise<any> {
        return new Promise((resolve, reject) => {
            this.apiGateway.get(environment.CONFIG_MS + context + '/show/' + id)
                .subscribe((response: HttpResponse<any>) => {
                    resolve(response.body);
                }, reject);
        });
    }

    update(context: string, id: string, data: any): Promise<any> {
        return new Promise((resolve, reject) => {
            this.apiGateway.put(environment.CONFIG_MS + context + `/update/` + id, data)
                .subscribe((response: HttpResponse<any>) => {
                    resolve(response.body);
                }, reject);
        });
    }

    destroy(context: string | null, id: string,): Promise<any> {
        return new Promise((resolve, reject) => {
            this.apiGateway
                .delete(environment.CONFIG_MS + context + '/delete/' + id)
                .subscribe((response: HttpResponse<any>) => {
                    resolve(response.body);
                }, reject);
        });
    }

}