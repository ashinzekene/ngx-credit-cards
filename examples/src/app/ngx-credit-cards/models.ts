export class FormatterOptions {
  cardType?: string;
  inputType: string;
  selector: string;
}

export class ValidityOptions {
  card: {
    niceType: string,
    type: string,
    gaps: number[],
    lengths: number[],
    code: { name: string, size: number}
  };
  isPotentiallyValid: boolean;
  isValid: boolean
} 