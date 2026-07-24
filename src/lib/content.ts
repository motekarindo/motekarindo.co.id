export function byOrder<T extends { data: { order: number } }>(items: T[]) {
  return [...items].sort((a, b) => a.data.order - b.data.order);
}

export function featured<T extends { data: { featured?: boolean; order: number } }>(items: T[]) {
  return byOrder(items).filter((item) => item.data.featured);
}

export function statusLabel(status: string) {
  const labels: Record<string, string> = {
    "in-development": "Dalam pengembangan",
    "coming-soon": "Segera hadir",
    available: "Tersedia",
  };

  return labels[status] ?? status;
}
