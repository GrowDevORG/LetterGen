import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface PersonalInfoProps {
  age: number | null;
  updateAge: (age: number) => void;
}

export default function PersonalInfo({ age, updateAge }: PersonalInfoProps) {
  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle className="text-2xl text-center text-black">
          Personal Information
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
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
