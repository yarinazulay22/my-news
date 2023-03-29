import { Controller, All, Next, Session } from '@nestjs/common';
import { NextFunction } from 'express';


export let SESSION: Record<string, any>;
@Controller()
export class AppController {
  constructor() {}

  @All('*')
   async proxyRequest(@Next() next: NextFunction, @Session() session: Record<string, any>) {
    SESSION=session
    SESSION.visit = SESSION.visit ? SESSION.visit + 1 :1;
    console.log(session);
    setTimeout(next,1000)
    
  }
  

}