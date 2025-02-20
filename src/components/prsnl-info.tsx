import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface PersonalInfoProps {
  name: string;
  updateName: (name: string) => void;
  age: number | null;
  updateAge: (age: number) => void;
}

export default function PersonalInfo({
  name,
  age,
  updateName,
  updateAge,
}: PersonalInfoProps) {
  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle className="text-2xl text-center text-black">
          Personal Information
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-black">
            Name
          </Label>
          <Input
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => updateName(e.target.value)}
            className="text-black"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="age" className="text-black">
            Age
          </Label>
          <Input
            id="age"
            type="number"
            placeholder="Enter your age"
            value={age || ''}
            onChange={(e) => updateAge(Number.parseInt(e.target.value))}
            min={18}
            max={100}
            className="text-black"
          />
        </div>
      </CardContent>
    </Card>
  );
}
