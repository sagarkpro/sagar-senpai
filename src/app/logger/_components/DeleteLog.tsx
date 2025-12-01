"use client";
import { supabase } from "@/app/lib/supabaseClient";
import { useRouter } from "next/navigation";
import React from "react";
import { FaTrash } from "react-icons/fa6";

export default function DeleteLog({ logId }: { logId: string }) {
	const router = useRouter();
	async function deleteLog() {
		const { error } = await supabase.from("logs").delete().eq("id", logId);
		if (error) {
			console.error("Failed to delete log:", error);
		} else {
			router.refresh();
		}
	}
	return (
		<button onClick={deleteLog} className="bg-white hover:cursor-pointer text-black p-0 px-4 h-10 font-bold rounded-full text-base w-max m-2">
			<FaTrash />
		</button>
	);
}
