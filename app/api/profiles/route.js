import { prisma } from "@/lib/db";

export async function GET(request, { params }) {
    try {
        const { id } = await params;
        const profile = await prisma.profile.findUnique({
            where: { id: parseInt(id) },
        });

        if (!profile) {
            return Response.json({ error: 'Profile not found' }, { status: 404 });
        }

        return Response.json(profile, { status: 200 });
    } catch (error) {
        return Response.json({ error: 'Failed to fetch' }, { status: 500 });
    }
}

export async function PUT(request, { params }) {
    try {
        const { id } = await params;
        const body = await request.json(); // Using JSON for simplicity

        const updated = await prisma.profile.update({
            where: { id: parseInt(id) },
            data: {
                name: body.name,
                major: body.major,
                year: parseInt(body.year),
                gpa: parseFloat(body.gpa),
            },
        });

        return Response.json(updated, { status: 200 });
    } catch (error) {
        return Response.json({ error: 'Update failed' }, { status: 500 });
    }
}

export async function DELETE(request, { params }) {
    try {
        const { id } = await params;
        await prisma.profile.delete({
            where: { id: parseInt(id) },
        });
        return Response.json({ message: 'Deleted' }, { status: 200 });
    } catch (error) {
        return Response.json({ error: 'Delete failed' }, { status: 500 });
    }
}