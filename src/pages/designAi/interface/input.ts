export default interface Input {
    defValue: string;
    label?: string;
    name: string;
    name2?: string;
    onChangeHandler?: (type: string, value: string, value2?: string) => void;
    disabled?: boolean;
    placeholder?: string;
    inputClassName?: string;
    error?: string;
    onFileChange?: (type: string, e: React.ChangeEvent<HTMLInputElement>) => void;
    selectArray?: { id: string; name: string; image?: string; value?: string }[];
  }
  