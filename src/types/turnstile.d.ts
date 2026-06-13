interface TurnstileInstance {
  render: (container: HTMLElement | null, options: {
    sitekey: string;
    callback: (token: string) => void;
  }) => void;
}

interface Window {
  turnstile?: TurnstileInstance;
}
