export function firstCharToUpper(sentence: string): string {
  const brokenSentence = sentence.split(/[\ _]/g);
  const upperCaseWords = brokenSentence.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );

  return upperCaseWords.join(" ");
}

export function isString(value: unknown): value is string {
  return typeof value === "string";
}

export function impossibleAction(value: never, module: string): never {
  throw new Error(`Impossible action from module -- ${module} --: ${value}`);
}
