export function whatsapp (phone: number, message: string): string {
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}