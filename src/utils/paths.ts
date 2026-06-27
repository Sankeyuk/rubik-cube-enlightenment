const baseUrl = import.meta.env.BASE_URL;
const normalizedBase = baseUrl === "/" ? "" : baseUrl.replace(/\/$/, "");

export function sitePath(path: string): string {
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("mailto:") ||
    path.startsWith("tel:") ||
    path.startsWith("#")
  ) {
    return path;
  }

  if (!path.startsWith("/")) {
    return path;
  }

  if (path === "/") {
    return normalizedBase ? `${normalizedBase}/` : "/";
  }

  return `${normalizedBase}${path}`;
}

export function routePath(pathname: string): string {
  if (!normalizedBase) {
    return pathname;
  }

  if (pathname === normalizedBase) {
    return "/";
  }

  if (pathname.startsWith(`${normalizedBase}/`)) {
    return pathname.slice(normalizedBase.length);
  }

  return pathname;
}
