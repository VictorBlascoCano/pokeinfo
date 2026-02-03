import { createSupabaseServerClient } from "@/lib/supabase/server-client";
import EmailPasswordDemo from "./EmailPasswordDemo";

const EmailPasswordPage = async () => {
	const supabase = await createSupabaseServerClient();
	const {
		data: { user },
	} = await supabase.auth.getUser();

	return <EmailPasswordDemo user={user} />;
};

export default EmailPasswordPage;
