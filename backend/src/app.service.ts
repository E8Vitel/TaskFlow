import { Injectable } from '@nestjs/common';
import { Proyecto } from './projects/interfaces/project.interface';
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getProjects(): Proyecto[] {
    return [
      {
        id: 1,
        nombre: 'proyecto web',
        estado: 'en progreso'
      },
      {
        id: 2,
        nombre: 'proyecto movil',
        estado: 'completado'
      },
      {
        id: 3,
        nombre: 'Api de clientes',
        estado: 'pendiente'
      }
    ]
  }
}
