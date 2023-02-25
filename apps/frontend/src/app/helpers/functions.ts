import { config } from "./config";

export const authenticateUser = async (email: string, password: string): Promise<{ id: string; name: string; email: string; accessToken: string }> => {
    const response = await fetch(`${config.backendBaseUrl}/login`, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (!response.ok) {
      throw new Error('Invalid email or password');
    }
  
    const data = await response.json();
  
    return data;
  };
  