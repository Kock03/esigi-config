import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiGateway } from 'src/api-gateway';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ModuleProvider {
  constructor(private apiGateway: ApiGateway) { }

  
  ngOnInit(): void { }

  findAll(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.apiGateway
        .get(environment.CONFIG_MS + 'modules')
        .subscribe((response: HttpResponse<any>) => {
          resolve(response.body);
        }, reject);
    });
  }

  findOne(id: string | null): Promise<any> {
    return new Promise((resolve, reject) => {
      this.apiGateway
        .get(environment.CONFIG_MS + 'modules/:id', { id: id })
        .subscribe((response: HttpResponse<any>) => {
          resolve(response.body);
        }, reject);
    });
  }

  find(name: string, status?: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.apiGateway
        .get(environment.CONFIG_MS + 'modules/find/?' + name + '&' + status)
        .subscribe((response: HttpResponse<any>) => {
          resolve(response.body);
        }, reject);
    });
  }

  update(id: string | null, module: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.apiGateway
        .put(environment.CONFIG_MS + 'modules/:id', { id: id }, module)
        .subscribe((response: HttpResponse<any>) => {
          resolve(response.body);
        }, reject);
    });
  }

  store(module: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.apiGateway
        .post(environment.CONFIG_MS + 'modules', module)
        .subscribe((response: HttpResponse<any>) => {
          resolve(response.body);
        }, reject);
    });
  }

  destroy(moduleId: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.apiGateway
        .delete(environment.CONFIG_MS + 'modules/' + moduleId)
        .subscribe((response: HttpResponse<any>) => {
          resolve(response.body);
        }, reject);
    });
  }
}
