import {Injectable} from "@angular/core";
import {MESSAGE} from "../models";


@Injectable({
  providedIn: 'root'
})

export class MessageCodeService {

  fromCode(code: string | null) {
    let message = MESSAGE[code as keyof typeof MESSAGE];
    if (!message) return `{${code}}`;
    return message;
  }
}
