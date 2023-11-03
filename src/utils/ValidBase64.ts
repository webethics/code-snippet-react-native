export default function isValidBase64 (input: string)  {
    const dataURIPattern =
      /^data:([a-zA-Z0-9]+\/[a-zA-Z0-9.-]+)?(;[a-zA-Z0-9-]+=[a-zA-Z0-9-]+)*;base64,([a-zA-Z0-9+/=]+)$/;
  
    const matches = input.match(dataURIPattern);
    if (matches === null) {
      return false;
    }
    return true;
};