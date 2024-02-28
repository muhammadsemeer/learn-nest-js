import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from 'express';
import { IncomingHttpHeaders } from 'http';

interface CustomHeaders extends IncomingHttpHeaders {
  belt: string;
}

@Injectable()
export class BeltGuard implements CanActivate {
  private readonly logger = new Logger(BeltGuard.name);
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context
      .switchToHttp()
      .getRequest<Request & { headers: CustomHeaders }>();

    this.logger.debug('Checking if the request has a black belt');
    this.logger.log(request.headers);

    return request.headers.belt === 'black';
  }
}
