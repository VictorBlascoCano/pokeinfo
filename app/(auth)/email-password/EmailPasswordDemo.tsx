"use client";

import { User } from "@supabase/supabase-js";

type EmailPasswordPageProps = {
	user: User | null;
};

export default function EmailPasswordDemo({ user }: EmailPasswordPageProps) {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			EMAIL PASSWORD DEMO
		</div>
	);
}
