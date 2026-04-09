import prisma from "@/lib/db";

// GET all profiles
export async function GET() {
    try {
        const profiles = await prisma.profile.findMany();
        return Response.json(profiles, { status: 200 });
    } catch (error) {
        return Response.json({ error: "Failed to fetch profiles" }, { status: 500 });
    }
}

// POST a new profile (Add Student)
export async function POST(request) {
    try {
        const body = await request.json();
        
        const newProfile = await prisma.profile.create({
            data: {
                name: body.name,
                major: body.major,
                year: parseInt(body.year),
                gpa: parseFloat(body.gpa),
            },
        });

        return Response.json(newProfile, { status: 201 });
    } catch (error) {
        console.error("Post Error:", error);
        return Response.json({ error: "Failed to create profile" }, { status: 500 });
    }
}