export const env = (requiredVars = []) => {
  const config = {};

  const missingVars = [];

  for (const key of requiredVars) {
    const value = process.env[key];

    if (!value) {
      missingVars.push(key);
    }

    config[key] = value;
  }

  if (missingVars.length) {
    throw new Error(`Missing environment variables: ${missingVars.join(", ")}`);
  }

  return config;
};
