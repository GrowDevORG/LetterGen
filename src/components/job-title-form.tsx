import { Input } from '@/components/ui/input';

interface JobTitleFormProps {
  jobTitle: string;
  updateJobTitle: (title: string) => void;
}

export default function JobTitleForm({
  jobTitle,
  updateJobTitle,
}: JobTitleFormProps) {
  return (
    <div className="w-full space-y-6 text-center">
      <h1 className="text-4xl font-bold">
        What&apos;s your desired job title?
      </h1>
      <Input
        type="text"
        placeholder="e.g. Frontend Developer"
        value={jobTitle}
        onChange={(e) => updateJobTitle(e.target.value)}
        className="max-w-md mx-auto"
      />
    </div>
  );
}
