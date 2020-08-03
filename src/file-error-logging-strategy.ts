import { IErrorLoggingStrategy } from './ierror-logging-strategy';
import fs from 'fs';
export class FileErrorLoggingStrategy implements IErrorLoggingStrategy{
  log(err: Error): Promise<any> {
    return new Promise((resolve, reject) => {
      fs.appendFile("logs/error.log", err.toString(), "utf8", (err) => {
        if (err) {
          console.log("error logging failed");
          resolve(err);
        } else {
          resolve();
        }
      });
    });
  }

}