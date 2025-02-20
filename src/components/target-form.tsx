import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface TargetFormProps {
  recipientName: string;
  targetRole: string;
  targetCompany: string;
  updateTarget: (recipientName: string, role: string, company: string) => void;
}

export default function TargetForm({
  recipientName,
  targetRole,
  targetCompany,
  updateTarget,
}: TargetFormProps) {
  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle className="text-2xl text-center text-black">
          Career Goals
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label className="text-black">Recipient Name</Label>
          <Input
            placeholder="e.g. Sacha Dubois"
            value={recipientName}
            className="text-black"
            onChange={(e) =>
              updateTarget(e.target.value, targetRole, targetCompany)
            }
          />
        </div>
        <div className="space-y-2">
          <Label className="text-black">Target Role</Label>
          <Input
            placeholder="e.g. Senior Frontend Developer"
            value={targetRole}
            className="text-black"
            onChange={(e) =>
              updateTarget(recipientName, e.target.value, targetCompany)
            }
          />
        </div>
        <div className="space-y-2">
          <Label className="text-black">Target Company</Label>
          <Input
            placeholder="Dream company name"
            value={targetCompany}
            onChange={(e) =>
              updateTarget(recipientName, targetRole, e.target.value)
            }
            className="text-black"
          />
        </div>
      </CardContent>
    </Card>
  );
}
