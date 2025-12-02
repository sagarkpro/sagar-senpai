/* eslint-disable @typescript-eslint/no-explicit-any */
export function formDataToJson(formData: FormData) {
  if(!formData){
    return undefined
  }
  const obj: Record<string, any> = {};

  for (const [key, value] of formData.entries()) {
    obj[key] = value;
  }

  return obj;
}
