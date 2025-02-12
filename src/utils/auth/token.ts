export const getToken = (name) => {
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
      const [key, value] = cookie.split("=");
      if (key === name) return value;
    };
    return null;
};

export const decodeToken = (token) => {
  if (!token) return null;

  const parts = token.split(".");
  if (parts.length !== 3) {
      console.error("Invalid token format");
      return null;
  }

  try {
      const payload = JSON.parse(atob(parts[1]));
      return payload;
  } catch (error) {
      console.error("Failed to decode JWT", error);
      return null;
  }
};

export const removeToken = async () => {
  try {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    window.location.reload()
  } catch (error) {
    console.error("Log out attempt error", error);
  }
};