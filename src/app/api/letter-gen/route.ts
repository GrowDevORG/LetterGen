import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

interface CoverLetterRequest {
  age: number;
  skills: string[];
  experience: {
    company: string;
    role: string;
    duration: string;
    description: string;
  }[];
  education: {
    degree: string;
    institution: string;
    year: string;
  };
  targetRole: string;
  targetCompany: string;
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(request: Request) {
  try {
    const body: CoverLetterRequest = await request.json();

    if (
      !body.skills ||
      !body.experience ||
      !body.targetRole ||
      !body.targetCompany
    ) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const prompt = `Generate a professional cover letter for a ${body.targetRole} position at ${body.targetCompany} with the following details:

Background:
- Age: ${body.age}
- Skills: ${body.skills.join(', ')}

Experience:
${body.experience
  .map(
    (exp) => `- ${exp.role} at ${exp.company} (${exp.duration})
  ${exp.description}`
  )
  .join('\n')}

Education:
- ${body.education.degree} from ${body.education.institution} (${body.education.year})

Please create a compelling cover letter that:
1. Highlights relevant skills and experience
2. Shows enthusiasm for ${body.targetCompany}
3. Explains why I'm a good fit for the ${body.targetRole} position
4. Maintains a professional yet engaging tone
5. Keeps the length to one long paragraph
6. Don't add dummy data or placeholder text in the cover letter and create cover letter only based on the provided information.`;

    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Return the generated cover letter
    return NextResponse.json({ coverLetter: text }, { status: 200 });
  } catch (error) {
    console.error('Error generating cover letter:', error);
    return NextResponse.json(
      { error: 'Failed to generate cover letter' },
      { status: 500 }
    );
  }
}
