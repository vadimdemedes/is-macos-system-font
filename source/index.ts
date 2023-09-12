import macosSystemFonts from 'macos-system-fonts';

export default function isMacosSystemFont(name: string): boolean {
	return macosSystemFonts.includes(name);
}
