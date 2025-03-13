import { IAmodels } from '../models/ia-models.models';

export interface MessageSenderBody {
  prompt: string;
  model: IAmodels;
}
