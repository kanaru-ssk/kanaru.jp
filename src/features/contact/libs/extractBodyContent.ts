export const extractBodyContent = (htmlString: string): string => {
  const startTag = "<body>";
  const endTag = "</body>";
  const startIndex = htmlString.indexOf(startTag);
  const endIndex = htmlString.indexOf(endTag);
  if (endIndex === -1 || startIndex === -1) return "";

  const contentStartIndex = startIndex + startTag.length;
  return htmlString.substring(contentStartIndex, endIndex);
};
