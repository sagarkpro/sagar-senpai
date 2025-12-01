"use server";
import { supabase } from "../lib/supabaseClient";
import DeleteLog from "./_components/DeleteLog";

// This is a Server Component by default in the app router
export default async function LogsPage() {
	const { data, error } = await supabase.from("logs").select("id, logItem").limit(100); // adjust as needed


	if (error) {
		console.error("Error fetching logs:", error);
	}
  else
  console.log("fetched data: ", data);
  

	const logs = data ?? [];

	return (
		<div className="min-h-screen text-xl font-semibold">
			<h1 className="text-3xl font-bold mb-4">API Logs</h1>

			<p className="">Showing the most recent {logs.length} log entries from Supabase.</p>

			<div className="flex flex-col gap-4">
				{logs.length === 0 && <div className="p-4 rounded-xl border-white bg-background-contrast">No logs found.</div>}

				{logs.map((log) => (
					<div key={log.id} className="overflow-x-auto">
						<div className="w-full flex justify-between items-center">
							<div>Log ID {log.id}</div>
							<DeleteLog logId={log.id} />
						</div>
						<pre className="m-0 p-3 rounded-md bg-background-contrast leading-tight overflow-x-auto whitespace-pre">
							<code>{JSON.stringify(log.logItem, null, 2)}</code>
						</pre>
					</div>
				))}
			</div>
		</div>
	);
}
