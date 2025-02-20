import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Education {
  degree: string;
  institution: string;
  year: string;
}

interface EducationFormProps {
  education: Education;
  updateEducation: (education: Education) => void;
}

export default function EducationForm({
  education,
  updateEducation,
}: EducationFormProps) {
  const updateField = (field: keyof Education, value: string) => {
    updateEducation({ ...education, [field]: value });
  };

  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle className="text-2xl text-center text-black">
          Education
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label className="text-black">Degree</Label>
          <Input
            placeholder="e.g. Bachelor of Computer Science"
            value={education.degree}
            onChange={(e) => updateField('degree', e.target.value)}
            className="text-black"
          />
        </div>
        <div className="space-y-2">
          <Label className="text-black">Institution</Label>
          <Input
            placeholder="University name"
            value={education.institution}
            onChange={(e) => updateField('institution', e.target.value)}
            className="text-black"
          />
        </div>
        <div className="space-y-2">
          <Label className="text-black">Graduation Year</Label>
          <Input
            type="text"
            placeholder="e.g. 2020"
            value={education.year}
            onChange={(e) => updateField('year', e.target.value)}
            className="text-black"
          />
        </div>
      </CardContent>
    </Card>
  );
}
