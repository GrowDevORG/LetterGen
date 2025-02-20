'use client';

import { useState } from 'react';
import PersonalInfo from '../../components/prsnl-info';
import SkillsForm from '../../components/skills-form';
import ExperienceForm from '../../components/exp-form';
import EducationForm from '../../components/education-form';
import TargetForm from '../../components/target-form';
import ProgressIndicator from '../../components/progress-indicator';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string;
}

interface Education {
  degree: string;
  institution: string;
  year: string;
}

interface FormData {
  age: number | null;
  skills: string[];
  experience: Experience[];
  education: Education;
  targetRole: string;
  targetCompany: string;
}

export default function Page() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    age: null,
    skills: [],
    experience: [
      {
        company: '',
        role: '',
        duration: '',
        description: '',
      },
    ],
    education: {
      degree: '',
      institution: '',
      year: '',
    },
    targetRole: '',
    targetCompany: '',
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step < 5) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <PersonalInfo
            age={formData.age}
            updateAge={(age) => updateFormData('age', age)}
          />
        );
      case 2:
        return (
          <SkillsForm
            skills={formData.skills}
            updateSkills={(skills) => updateFormData('skills', skills)}
          />
        );
      case 3:
        return (
          <ExperienceForm
            experience={formData.experience}
            updateExperience={(exp) => updateFormData('experience', exp)}
          />
        );
      case 4:
        return (
          <EducationForm
            education={formData.education}
            updateEducation={(edu) => updateFormData('education', edu)}
          />
        );
      case 5:
        return (
          <TargetForm
            targetRole={formData.targetRole}
            targetCompany={formData.targetCompany}
            updateTarget={(role, company) => {
              updateFormData('targetRole', role);
              updateFormData('targetCompany', company);
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col bg-white">
      <header>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">LetterGen</h1>
          <div className="flex items-center gap-2">
            <span>Abhishek</span>
            <div className="relative w-10 h-10 rounded-full overflow-hidden">
              <Image
                src="/image/avatar.png"
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </header>
      <div className="min-h-screen flex flex-col justify-center bg-white">
        <main className="container mx-auto max-w-3xl px-4 py-8">
          <div className="space-y-8">
            {renderStep()}

            <div className="flex justify-center gap-4">
              {step > 1 && (
                <Button
                  variant="outline"
                  onClick={handleBack}
                  className="bg-blue-500 hover:bg-blue-600 text-white"
                >
                  Back
                </Button>
              )}
              <Button
                onClick={handleNext}
                className="bg-blue-500 text-white hover:bg-blue-600"
              >
                {step === 5 ? 'Submit' : 'Next'}
              </Button>
            </div>

            <ProgressIndicator currentStep={step} />
          </div>
        </main>
      </div>
    </div>
  );
}
