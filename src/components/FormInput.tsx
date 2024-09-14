import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
type FormInputProps = {
  name: string;
  type: string;
  label?: string;
  defaultValue?: string;
};

const FormInput = ({ label, name, defaultValue }: FormInputProps) => {
  return (
    <div className="mb-2">
      <Label className="capitalize" htmlFor={name}>
        {label || name}
      </Label>
      <Input id={name} name={name} type="text" defaultValue={defaultValue} />
    </div>
  );
};

export default FormInput;
