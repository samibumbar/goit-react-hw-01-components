interface ButtonProps {
  label?: string;
  loading?: boolean;
}

export function Button({ label, loading }: ButtonProps) {
  if (loading) {
    return <>Loading</>;
  }

  label?.toUpperCase();

  return <button>{label}</button>;
}
