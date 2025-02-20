import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

interface CoverLetterRequest {
  name: string;
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

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API || '');

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

    const prompt = `
    Generate a professional cover letter for the following job opportunity:

    ##Job Details:
    - **Position:** ${body.targetRole}
    - **Company:** ${body.targetCompany}

    ##Background:
    - **Name:** ${body.name}
   - **Age:** ${body.age}
   - **Skills:** ${body.skills.join(', ')}

    ##Experience:
    ${body.experience
      .map(
        (exp) => `- ${exp.role} at ${exp.company} (${exp.duration})
    ${exp.description}`
      )
      .join('\n')}

   ##Education:
   - **Degree:** ${body.education.degree}
   - **Institution:** ${body.education.institution} 
   - **Year:** ${body.education.year}

  ##Instructions
- Highlights relevant skills and experience
- Shows enthusiasm for ${body.targetCompany}
- Explains why I'm a good fit for the ${body.targetRole} position
- Maintains a professional yet engaging tone
- Keeps the length to one long paragraph
- Atleast 200 words
- Avoid using any placeholder details such as [Your Name],[Platform],[responsibilities] . The generated cover letter must contain actual details.
- Ensure proper spacing throughout the cover letter and no newline characters : "\n" or "\" in the response anywhere.
- Avoid any text enclosed in []`;
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
    const result = await model.generateContent([prompt]);
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
