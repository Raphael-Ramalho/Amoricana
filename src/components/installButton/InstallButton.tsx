import { SyntheticEvent, useEffect, useState } from "react";
import { Text } from "../generic/generic.style";
import { DownloadIcon, StyledButton } from "./InstallButton.styled";

export const InstallButton = () => {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState<Event | null>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();

      setSupportsPWA(true);
      setPromptInstall(e);
    };
    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("transitionend", handler);
  }, []);

  const onClick = (evt?: SyntheticEvent<HTMLElement, MouseEvent>) => {
    evt?.preventDefault();
    if (!promptInstall) {
      return;
    }
    (promptInstall as any)?.prompt?.();
  };

  if (!supportsPWA) {
    return null;
  }

  return (
    <StyledButton
      className="link-button"
      id="setup_button"
      aria-label="Install app"
      title="Install app"
      size="small"
      onClick={onClick}
    >
      <Text>
        Instalar
        <DownloadIcon />
      </Text>
    </StyledButton>
  );
};
