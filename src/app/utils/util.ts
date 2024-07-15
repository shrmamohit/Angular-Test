import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

export const registerCustomIcons = function (
  matIconRegistry: MatIconRegistry,
  sanitizer: DomSanitizer
) {
  // Define a helper function to add SVG icons
  function addSvgIcon(iconName: string, filePath: string) {
    matIconRegistry.addSvgIcon(
      iconName,
      sanitizer.bypassSecurityTrustResourceUrl(filePath)
    );
  }
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const icons: { [key: string]: any } = {
    'user-icon': 'assets/images/user-icon.svg',
  };

  // Loop through the icons object and add each icon
  for (const iconName in icons) {
    // eslint-disable-next-line no-prototype-builtins
    if (icons.hasOwnProperty(iconName)) {
      addSvgIcon(iconName, icons[iconName]);
    }
  }
};
