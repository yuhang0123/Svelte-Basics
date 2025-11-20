import {json} from '@sveltejs/kit'
import {comments} from "$lib/comments.js"

export function GET() {
    // BEFORE IMPORT JSON
    /*
        return new Response (JSON.stringify(comments), {
        headers: {
            'Content-Type': ' application/json'
        }
    });
    */

    // AFTER IMPORT JSON
    return json(comments);
}

export async function POST(requestEvent) {
    const {request} = requestEvent;
    const {text} = await request.json();

    const newComment = {
        id: comments.length + 1,
        text
    };

    comments.push(newComment);
    return json(newComment, {status: 201});
}