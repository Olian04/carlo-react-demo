declare function env(): Promise<{ [key: string]: string }>;
export const getEnv = async () => {
  const data = await env();
  return data;
};