'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

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
  name: string;
  age: number | null;
  skills: string[];
  experience: Experience[];
  education: Education;
  targetRole: string;
  targetCompany: string;
  recipientName: string;
}

interface FormContextProps {
  formData: FormData;
  coverLetter: string;
  setCoverLetter: (value: string) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  updateFormData: (field: keyof FormData, value: any) => void;
  setFormData: (data: FormData) => void;
}

const FormContext = createContext<FormContextProps | undefined>(undefined);

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [coverLetter, setCoverLetter] = useState('');
  const [formData, setFormData] = useState<FormData>({
    name: '',
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
    recipientName: '',
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        updateFormData,
        setFormData,
        coverLetter,
        setCoverLetter,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};
