import { DocuementType } from './document-type.models';
import { LanguageType } from './language-type.models';

export interface DocumentBody {
  prompt: string;
  documentType: DocuementType;
  languageType: LanguageType;
  modelType: number;
}
