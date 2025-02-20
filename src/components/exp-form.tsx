import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trash2 } from 'lucide-react';

interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string;
}

interface ExperienceFormProps {
  experience: Experience[];
  updateExperience: (experience: Experience[]) => void;
}

export default function ExperienceForm({
  experience,
  updateExperience,
}: ExperienceFormProps) {
  const updateField = (
    index: number,
    field: keyof Experience,
    value: string
  ) => {
    const updatedExperience = experience.map((exp, i) => {
      if (i === index) {
        return { ...exp, [field]: value };
      }
      return exp;
    });
    updateExperience(updatedExperience);
  };

  const addExperience = () => {
    updateExperience([
      ...experience,
      { company: '', role: '', duration: '', description: '' },
    ]);
  };

  const removeExperience = (index: number) => {
    updateExperience(experience.filter((_, i) => i !== index));
  };

  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle className="text-2xl text-center text-black">
          Work Experience
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {experience.map((exp, index) => (
          <div key={index} className="space-y-4 p-4 border rounded-lg relative">
            {experience.length > 1 && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2"
                onClick={() => removeExperience(index)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-black">Company</Label>
                <Input
                  placeholder="Company name"
                  value={exp.company}
                  onChange={(e) =>
                    updateField(index, 'company', e.target.value)
                  }
                  className="text-black"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-black">Role</Label>
                <Input
                  placeholder="Job title"
                  value={exp.role}
                  onChange={(e) => updateField(index, 'role', e.target.value)}
                  className="text-black"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-black">Duration</Label>
                <Input
                  placeholder="e.g. 2 years"
                  value={exp.duration}
                  onChange={(e) =>
                    updateField(index, 'duration', e.target.value)
                  }
                  className="text-black"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-black">Description</Label>
              <Textarea
                placeholder="Describe your responsibilities and achievements"
                value={exp.description}
                onChange={(e) =>
                  updateField(index, 'description', e.target.value)
                }
                className="h-24 text-black"
              />
            </div>
          </div>
        ))}
        <Button
          type="button"
          variant="outline"
          onClick={addExperience}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white"
        >
          Add Another Experience
        </Button>
      </CardContent>
    </Card>
  );
}
