export const isSeeModeHelper = id => {
  const idByDefault = '0';
  const isIdDefined = Boolean(id);

  return isIdDefined && id !== idByDefault;
};
