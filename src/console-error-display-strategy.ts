import { IErrorLoggingStrategy } from './ierror-logging-strategy';
import chalk from 'chalk';
import { IErrorDisplayStrategy } from './ierror-display-strategy';

export class ConsoleErrorDisplayStrategy implements IErrorDisplayStrategy {
  display(title: string, body: string): void {
    console.log(`${chalk.red(title)}: ${chalk.blue(body)}`);
  }

}